import * as types from '../types'

export const productReducer = (state = {}, action: any) => {
  switch (action.type) {
    case types.FETCH_PRODUCTS:
      return {
        products: action.payload,
      }
    case types.FILTER_PRODUCTS_BY_CAT:
      return {
        ...state,
        category: action.payload.category,
        filteredItems: action.payload.items,
      }
    default:
      return state
  }
}
