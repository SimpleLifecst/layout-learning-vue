/**
 * @TokenKey 对token相关的操作，读取、存储、移除
 */
const TokenKey = 'token'

export function getToken() {
  return sessionStorage.getItem(TokenKey)
}

export function setToken(token: string) {
  return sessionStorage.setItem(TokenKey, token)
}

export function removeToken() {
  return sessionStorage.removeItem(TokenKey)
}
