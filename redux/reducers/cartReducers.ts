import cookie from 'js-cookie'
import * as types from '../types'

const Storage = (cartItems: []) => {
  cookie.set('cart', JSON.stringify(cartItems.length > 0 ? cartItems : []))
}

export const sumItems = (cartItems: []) => {
  Storage(cartItems)
  let itemCount = cartItems.reduce(
    (total, product: any) => total + product.quantity,
    0
  )
  let total = cartItems.reduce(
    (total, product: any) => total + product.selling_price * product.quantity,
    0
  )
  return { itemCount, total }
}

const storage = cookie.get('cart') ? JSON.parse(cookie.get('cart')!) : []

const initialState = {
  cartItems: storage,
  ...sumItems(storage),
  checkout: false,
}

export const cartReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.ADD_TO_CART:
      if (
        !state.cartItems.find((item: any) => item._id === action.payload._id)
      ) {
        state.cartItems.push({
          ...action.payload,
          quantity: 1,
        })
      }

      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      }
    case types.DELETE_CART_ITEM:
      return {
        ...state,
        ...sumItems(
          state.cartItems.filter((item: any) => item._id !== action.payload._id)
        ),
        cartItems: [
          ...state.cartItems.filter(
            (item: any) => item._id !== action.payload._id
          ),
        ],
      }
    case types.INCREMENT_CART_ITEM:
      state.cartItems[
        state.cartItems.findIndex(
          (item: any) => item._id === action.payload._id
        )
      ].quantity++
      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      }
    case types.DECREMENT_CART_ITEM:
      state.cartItems[
        state.cartItems.findIndex(
          (item: any) => item._id === action.payload._id
        )
      ].quantity--
      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      }
    case types.DELETE_ALL_ITEM:
      return {
        ...state,
        ...sumItems([]),
        cartItems: [],
      }
    case types.ADD_TO_CART_ALL:
      return {
        ...state,
        ...sumItems(action.payload),
        cartItems: [...action.payload],
      }
    default:
      return state
  }
}
