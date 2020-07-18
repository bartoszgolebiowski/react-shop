import React from "react";
import { useSelector } from "react-redux";

import CartIcon from "./CartIcon";
import { RootState } from "../../../Redux/reducers/rootReducer";

type ProductsCartType = {
  isCart: boolean;
  onClick:
    | ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void)
    | undefined;
};

export const ProductsCart = ({ isCart, onClick }: ProductsCartType) => {
  const items = useSelector((state: RootState) => state.cartReducer.items);
  return (
    <CartIcon
      color={isCart ? "secondary" : "primary"}
      badgeContent={items.length}
      onClick={onClick}
    />
  );
};

export default ProductsCart;
