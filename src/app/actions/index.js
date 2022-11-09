import axios from 'axios'
import { GET_CATEGORIES } from './types'

const { URL } = import.meta.env.VITE_URL

export function getCategories () {
  return async function (dispatch) {
    try {
      const response = await axios.get(`${URL}/categories`)
      return dispatch({ type: GET_CATEGORIES, payload: response.data })
    } catch (e) {
      console.log(e.message)
    }
  }
}

export function postCategory (payload) {
  return async function () {
    try {
      const response = await axios.post(`${URL}/categories`, payload)
      return response
    } catch (e) {
      console.log(e.message)
    }
  }
}

export function createUser (payload) {
  return async function () {
    try {
      const response = await axios.post(`${URL}/users`, payload)
      return response
    } catch (e) {
      console.log(e.message)
    }
  }
}

export function createTransaction (payload) {
  return async function () {
    try {
      const response = await axios.post(`${URL}/transactions`, payload)
      return response
    } catch (e) {
      console.log(e.message)
    }
  }
}
