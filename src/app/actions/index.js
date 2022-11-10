import axios from 'axios'
import { GET_CATEGORIES, LOG_USER, UNLOG_USER, GET_USERS } from './types'

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

export function logUser (payload) {
  return async function (dispatch) {
    try {
      const response = await axios.post(/* Endpoint de logeo, */ payload)
      return dispatch({ type: LOG_USER, payload: response.data.user })
    } catch (e) {
      console.log(e.message)
    }
  }
}

export function unlogUser () {
  return { type: UNLOG_USER }
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
