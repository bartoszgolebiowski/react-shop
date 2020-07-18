import {
  TrendingProduct,
  TrendingProductsResponse,
} from "../../../Models/products";

export const FETCH_PRODUCTS: string = "FETCH_PRODUCTS";
export const FETCH_ERROR_PRODUCTS: string = "FETCH_ERROR_PRODUCTS";
export const FETCH_LOADING_PRODUCTS: string = "FETCH_LOADING_PRODUCTS";
export const SET_FILTER_PRODUCTS: string = "SET_FILTER_PRODUCTS";

export type FetchPayload = {
  data: TrendingProductsResponse;
};

export type FilterPayload = {
  filter: string;
};

export type ActionsProduct =
  | { type: "FETCH_PRODUCTS"; payload: FetchPayload }
  | { type: "FETCH_ERROR_PRODUCTS" }
  | { type: "FETCH_LOADING_PRODUCTS" }
  | { type: "SET_FILTER_PRODUCTS"; payload: FilterPayload };

export type ProductsState = {
  data: TrendingProduct[];
  searchValue: string;
  loading: boolean;
  error: boolean;
};
