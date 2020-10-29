import { Box, Typography } from "@material-ui/core"
import React, { useEffect, useState } from "react"
import LayoutWrapper from "../../components/layout/layoutWrapper"
import SEO from "../../components/seo"
import { GetPostCommentsDataService } from "../../services/homepage"
import { useTranslation } from "gatsby-plugin-react-i18next"

function DetailPage(props) {
  const [postComments, setPostComments] = useState([])
  const { t } = useTranslation()

  useEffect(async () => {
    if (props.id) {
      const res = await GetPostCommentsDataService(props.id)
      setPostComments(res)
    }
  }, [])

  return (
    <>
      <SEO title={`Comments on Post ${props.id}`} />
      {t('Detail Page')}
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
