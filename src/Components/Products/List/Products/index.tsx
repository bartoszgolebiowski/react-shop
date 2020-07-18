import React, { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";

import ProductsList from "../ProductsList";
import ProductsListEmpty from "../ProductsListEmpty";
import ProductsListError from "../ProductsListError";
import ProductsListLoading from "../ProductsListLoading";

import { RootState } from "../../../../Redux/reducers/rootReducer";
import { addItemToCartAction } from "../../../../Redux/actions/cart/Actions";
import { filterByName } from "../../../../Services/products";

export const ProductsGridList = () => {
  const dispatch = useDispatch();
  const { data, searchValue, error, loading } = useSelector(
    (state: RootState) => state.productReducer
  );

  const items = useMemo(() => {
    if (searchValue === "") return data;
    return data.filter(filterByName(searchValue));
  }, [data, searchValue]);

  if (error) return <ProductsListError />;
  if (loading) return <ProductsListLoading />;

  if (items.length === 0)
    return (
      <ProductsListEmpty text="Currently there is no products available" />
    );

  return (
    <ProductsList
      items={items}
      cartAction={(item) => dispatch(addItemToCartAction(item))}
    />
  );
};

export default ProductsGridList;
