import PropTypes from "prop-types"
import React from "react"
import AppBar from "@material-ui/core/AppBar"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import Toolbar from "@material-ui/core/Toolbar"
import { Box, Menu, MenuItem, Typography } from "@material-ui/core"
import { useI18next } from "gatsby-plugin-react-i18next"
import { Link } from "gatsby-plugin-react-i18next"
import { connect } from "react-redux"
import { actionConstants } from "../../redux/actions/actionConstant"
import { AccountCircle } from "@material-ui/icons"
import ExitToAppIcon from "@material-ui/icons/ExitToApp"
import { navigate } from "gatsby"
import { clearLS } from "../../utils/helperFunc"

const Header = ({ handleDrawerToggle, classes, setCurrentLang }) => {
  const { languages, originalPath } = useI18next()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const { navigate } = useI18next()
  
  const handleMenu = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = lng => {
    setCurrentLang(lng)
    setAnchorEl(null)
  }

  const handleLogout = () => {
    clearLS()
    navigate('/')
  }

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.customeToolbar}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          Responsive drawer
        </Typography>
        <Box>
          <IconButton
            edge="end"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <IconButton
            edge="end"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleLogout}
            color="inherit"
          >
            <ExitToAppIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={open}
            onClose={handleClose}
          >
            {languages.map(lng => (
              <li key={lng}>
                <Link to={originalPath} language={lng}>
                  <MenuItem onClick={() => handleClose(lng)}>{lng}</MenuItem>
                </Link>
              </li>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

const mapDispatchToProps = dispatch => {
  return {
    setCurrentLang: lng =>
      dispatch({ type: actionConstants.CURRENTLNG, payload: lng }),
  }
}

export default connect(null, mapDispatchToProps)(Header)
