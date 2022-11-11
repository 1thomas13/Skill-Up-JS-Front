import { GET_CATEGORIES, LOG_USER, UNLOG_USER, GET_USERS } from './actions/types'

const initialState = {
  categories: [],
  users: [],
  user: {}
}

function rootReducer (state = initialState, { type, payload }) {
  switch (type) {
    case GET_CATEGORIES: return {
      ...state,
      categories: payload
    }
    case LOG_USER: return {
      ...state,
      user: { ...payload }
    }
    case UNLOG_USER: return {
      ...state,
      user: {}
    }
    case GET_USERS: return {
      ...state,
      users: payload
    }

    default: return state
  }
}

export default rootReducer
