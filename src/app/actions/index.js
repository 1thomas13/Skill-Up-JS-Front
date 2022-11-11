import { instance } from '../../../utils/instance'
import axios from 'axios'
import { GET_CATEGORIES, LOGIN_USER, LOGOUT_USER, GET_USERS } from './types'

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

    }
  }
}

export function createUser (payload) {
  return async function () {
    const response = await axios.post(`${URL}/users`, payload)
    return response
  }
}

export function logUser (payload) {
  return async function (dispatch) {
    const response = await axios.post(/* Endpoint de logeo, */ payload)
    return dispatch({ type: LOGIN_USER, payload: response.data.user })
  }
}

export function logout () {
  return { type: LOGOUT_USER }
}

export function getUsers () {
  return async function (dispatch) {
    try {
      const res = await axios.get(`${URL}/users`)
      return dispatch({ type: GET_USERS, payload: res.data.users })
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

export const updatePassword = async (userid, payload) => {
  const res = await instance.put(`/users/changepassword/${userid}`, payload)
  return res
}

export const deleteUser = async (userid) => {
  const res = await instance.delete(`users/${userid}`)
  return res
}
