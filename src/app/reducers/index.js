import { combineReducers } from 'redux'
import userReducer from './user'
import transactionReducer from './transactions'
import categoryReducer from './category'

const reducers = combineReducers({
  user: userReducer,
  transactions: transactionReducer,
  categories: categoryReducer
})

export default reducers
