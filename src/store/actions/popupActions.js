export const showPopup = (product) => {
  return {
    type: "SHOW_POPUP",
    payload: product,
  };
};

export const hidePopup = () => {
  return {
    type: "HIDE_POPUP",
  };
};
