import React from "react"
import ResponsiveDrawerLayout from "."
import { topbarWidth } from "../../utils/commonConstant"

const LayoutWrapper = Component => props => {
  return (
    <>
      <ResponsiveDrawerLayout/>
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
    </>
  )
}

export default LayoutWrapper
