import axios from 'axios'
import { useEffect, useState } from 'react'

export const useApi = ({ endpoint, method, newData }) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  const token = localStorage.getItem('token')

  const instance = axios.create({
    baseURL: import.meta.env.VITE_URL,
    headers: { authorization: token && `Bearer ${token}` }
  })

  const config = {
    method,
    url: endpoint,
    data: newData
  }

  useEffect(() => {
    instance(config)
      .then((res) => setData(res.data))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false))
  }, [endpoint, method, newData])

  //   USE EXAMPLE
  // const { isLoading } = useApi({ endpoint: 'users', method: "post", newData: newUser })
  //   console.log(isLoading)

  return { data, error, isLoading }
}
