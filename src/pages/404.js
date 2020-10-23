import React from "react"
import LayoutWrapper from "../components/layout/layoutWrapper"

import SEO from "../components/seo"

const NotFoundPage = () => {
  return (
    <>
      <SEO title="404: Not found" />
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </>
  )
}

export default LayoutWrapper(NotFoundPage)
