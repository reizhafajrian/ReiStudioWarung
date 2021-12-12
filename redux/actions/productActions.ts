import * as types from '../types'

// Get all products
export const getProducts = () => async (dispatch: any) => {
  const productsReq = await fetch('http://localhost:3000/api/products')

  const products = await productsReq.json()

  dispatch({
    type: types.GET_PRODUCTS,
    payload: { products },
  })
}
