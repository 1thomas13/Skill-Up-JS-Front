import instance from '../../utils/instance'
import {
  ADD_TRANSACTION,
  ALL_TRANSACTIONS,
  GET_BALANCE,
  GET_CATEGORIES,
  GET_USER,
  GET_USERS,
  LOGIN_USER,
  LOGOUT_USER
} from './types'

export const getCategories = () => async (dispatch) => {
  try {
    const res = await instance.get('/categories')
    console.log(res)
    return dispatch({ type: GET_CATEGORIES, payload: res.data.body })
  } catch (error) {
    return error.message
  }
}
export function postCategory(payload) {
  return async function () {
    try {
      const response = await instance.post('/categories', payload)
      return response
    } catch (e) {}
  }
}

export const createUser = async (values) => {
  const res = await instance.post('/users', values)
  console.log(res)
  if (res.status !== 200) {
    console.log(res.message)
    throw new Error(res.message)
  }
}

export const logUser = (values) => async (dispatch) => {
  const res = await instance.post('/users/login', values)

  if (res.status !== 200) {
    console.log(res.message)
    throw new Error(res.message)
  }
  localStorage.setItem('token', res.data.body.token)
  sessionStorage.setItem('role', res.data.body.userData.roleId)

  dispatch({ type: LOGIN_USER, payload: res.data.body.userData })

  return res
}

export function logout() {
  return { type: LOGOUT_USER }
}

export const getUsers = () => async (dispatch) => {
  try {
    const res = await instance.get('/users')
    return dispatch({ type: GET_USERS, payload: res.data.body })
  } catch (e) {
    return e.message
  }
}

export const getTransactions = () => async (dispatch) => {
  try {
    const res = await instance.get('/transactions')
    console.log(res)
    return dispatch({ type: ALL_TRANSACTIONS, payload: res.data.body })
  } catch (e) {
    return e.message
  }
}

export const createTransaction = (values) => async (dispatch) => {
  const res = await instance.post('/transactions', values)
  console.log(res)
  if (res.status !== 200) {
    console.log(res.message)
    throw new Error(res.message)
  }

  return dispatch({ type: ADD_TRANSACTION, payload: res.data.body })
}

export const getBalance = () => (dispatch) => {
  return dispatch({ type: GET_BALANCE })
}

export const getUser = () => async (dispatch) => {
  try {
    const res = await instance.get('/users/user')
    dispatch({ type: GET_USER, payload: res.data.body })
    return res
  } catch (err) {
    console.log(err.message)
  }
}

export const updatePassword = (payload) => async() => {
  try {
    const res = await instance.put('/users/user/changepassword', payload)
    return res.data
  } catch (err) {
    console.log(err.message)
  }
}

export const deleteUser = () => async () => {
  try {
    const res = await instance.delete('/users/user')
    return res.data
  } catch (err) {
    console.log(err.message)
  }
}
