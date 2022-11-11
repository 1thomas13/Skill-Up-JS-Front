import { ALL_TRANSACTIONS, MY_TRANSACTIONS } from '../actions/types'

const initialState = {
  transactions: []
}

function transactionReducer (state = initialState, { type, payload }) {
  switch (type) {
    case ALL_TRANSACTIONS: return {
      ...state,
      transactions: payload
    }
    case MY_TRANSACTIONS: return {
      ...state,
      transactions: payload
    }

    default: return state
  }
}

export default transactionReducer
