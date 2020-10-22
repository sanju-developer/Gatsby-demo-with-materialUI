import { navigate } from "gatsby"
import React, { useEffect } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => {
  useEffect(() => {
    console.log('asjdkajhsdkahskdjhask')
    navigate("/")
  }, [])

  return (
    <Layout>
      <SEO title="404: Not found" />
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}

export default NotFoundPage
