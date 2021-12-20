import * as types from '../types'

export const addToCart = (product: any) => (dispatch: any) => {
  dispatch({
    type: types.ADD_TO_CART,
    payload: product,
  })
}

export const incrementItem = (product: any) => (dispatch: any) => {
  dispatch({
    type: types.INCREMENT_CART_ITEM,
    payload: product,
  })
}

export const decrementItem = (product: any) => (dispatch: any) => {
  dispatch({
    type: types.DECREMENT_CART_ITEM,
    payload: product,
  })
}

export const deleteItem = (product: any) => (dispatch: any) => {
  dispatch({
    type: types.DELETE_CART_ITEM,
    payload: product,
  })
}
