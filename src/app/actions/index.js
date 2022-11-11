import axios from 'axios'
import { GET_CATEGORIES, LOGIN_USER, LOGOUT_USER, GET_USERS } from './types'
import { instance } from '../../../utils/instance'

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

export const createUser = async (values) => {
  const response = await instance.post('/users', values)
  console.log(response)
  return response
}

export const logUser = (values) => async (dispatch) => {
  const res = await instance.post('/users/login', values)
  console.log(res)
  localStorage.setItem('token', JSON.stringify(res.data.body.token))
  dispatch({ type: LOGIN_USER, payload: res.data.body.userData })

  return res
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
