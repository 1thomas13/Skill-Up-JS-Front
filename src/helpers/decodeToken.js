import jwt_decode from 'jwt-decode'

export const decodeToken = (token) => {
  const decode = jwt_decode(token)
  return decode
}
