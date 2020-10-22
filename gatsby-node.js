exports.onCreatePage = ({ page, actions }) => {
  const { createPage, createRedirect } = actions

  createRedirect({
        fromPath: `/`,
        toPath: `/home`,
        redirectInBrowser: true,
        isPermanent: true,
      })

  // Make the front page match everything client side.
  // Normally your paths should be a bit more judicious.
  if (page.path === `/`) {
    page.matchPath = `/*`
    createPage(page)
  }
}