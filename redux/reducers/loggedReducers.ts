import * as types from '../types'

const initialState = {
  user: {},
  loggedIn: false,
  forAdmin: false,
  role: 0,
}

export const loggedReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.GET_USER:
      return {
        ...state,
        user: action.payload.user,
        loggedIn: action.payload.status == 200 && true,
        role: action.payload.user.role,
        forAdmin: (state.role == 1 || state.role == 2) && true,
      }
    default:
      return state
  }
}
