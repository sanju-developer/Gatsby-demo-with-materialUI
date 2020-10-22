import React from "react"
import { Router } from "@reach/router"
import Home from "./home"
import DetailPage from "./home/detail"
const Route = () => {
  return (
      <Router basepath="/">
        <Home path="/" />
        <Home path="/home" />
        <DetailPage path="/home/:id"/>
      </Router>
  )
}
export default Route
