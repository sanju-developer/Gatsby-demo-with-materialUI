// exports.onCreatePage = ({ page, actions }) => {
//   const { createPage, createRedirect } = actions

//   // createRedirect({
//   //   fromPath: `/`,
//   //   toPath: `/login`,
//   //   redirectInBrowser: true,
//   //   isPermanent: true,
//   // })

//   // if (page.path === `/`) {
//   //   page.matchPath = `/:lang?/*`
//   //   createPage(page)
//   // }
// }
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions
  // Only update the `/app` page.
  if (page.path.match(/^\/auth/)) {
    // page.matchPath is a special key that's used for matching pages
    // with corresponding routes only on the client.
    page.matchPath = "/auth/*"
    // Update the page.
    createPage(page)
  }
}