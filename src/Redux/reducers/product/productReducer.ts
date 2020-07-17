import { ProductsState, ActionsProduct } from "../../actions/event/actionTypes";

const initialState: ProductsState = {
  data: [],
  searchValue: '',
  loading: true,
  error: false,
  page: 0,
  offset: 0,
};

const reducer = (state = initialState, action: ActionsProduct) => {
  switch (action.type) {
    case "FETCH_PRODUCTS": {
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data.results,
        page: 1,
        offset: action.payload.offset,
      };
    }
    case "FETCH_APPEND_PRODUCTS": {
      return {
        ...state,
        loading: false,
        error: false,
        data: [action.payload.data.results, ...state.data],
        offset: state.offset + action.payload.offset,
        page: state.page++,
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
    default:
      return state;
  }
};

export type ProductReducer = ReturnType<typeof reducer>;
export default reducer;
