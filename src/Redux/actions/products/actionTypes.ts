import {
  TrendingProduct,
  TrendingProductsResponse,
} from "../../../Models/products";

export const FETCH_PRODUCTS: string = "FETCH";
export const FETCH_APPEND_PRODUCTS: string = "FETCH_APPEND";
export const FETCH_ERROR_PRODUCTS: string = "FETCH_ERROR";
export const FETCH_LOADING_PRODUCTS: string = "FETCH_LOADING";

export type FetchPayload = {
  data: TrendingProductsResponse;
  offset: number;
};

export type AppendPayload = {
  data: TrendingProductsResponse;
  offset: number;
};

export type FilterPayload = {
  filter: string;
};

export type ActionsProduct =
  | { type: "FETCH_PRODUCTS"; payload: FetchPayload }
  | { type: "FETCH_ERROR_PRODUCTS" }
  | { type: "FETCH_LOADING_PRODUCTS" }
  | { type: "FETCH_APPEND_PRODUCTS"; payload: AppendPayload }
  | { type: "SET_FILTER_PRODUCTS"; payload: FilterPayload };

export type ProductsState = {
  data: TrendingProduct[];
  searchValue: string;
  loading: boolean;
  error: boolean;
  page: number;
  offset: number;
};
