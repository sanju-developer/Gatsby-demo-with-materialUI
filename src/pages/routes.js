import React from "react"
import { Router } from "@reach/router"
import Home from "./home/index"
import DetailPage from "./home/detail"
import Login from "./login"
import PrivateRoute from "../components/privateRoute"

const Routing = () => {
  return (
    <Router basepath="/">
      <PrivateRoute path="/auth/home" component={Home} />
      <PrivateRoute path="/auth/home/detail/:id" component={DetailPage} />
      <Login path="/auth/login" />
      <Login path="/" />
    </Router>
  )
}
export default Routing
