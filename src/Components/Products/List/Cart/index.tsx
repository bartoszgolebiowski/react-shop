import React from "react";
import { useSelector, useDispatch } from "react-redux";

import ProductsList from "../ProductsList";
import ProductsListEmpty from "../ProductsListEmpty";

import { RootState } from "../../../../Redux/reducers/rootReducer";
import { removeItemFromCartAction } from "../../../../Redux/actions/cart/Actions";
import { CART_LIST_EMPTY } from "../../../../Config/products/contants";

export const CartGridList = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state: RootState) => state.cartReducer);

  if (items.length === 0) return <ProductsListEmpty text={CART_LIST_EMPTY} />;

  return (
    <ProductsList
      removeCartIcon={true}
      items={items}
      cartAction={(item) => dispatch(removeItemFromCartAction(item.listing_id))}
    />
  );
};

export default CartGridList;
