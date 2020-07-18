import {
  ProductsState,
  ActionsProduct,
} from "../../actions/products/actionTypes";

const initialState: ProductsState = {
  data: [],
  searchValue: "",
  loading: true,
  error: false,
};

const reducer = (state = initialState, action: ActionsProduct) => {
  switch (action.type) {
    case "FETCH_PRODUCTS": {

      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };
    }
    case "FETCH_LOADING_PRODUCTS": {
      return {
        ...state,
        loading: true,
      };
    }
    case "FETCH_ERROR_PRODUCTS": {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case "SET_FILTER_PRODUCTS": {
      return {
        ...state,
        searchValue: action.payload.filter,
      };
    }
    default:
      return state;
  }
};

export type ProductReducer = ReturnType<typeof reducer>;
export default reducer;
