import React from "react"
import { Provider } from "react-redux"

import SEO from "../components/seo"
import ResponsiveDrawerLayout from "../components/layout"
import { topbarWidth } from "../utils/commonConstant"
import store from "../redux/store"
import { ThemeProvider } from "@material-ui/core"
import theme from "../../theme"

const IndexPage = Component => props => (
  <>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <ResponsiveDrawerLayout>
          <SEO title="Home" />
        </ResponsiveDrawerLayout>
        {Component && (
          <main
            style={{
              marginTop: topbarWidth,
              padding: 16,
            }}
          >
            <Component {...props} />
          </main>
        )}
      </Provider>
    </ThemeProvider>
  </>
)

export default IndexPage
