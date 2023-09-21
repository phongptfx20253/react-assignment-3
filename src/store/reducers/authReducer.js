const initialState = {
  currentUser: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ON_LOGIN":
      return {
        ...state,
        currentUser: action.payload,
      };
    case "ON_LOGOUT":
      return {
        ...state,
        currentUser: null,
      };
    default:
      return state;
  }
};

export default authReducer;
