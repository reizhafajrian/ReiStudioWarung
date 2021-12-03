import * as types from '../types'

const initialState = {
  products: [],
  product: {},
  loading: false,
  error: null,
}

export const productReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading: false,
        error: null,
      }
    default:
      return state
  }
}
