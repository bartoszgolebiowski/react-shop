import { combineReducers } from "redux";

import productReducer from "./product/productReducer";
import cartReducer from "./cart/cartReducer";

import { ProductsState } from "../actions/event/actionTypes";
import { CartState } from "../actions/cart/actionTypes";

const rootReducer = combineReducers({
  productReducer,
  cartReducer,
});

export type RootState = {
  productReducer: ProductsState;
  cartReducer: CartState;
};

export default rootReducer;
