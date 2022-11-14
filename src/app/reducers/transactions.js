/* eslint-disable no-case-declarations */
import {
  ADD_TRANSACTION,
  ALL_TRANSACTIONS,
  GET_BALANCE,
  MY_TRANSACTIONS,
  SEND_MONEY
} from '../actions/types'

const initialState = {
  transactions: [],
  balance: 0
}

function transactionReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ALL_TRANSACTIONS:
      return {
        ...state,
        transactions: payload
      }
    case ADD_TRANSACTION:
      return {
        ...state,
        transactions: [payload, ...state.transactions]
      }
    case MY_TRANSACTIONS:
      return {
        ...state,
        transactions: payload
      }
    case GET_BALANCE:
      let bal = 0
      for (let i = 0; i < state.transactions.length; i++) {
        if (state.transactions[i].categoryId === 1) {
          bal = bal + state.transactions[i].amount
        } else {
          bal = bal - state.transactions[i].amount
        }
      }
      return {
        ...state,
        balance: bal
      }
    case SEND_MONEY:
      return {
        ...state,
        balance: state.balance - payload.amount
      }
    default:
      return state
  }
}

export default transactionReducer
