import * as types from '../types'

export const fetchProducts = () => async (dispatch: any) => {
  dispatch({
    type: types.GET_PRODUCTS,
    payload: ['product 1', 'product 2', 'product 3'],
  })
}
