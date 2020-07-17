import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  price: {
    alignItems: "center",
    fontSize: "1rem",
  },
}));

type PriceType = {
  price: number;
  currency?: string;
};

export const Price = ({ price, currency = "$" }: PriceType) => {
  const classes = useStyles();
  return <p className={classes.price}>{`${price} ${currency}`}</p>;
};

export default Price;
