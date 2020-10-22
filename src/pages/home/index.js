import { Box, Button, Typography } from "@material-ui/core"
import { CircularProgress, List, ListItemText } from "@material-ui/core"
import { navigate } from "gatsby"
import React, { useEffect } from "react"
import { connect } from "react-redux"
import LayoutWrapper from "../../components/layout/layoutWrapper"
import { GetHomePageDataAction } from "../../redux/actions/actionConstant/homepageAction"

const Home = props => {
  const { apiData, getHomePageData } = props
  useEffect(() => {
    getHomePageData()
  }, [])

  return (
    <>
      <Box padding={1} bgcolor="background.paper" component="div">
        <Typography color="text-white"> {props && props.uri}</Typography>
      </Box>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate("/home/1")}
      >
        Get details
      </Button>
      <List component="nav" aria-label="secondary mailbox folders">
        {apiData && apiData.length === 0 ? (
          <CircularProgress color="primary" />
        ) : (
          apiData &&
          apiData.map(post => (
            <>
              <ListItemText primary={post.id} key={post.id}/>
              <Typography paragraph>{post.title}</Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={() => navigate(`/home/${post.id}`, { state: post.id })}
              >
                Get details
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LayoutWrapper(Home))

// export default LayoutWrapper(Home)

Home.defaultProps = {
  apiData: [],
}
