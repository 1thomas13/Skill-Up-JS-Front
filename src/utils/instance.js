import axios from 'axios'
const getToken = () => (localStorage.getItem('token') ? localStorage.getItem('token') : null)

console.log(getToken())

const getAuthorizationHeader = () => `Bearer ${getToken()}`

const instance = axios.create({
  baseURL: import.meta.env.VITE_URL
})

instance.interceptors.request.use(
  function (config) {
    if (getToken() !== null) {
      config.headers.Authorization = getAuthorizationHeader()
    }
    return config
  },
  function (err) {
    return Promise.reject(err)
  }
)

export default instance
