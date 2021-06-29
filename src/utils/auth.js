import Cookies from 'js-cookie'

const TokenKey = 'Access-Token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token,{ expires: 7 })
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function getUser() {
  return Cookies.get('user')
}

export function setUser(user) {
  return Cookies.set('user', JSON.stringify(user),{ expires: 7 })
}

export function removeUser() {
  return Cookies.remove('user')
}
