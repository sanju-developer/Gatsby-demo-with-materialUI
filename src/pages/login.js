import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import { Box, Button, FormHelperText } from "@material-ui/core"
import { useI18next } from "gatsby-plugin-react-i18next"
import { loginFormFields } from "../utils/commonConstant"
import { validateEmail } from "../utils/helperFunc"
import { setLoginTokenToLS } from "../services/auth"

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(2, "auto"),
      width: "50ch",
      display: "flex",
    },
  },
  container: {
    paddingTop: theme.spacing(3),
    margin: theme.spacing(2, "auto"),
    textAlign: "center",
  },
}))

function Login(props) {
  const [loginForm, setLoginForm] = useState(loginFormFields)
  const [isSubmitBtnClicked, setSubmitBtnClicked] = useState(false)
  const classes = useStyles()
  const { navigate } = useI18next()

  const inputHandler = e => {
    const { id, value } = e.target
    setLoginForm(prevState => ({ ...prevState, [id]: value }))
  }

  const loginBtnHandler = () => {
    if (validateEmail(loginForm.email) && loginForm.password.length > 5) {
      navigate("/auth/home")
      setLoginTokenToLS('tokenValue')
    } else setSubmitBtnClicked(true)
  }

  return (
    <div className={classes.container}>
      <Box component="h1">Login</Box>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="email"
          type="text"
          label="Enter email"
          variant="outlined"
          value={loginForm.email}
          error={loginForm.email.length === 0 && isSubmitBtnClicked}
          onChange={inputHandler}
          helperText={
            !validateEmail(loginForm.email) &&
            isSubmitBtnClicked && (
              <FormHelperText id="component-error-text" style={{color:'#ff1744'}}>
                Please enter a valid email
              </FormHelperText>
            )
          }
        />

        <TextField
          id="password"
          type="password"
          label="Enter password"
          variant="outlined"
          value={loginForm.password}
          error={loginForm.password.length === 0 && isSubmitBtnClicked}
          onChange={inputHandler}
          helperText={
            loginForm.password.length < 5 &&
            isSubmitBtnClicked && (
              <FormHelperText id="component-error-text" style={{color:'#ff1744'}}>
                Minimum password should be of 5 character
              </FormHelperText>
            )
          }
        />

        <Button variant="contained" color="primary" onClick={loginBtnHandler}>
          Login
        </Button>
      </form>
    </div>
  )
}

export default Login
