import {
  CLEAR_CART,
  ADD_ITEM_CART,
  REMOVE_ITEM_CART,
} from "./actionTypes";
import { TrendingProduct } from "../../../Models/products";

export const clearCartAction = () => ({
  type: CLEAR_CART,
});

export const addItemToCartAction = (item: TrendingProduct) => ({
  type: ADD_ITEM_CART,
  payload: { item },
});

export const removeItemFromCartAction = (id: number) => ({
  type: REMOVE_ITEM_CART,
  payload: { id },
});

