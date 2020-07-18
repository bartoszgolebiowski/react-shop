import React from "react";
import Grid from "@material-ui/core/Grid/Grid";

import { TrendingProduct } from "../../../Models/products";
import SingleProduct from "./SingleProduct";

type ProductsListType = {
  removeCartIcon?: boolean;
  items: TrendingProduct[];
  cartAction: (item: TrendingProduct) => void;
};

export const ProductsList = ({
  removeCartIcon = false,
  items,
  cartAction,
}: ProductsListType) => {
  return (
    <Grid
      container
      spacing={4}
      alignContent="space-around"
      alignItems="center"
      data-cy="products-list"
    >
      {items.map((item, index) => (
        <SingleProduct
          key={item.listing_id}
          removeCartIcon={removeCartIcon}
          item={item}
          cartAction={() => cartAction(item)}
        />
      ))}
    </Grid>
  );
};

export default ProductsList;
