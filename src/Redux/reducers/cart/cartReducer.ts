import { CartState, ActionsCart } from "../../actions/cart/actionTypes";

const initialState: CartState = {
  items: [],
  price: 0,
};

const reducer = (state = initialState, action: ActionsCart) => {
  switch (action.type) {
    case "ADD_ITEM_CART": {
      const newItems = [...state.items, action.payload.item];
      return {
        ...state,
        items: newItems,
        price: newItems.reduce((acc, cartItem) => acc + +cartItem.price, 0),
      };
    }
    case "REMOVE_ITEM_CART": {
      const newItems = state.items.filter(
        (cartItem) => cartItem.listing_id !== action.payload.id
      );
      if (newItems.length === 0)
        return {
          ...state,
          items: [],
          price: 0,
        };
      return {
        ...state,
        items: newItems,
        price: newItems.map((cartItem) => +cartItem.price) || 0,
      };
    }
    case "CLEAR_CART": {
      return {
        ...state,
        items: [],
        price: 0,
      };
    }
    default:
      return state;
  }
};

export type ProductReducer = ReturnType<typeof reducer>;
export default reducer;
