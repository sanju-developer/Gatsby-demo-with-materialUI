import React from "react"
import LayoutWrapper from "../components/layout/layoutWrapper"

// import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => {
  return (
    <LayoutWrapper>
      <SEO title="404: Not found" />
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </LayoutWrapper>
  )
}

export default NotFoundPage
