import "./src/styles/global.css"
import React from 'react'
// Material Ui theme
import MuiRootWrapper from "./mui-wrapper"
// Redux
import WrapWithProvider from "./src/redux/store"

export const wrapRootElement = ({ element }) => {
  return (
    <MuiRootWrapper>
      <WrapWithProvider>{element}</WrapWithProvider>
    </MuiRootWrapper>
  )
}
