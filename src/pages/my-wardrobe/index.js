import { Typography } from "@material-ui/core"
import React from "react"
import LayoutWrapper from "../../components/layout/layoutWrapper"

function MyWardrobe() {
  return <Typography paragraph>My wardrobe page</Typography>
}

export default LayoutWrapper(MyWardrobe)
