import * as types from '../types'

const initialState = {
  loggedIn: false,
  forAdmin: false,
}

export const loggedReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.LOAD_USER:
      return {
        ...state,
        loggedIn: action.payload.status === 200 && true,
        forAdmin: action.payload.user.role === 1 && true,
      }
    default:
      return state
  }
}
