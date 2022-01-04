import cookie from 'js-cookie'
import { Get } from 'utils/axios'
import * as types from '../types'

export const getUser = () => async (dispatch: any) => {
  const token = cookie.get('token')
  const userRes: any = await Get('http://localhost:3000/api/auth', token)

  if (userRes.user) {
    dispatch({
      type: types.GET_USER,
      payload: userRes,
    })
    if (userRes.user.role == 0) {
      dispatch({
        type: types.ADD_TO_CART_ALL,
        payload: [...userRes.user.cart],
      })
    }
  }
}
