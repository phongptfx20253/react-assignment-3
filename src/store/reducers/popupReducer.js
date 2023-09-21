const initialState = {
  popupProduct: null,
  selectedProduct: null,
};

const popupReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_POPUP":
      return {
        ...state,
        popupProduct: action.payload,
      };
    case "HIDE_POPUP":
      return {
        ...state,
        popupProduct: null,
        selectedProduct: null,
      };
    default:
      return state;
  }
};

export default popupReducer;
