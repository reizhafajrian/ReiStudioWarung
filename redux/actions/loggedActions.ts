import * as types from '../types'

export const getUser = () => async (dispatch: any) => {
  const userReq = await fetch('http://localhost:3000/api/auth')

  const userRes = await userReq.json()

<<<<<<< HEAD
  console.log(userRes)

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
=======
  if (typeof userRes.status !== "undefined" && userRes.status === 200) {
    console.log("userRes", userRes);
    dispatch({
      type: types.GET_USER,
      payload: userRes,
    });
    dispatch({
      type: types.ADD_TO_CART_ALL,
      payload: [...userRes.user.cart],
    });
  }
};
>>>>>>> 08c1a034aafa99b86fe2a568264103ab261daa05
