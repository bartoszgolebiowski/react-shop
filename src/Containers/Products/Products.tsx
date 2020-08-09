import React, { useState, useCallback, useEffect, lazy, Suspense } from "react";
import { useDispatch } from "react-redux";

import Container from "@material-ui/core/Container";
import { fetchProductsAction } from "../../Redux/actions/products/Actions";
import { getTrendingProducts } from "../../Services/products";

const ProductsHeader = lazy(() =>
  import("../../Components/Products/Header/Header")
);
const ProductsGridList = lazy(() =>
  import("../../Components/Products/List/Products/index")
);
const CartGridList = lazy(() => import("../../Components/Products/List/Cart"));

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
      <Suspense fallback={<div>Loading</div>}>
        <Container maxWidth="md">
          <ProductsHeader isCart={isCartSelected} onClick={onClick} />
          <CartGridList />
        </Container>
      </Suspense>
    );

  return (
    <Suspense fallback={<div>Loading</div>}>
      <Container maxWidth="md">
        <ProductsHeader isCart={isCartSelected} onClick={onClick} />
        <ProductsGridList />
      </Container>
    </Suspense>
  );
};

export default Products;
