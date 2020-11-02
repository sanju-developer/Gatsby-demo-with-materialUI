export function isLoggedIn() {
  if (getTokenFromLS()) {
    return true
  }
  return false
}

function getTokenFromLS() {
  return localStorage.getItem("Token")
}

export function setLoginTokenToLS(token) {
  localStorage.setItem("Token", token)
}
