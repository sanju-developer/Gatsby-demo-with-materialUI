import React from "react"
import { Router } from "@reach/router"
import Home from "./home/index.js"
import DetailPage from "./home/detail"
import Login from "./login"
import PrivateRoute from "../components/privateRoute"
import MyWardrobe from "./my-wardrobe/index.js"
import Covid from "./covid/index.js"

const Routing = (props) => {
  return (
    <Router>
      <PrivateRoute path="/app/home" component={Home} />
      <PrivateRoute path="/app/home/detail/:id" component={DetailPage} />
      <PrivateRoute path="/app/my-wardrobe" component={MyWardrobe}/>
      <Login path="/app/login" />
      <Login path="/" />
      <Covid path="/app/covid"/>
    </Router>
  )
}
export default Routing
