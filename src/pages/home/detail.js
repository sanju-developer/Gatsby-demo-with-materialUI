import { Box, Typography } from "@material-ui/core"
import React, { useEffect, useState } from "react"
import LayoutWrapper from "../../components/layout/layoutWrapper"
import { GetPostCommentsDataService } from "../../services/homepage"

function DetailPage(props) {
  const [postComments, setPostComments] = useState([])

  useEffect(async() => {
    const res = await GetPostCommentsDataService(props.id)
    
    setPostComments(res)
  }, [])

  return (
    <>
      DetailPage
      {postComments.length !== 0 &&
        postComments.map(Comment => (
          <Box key={Comment.id}>
            <Typography>{Comment.id}</Typography>
            <Typography paragraph>{Comment.name}</Typography>
          </Box>
        ))}
    </>
  )
}

export default LayoutWrapper(DetailPage)
