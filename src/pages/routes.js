import React from "react"
import { Router } from "@reach/router"
import Home from "./home/index.js"
import DetailPage from "./home/detail"
import Login from "./login"
import PrivateRoute from "../components/privateRoute"

const Routing = (props) => {
  return (
    <Router>
      <PrivateRoute path="/app/home" component={Home} />
      <PrivateRoute path="/app/home/detail/:id" component={DetailPage} />
      <Login path="/app/login" />
      <Login path="/" />
    </Router>
  )
}
export default Routing
