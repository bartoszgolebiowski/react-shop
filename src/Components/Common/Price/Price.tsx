import React from "react";
import { makeStyles } from "@material-ui/core/styles";

type PriceType = {
  price: number;
  currency?: string;
};

const useStyles = makeStyles((theme) => ({
  price: {
    alignItems: "center",
    fontSize: "1rem",
  },
}));

export const Price = ({ price, currency = "$" }: PriceType) => {
  const classes = useStyles();
  return (
    <p data-cy="products-price" className={classes.price}>
      {`${price.toFixed(2)} ${currency}`}
    </p>
  );
};

export default Price;
