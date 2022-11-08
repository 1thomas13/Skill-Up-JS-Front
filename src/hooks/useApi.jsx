import axios from 'axios'
import { useEffect, useState } from 'react'

const token = localStorage.getItem('token')

const instance = axios.create({
  baseURL: import.meta.env.VITE_URL,
  headers: token && { authorization: `Bearer ${token}` }
})

const useApi = ({ endpoint, method }) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  useEffect(() => {
    instance[method](endpoint)
      .then((res) => setData(res.data))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false))
  }, [endpoint, method])

  return { data, isLoading, error }
}

// USE
// Ex. = const { data, isLoading, error } = useApi({ endpoint: 'users', method: 'get' })
// console.log(data)

export default useApi
