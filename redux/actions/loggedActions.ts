import * as types from '../types'

// Get all products
export const getUser = () => async (dispatch: any) => {
  const userReq = await fetch('http://localhost:3000/api/auth')
  const user = await userReq.json()


  dispatch({
    type: types.LOAD_USER,
    payload: user,
  })
}
