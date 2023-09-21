const initialState = {
  listCart: [],
  isCartIconFlashing: false,
};

const ADD_CART = "ADD_CART";
const UPDATE_CART = "UPDATE_CART";
const DELETE_CART = "DELETE_CART";
const LOAD_CART = "LOAD_CART";

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART:
      const newListCart = [
        ...state.listCart,
        {
          product: action.payload.product,
          quantity: action.payload.quantity,
        },
      ];
      localStorage.setItem("cart", JSON.stringify(newListCart));
      return {
        ...state,
        listCart: newListCart,
      };
    case UPDATE_CART:
      const updatedListCart = state.listCart.map((item) =>
        item.product._id.$oid === action.payload.productId
          ? { ...item, quantity: action.payload.quantity }
          : item
      );

      localStorage.setItem("cart", JSON.stringify(updatedListCart));
      return {
        ...state,
        listCart: updatedListCart,
      };
    case DELETE_CART:
      const filteredListCart = state.listCart.filter(
        (item) => item.product._id.$oid !== action.payload
      );

      localStorage.setItem("cart", JSON.stringify(filteredListCart));

      return {
        ...state,
        listCart: filteredListCart,
      };
    case LOAD_CART:
      const listCart = JSON.parse(localStorage.getItem("cart")) || [];
      return {
        ...state,
        listCart,
      };
    case "SET_CART_ICON_FLASHING":
      return {
        ...state,
        isCartIconFlashing: action.payload,
      };
    default:
      return state;
  }
};

export default cartReducer;
