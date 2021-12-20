import * as types from '../types'

const initialState = {
  user: [],
  loggedIn: false,
  forAdmin: false,
}

export const loggedReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.GET_USER:
      return {
        ...state,
        user: action.payload.user,
        loggedIn: action.payload.status == 200 && true,
        forAdmin: action.payload.user?.role == 1 && true,
      }
    default:
      return state
  }
}
