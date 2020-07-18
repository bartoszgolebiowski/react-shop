import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "../../../../Redux/reducers/rootReducer";
import { removeItemFromCartAction } from "../../../../Redux/actions/cart/Actions";

import ProductsList from "../ProductsList";
import ProductsListEmpty from "../ProductsListEmpty";

export const CartGridList = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state: RootState) => state.cartReducer);

  if (items.length === 0)
    return <ProductsListEmpty text="Your cart is empty" />;

  return (
    <ProductsList
      removeCartIcon={true}
      items={items}
      cartAction={(item) => dispatch(removeItemFromCartAction(item.listing_id))}
    />
  );
};

export default CartGridList;
