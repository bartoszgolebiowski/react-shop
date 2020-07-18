import React from "react";
import Card from "@material-ui/core/Card/Card";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {
  PRODUCTS_LIST_ERROR,
  REFRESH,
} from "../../../Config/products/contants";

const useStyles = makeStyles((theme) => ({
  card: {
    flexGrow: 1,
    margin: "5rem 0",
    maxHeight: "40vh",
    overflowY: "auto",
  },
  error: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "40vh",
    color: theme.palette.error.main,
  },
}));

export const ProductsListError = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <div className={classes.error}>
        <p>{PRODUCTS_LIST_ERROR}</p>
        <a href=".">{REFRESH}</a>
      </div>
    </Card>
  );
};

export default ProductsListError;
