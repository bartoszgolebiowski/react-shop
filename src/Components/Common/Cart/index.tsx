import React from "react";
import { useSelector } from "react-redux";

import Cart from "./Cart";
import { RootState } from "../../../Redux/reducers/rootReducer";

type ProductsCartType = {
  showCart:
    | ((event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void)
    | undefined;
};

export const ProductsCart = ({ showCart }: ProductsCartType) => {
  const items = useSelector((state: RootState) => state.cartReducer.items);
  return <Cart badgeContent={items.length} onClick={showCart} />;
};

export default ProductsCart;
