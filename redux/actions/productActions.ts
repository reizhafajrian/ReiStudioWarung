import * as types from '../types'

// Get all products
export const getProducts = () => async (dispatch: any) => {
  const res = await fetch('http://localhost:3000/api/products')

  const data = await res.json()

  dispatch({
    type: types.FETCH_PRODUCTS,
    payload: { data },
  })
}

export const filterProducts =
  (products: [], category: string) => async (dispatch: any) => {
    dispatch({
      type: types.FILTER_PRODUCTS_BY_CAT,
      payload: {
        category: category,
        items:
          category === ''
            ? products
            : products.filter((x: any) =>
                x.category.filter((y: any) => y === category)
              ),
      },
    })
  }

// export const sortProducts =
//   (filteredProducts: [], sort: string) => async (dispatch: any) => {
//     const sortedProducts = filteredProducts.slice();
//     if(sort === ''){
//       sortedProducts.sort((a,b)=>(a._id >b._id ? 1:-1))
//     }
//     dispatch(
//     {
//       type:
//     }
//     )
//   };
