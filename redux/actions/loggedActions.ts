import * as types from "../types";

export const getUser = () => async (dispatch: any) => {
  const userReq = await fetch("http://localhost:3000/api/auth");

  const userRes = await userReq.json();

  console.log(userRes);

  dispatch({
    type: types.GET_USER,
    payload: userRes,
  });
  dispatch({
    type: types.ADD_TO_CART_ALL,
    payload: [...userRes.user.cart],
  });
};
