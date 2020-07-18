import { AnyAction, Dispatch } from "redux";
import { TrendingProduct } from "../../../Models/products";
import {
  FETCH_PRODUCTS,
  FETCH_ERROR_PRODUCTS,
  FETCH_LOADING_PRODUCTS,
  SET_FILTER_PRODUCTS,
} from "./actionTypes";

const saveProductsAction = (data: TrendingProduct[]) => ({
  type: FETCH_PRODUCTS,
  payload: {
    data,
  },
});

const fetchProductsErrorAction = () => ({
  type: FETCH_ERROR_PRODUCTS,
});

const fetchProductsLoadingAction = () => ({
  type: FETCH_LOADING_PRODUCTS,
});

export const saveFiltersAction = (filter: string) => {
  return {
    type: SET_FILTER_PRODUCTS,
    payload: {
      filter,
    },
  };
};

export const fetchProductsAction = (fetchData: Function) => (
  dispatch: Dispatch<AnyAction>
) => {
  dispatch(fetchProductsLoadingAction());
  return fetchData()
    .then((res: TrendingProduct[]) => dispatch(saveProductsAction(res)))
    .catch(() => dispatch(fetchProductsErrorAction()));
};
