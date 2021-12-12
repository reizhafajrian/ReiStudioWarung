import { combineReducers } from 'redux'
import { loggedReducer } from './loggedReducers'
import { productReducer } from './productReducers'

export default combineReducers({
  product: productReducer,
  user: loggedReducer,
})
