export const addToCart = (product, quantity) => {
  return {
    type: "ADD_CART",
    payload: { product, quantity },
  };
};

export const updateCart = (productId, quantity) => {
  return {
    type: "UPDATE_CART",
    payload: { productId, quantity },
  };
};

export const deleteCart = (productId) => {
  return {
    type: "DELETE_CART",
    payload: productId,
  };
};

export const loadCart = () => {
  return {
    type: "LOAD_CART",
  };
};

export const setCartIconFlashing = (isFlashing) => {
  return {
    type: "SET_CART_ICON_FLASHING",
    payload: isFlashing,
  };
};
