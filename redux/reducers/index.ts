import { combineReducers } from 'redux'
import { cartReducer } from './cartReducers'
import { loggedReducer } from './loggedReducers'

export default combineReducers({
  user: loggedReducer,
  cart: cartReducer,
})
