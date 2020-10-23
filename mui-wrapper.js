import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './theme.js'

export default ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
)