let initialState = false
export const loadingReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'LOADING':
      return (state = action.payload)
    default:
      return state
  }
}
