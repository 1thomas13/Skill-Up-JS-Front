import axios from 'axios'
const getToken = () =>
  localStorage.getItem('token')
    ? JSON.parse(localStorage.getItem('token'))
    : null

export const getAuthorizationHeader = () => `Bearer ${getToken()}`

export const instance = axios.create({
  baseURL: import.meta.env.VITE_URL,
  headers: { Authorization: getAuthorizationHeader() }
})
