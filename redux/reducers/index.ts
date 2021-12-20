import { combineReducers } from 'redux'
import { cartReducer } from './cartReducers'
import { loggedReducer } from './loggedReducers'
import { productReducer } from './productReducers'

export default combineReducers({
  product: productReducer,
  user: loggedReducer,
  cart: cartReducer,
})
