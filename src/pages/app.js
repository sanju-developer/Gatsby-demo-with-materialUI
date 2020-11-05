import React, { useEffect } from "react"
import { getTokenFromLS } from "../services/auth"
import Routing from "./routes"

const App = props => {
  useEffect(() => {
    if (getTokenFromLS()) {
      navigate("/app/home")
    }
  }, [])

  return (
    <>
      <Routing {...props} />
    </>
  )
}

export default App
