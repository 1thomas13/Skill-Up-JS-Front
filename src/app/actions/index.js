import axios from 'axios'
import { GET_CATEGORIES } from './types'

const { URL } = process.env

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
