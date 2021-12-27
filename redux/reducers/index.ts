import { combineReducers } from 'redux'
import { alertReducer } from './alertReducers'
import { cartReducer } from './cartReducers'
import { loadingReducer } from './loadingReducers'
import { loggedReducer } from './loggedReducers'

export default combineReducers({
  user: loggedReducer,
  cart: cartReducer,
  loading: loadingReducer,
  alert: alertReducer,
})
