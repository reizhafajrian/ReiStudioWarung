import { combineReducers } from "redux";
import { alertReducer } from "./alertReducer";
import { cartReducer } from "./cartReducers";
import { loadingReducer } from "./loadingReducers";
import { loggedReducer } from "./loggedReducers";
// (state = false, action) => state,
export default combineReducers({
  user: loggedReducer,
  cart: cartReducer,
  loading: loadingReducer,
  alert: alertReducer,
});
