import React from "react"
import { Router } from "@reach/router"
import Home from "./home/index"
import DetailPage from './home/detail'

const Route = () => {
  return (
      <Router basepath="/">
        <Home path="/" />
        <Home path="/home/" />
        <DetailPage path="/home/detail/:id/"/>
      </Router>
  )
}
export default Route
