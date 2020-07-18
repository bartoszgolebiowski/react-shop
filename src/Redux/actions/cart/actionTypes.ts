import { TrendingProduct } from "../../../Models/products";

export const CLEAR_CART: string = "CLEAR_CART";
export const ADD_ITEM_CART: string = "ADD_ITEM_CART";
export const REMOVE_ITEM_CART: string = "REMOVE_ITEM_CART";

export type AddItemPayload = {
  item: TrendingProduct;
};

export type RemoveItemPayload = {
  id: number;
};

export type ActionsCart =
  | { type: "CLEAR_CART" }
  | { type: "ADD_ITEM_CART"; payload: AddItemPayload }
  | { type: "REMOVE_ITEM_CART"; payload: RemoveItemPayload };

export type CartState = {
  items: TrendingProduct[];
  price: number;
};
