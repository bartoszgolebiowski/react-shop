import React from "react";
import Card from "@material-ui/core/Card/Card";
import makeStyles from "@material-ui/core/styles/makeStyles";

type ProductionListEmptyType = {
  text: string;
};

const useStyles = makeStyles((theme) => ({
  card: {
    flexGrow: 1,
    margin: "5rem 0",
    maxHeight: "40vh",
    overflowY: "auto",
  },
  empty: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "40vh",
    color: theme.palette.primary.dark,
  },
}));

export const ProductsListEmpty = ({ text }: ProductionListEmptyType) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <div className={classes.empty}>
        <p data-cy="product-list-empty-text">{text}</p>
      </div>
    </Card>
  );
};

export default ProductsListEmpty;
