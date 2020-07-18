import React, { useState, useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";

import Container from "@material-ui/core/Container/Container";
import ProductsHeader from "../../Components/Products/Header/Header";
import ProductsGridList from "../../Components/Products/List/Products/index";
import { fetchProductsAction } from "../../Redux/actions/products/Actions";
import { getTrendingProducts } from "../../Services/products";
import CartGridList from "../../Components/Products/List/Cart";

export const Products = () => {
  const dispatch = useDispatch();
  const [isCartSelected, setShowCart] = useState(false);

  const onClick = useCallback(
    () => setShowCart((currentValue) => !currentValue),
    []
  );

  useEffect(() => {
    dispatch(fetchProductsAction(() => getTrendingProducts()));
  }, [dispatch]);

  if (isCartSelected)
    return (
      <Container maxWidth="md">
        <ProductsHeader isCart={isCartSelected} onClick={onClick} />
        <CartGridList />
      </Container>
    );

  return (
    <Container maxWidth="md">
      <ProductsHeader isCart={isCartSelected} onClick={onClick} />
      <ProductsGridList />
    </Container>
  );
};

export default Products;
