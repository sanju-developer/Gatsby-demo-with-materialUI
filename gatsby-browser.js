import "./src/styles/global.css"

// Material Ui theme
import muiRootWrapper from "./mui-wrapper"
// Redux
import wrapWithProvider from "./src/redux/store"

// export const wrapRootElement = muiRootWrapper
// export const wrapRootElementForRedux = wrapWithProvider
export const wrapRootElement = wrapWithProvider