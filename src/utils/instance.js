import axios from 'axios'

export const instance = axios.create({
  baseURL: import.meta.env.VITE_URL,
  headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}` }
})
