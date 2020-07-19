import React from "react";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  card: {
    flexGrow: 1,
    margin: "5rem 0",
    maxHeight: "40vh",
    overflowY: "auto",
  },
  loading: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "40vh",
    flexGrow: 1,
  },
}));

export const ProductsListLoading = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <div className={classes.loading}>
        <CircularProgress data-cy="product-list-loading-spinner" size="10rem" />
      </div>
    </Card>
  );
};

export default ProductsListLoading;
