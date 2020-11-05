import { useI18next } from "gatsby-plugin-react-i18next"
import React, { useEffect } from "react"
import { getTokenFromLS } from "../services/auth"
import Routing from "./routes"

const App = props => {
  const { navigate } = useI18next()
  
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
