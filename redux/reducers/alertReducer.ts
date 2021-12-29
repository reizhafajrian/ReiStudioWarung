let initialState = {
  isVisible: false,
  message: "",
};
export const alertReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "SETALERT":
      return {
        ...state,
        isVisible: action.isVisible,
        color: action.color,
        message: action.message,
      };

    default:
      return state;
  }
};
