import { combineReducers } from "redux";
import authReducer from "./authReducer";
import cartReducer from "./cartReducer";
import popupReducer from "./popupReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  popup: popupReducer,
});

export default rootReducer;
