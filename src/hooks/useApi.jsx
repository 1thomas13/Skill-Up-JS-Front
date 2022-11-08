import axios from 'axios'
import { useEffect, useState } from 'react'

const { URL } = process.env

const token = localStorage.getItem('token')

const instance = axios.create({
  baseURL: URL,
  headers: token && { authorization: `Bearer ${token}` }
})

const getData = (endpoint) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    instance
      .get(endpoint)
      .then((res) => setData(res.data))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false))
  }, [endpoint])
  return { data, isLoading, error }
}

export const postData = async (endpoint) => {
  const res = await instance.post(endpoint)
  console.log(res)
}

const useApi = () => {
  return { getData, postData }
}

export default useApi
