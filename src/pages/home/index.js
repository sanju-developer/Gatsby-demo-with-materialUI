import { Box, Button, Typography } from "@material-ui/core"
import { CircularProgress, List, ListItemText } from "@material-ui/core"
import React, { useEffect } from "react"
import { connect } from "react-redux"
import IndexPage from ".."
import { GetHomePageDataAction } from "../../redux/actions/actionConstant/homepageAction"

function HomePage(props) {
  const { apiData, getHomePageData } = props
  useEffect(() => {
    getHomePageData()
  }, [])

  return (
    <>
      <Box padding={1} bgcolor="background.paper" component="div">
        <Typography color="text-white"> {props && props.uri}</Typography>
      </Box>
      <List component="nav" aria-label="secondary mailbox folders">
        {apiData && apiData.length === 0 ? (
          <CircularProgress color="primary" />
        ) : (
          apiData &&
          apiData.map(post => (
            <>
              <ListItemText primary={post.id} />
              <Typography paragraph>{post.title}</Typography>
              <Button variant="contained" color="primary">
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

export default IndexPage(connect(mapStateToProps, mapDispatchToProps)(HomePage))

HomePage.defaultProps = {
  apiData: [],
}
