import { Box, Button, Typography } from "@material-ui/core"
import { CircularProgress, List, ListItemText } from "@material-ui/core"

// import { navigate } from "gatsby"
import React, { useEffect } from "react"
import { connect } from "react-redux"
import LayoutWrapper from "../../components/layout/layoutWrapper"
import SEO from "../../components/seo"
import { GetHomePageDataAction } from "../../redux/actions/actionConstant/homepageAction"
import { Link, Trans, useTranslation } from "gatsby-plugin-react-i18next"
import { useI18next } from "gatsby-plugin-react-i18next"

const Home = props => {
  const { apiData, getHomePageData } = props
  const { t } = useTranslation()
  const { navigate } = useI18next()

  useEffect(() => {
    if (!apiData) getHomePageData()
  }, [])

  return (
    <>
      <SEO title="Available posts" />
      <Box padding={1} bgcolor="background.paper" component="div">
        <Typography color="text-white"> {props && props.uri}</Typography>
      </Box>
      <Link to="/page-2/">
        <Trans>Go to page 2</Trans>
      </Link>
      <List component="nav" aria-label="secondary mailbox folders">
        {apiData && apiData.length === 0 ? (
          <CircularProgress color="primary" />
        ) : (
          apiData &&
          apiData.map(post => (
            <>
              <ListItemText primary={post.id} key={post.id} />
              <Typography paragraph>{post.title}</Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={() =>
                  navigate(`/home/detail/${post.id}/`, { state: post.id })
                }
              >
                {t("Get details")}
              </Button>
            </>
          ))
        )}
      </List>
    </>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    getHomePageData: () => dispatch(GetHomePageDataAction()),
  }
}

const mapStateToProps = state => {
  return {
    apiData: state.home.apiData,
    lng: state.lng.selectedlng,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LayoutWrapper(Home))

Home.defaultProps = {
  apiData: [],
}
