import * as types from '../types'

// Get all products
export const getProducts = () => async (dispatch: any) => {
  const config = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  }

  const productsReq = await fetch('/api/products', config)

  // const products = await productsReq

  dispatch({
    type: types.GET_PRODUCTS,
    payload: productsReq,
  })
}
