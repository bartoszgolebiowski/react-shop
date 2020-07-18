import React from "react";
import Card from "@material-ui/core/Card/Card";
import makeStyles from "@material-ui/core/styles/makeStyles";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";

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
        <CircularProgress size="10rem" />
      </div>
    </Card>
  );
};

export default ProductsListLoading;
