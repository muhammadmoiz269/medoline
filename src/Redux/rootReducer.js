import { combineReducers } from "redux";
import authReducers from "../Redux/auth/authReducer";
// import ProductsReducer from './Products/ProductsReducer';
// import cartReducer from './cart/cartReducer';
// import ModelReducer from './Modal/ModelReducer';
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; //local storage

var rootReducer = combineReducers({
  auth: authReducers,
});

export default rootReducer;
