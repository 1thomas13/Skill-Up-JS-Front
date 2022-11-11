import { LOGIN_USER, LOGOUT_USER, GET_USERS, GET_USER } from '../actions/types'

const initialState = {
  users: [],
  user: {}
}

function userReducer (state = initialState, { type, payload }) {
  switch (type) {
    case LOGIN_USER: return {
      ...state,
      user: { ...payload }
    }
    case LOGOUT_USER: return {
      ...state,
      user: {}
    }
    case GET_USERS: return {
      ...state,
      users: payload
    }
    case GET_USER: return {
      ...state,
      user: payload
    }

    default: return state
  }
}

export default userReducer
