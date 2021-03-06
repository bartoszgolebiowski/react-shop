import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import ProductsCart from "../../Common/CartIcon";
import ProductsPrice from "../../Common/Price/Price";
import ProductsSearchInput from "../../Common/Input/SearchInput/index";
import { RootState } from "../../../Redux/reducers/rootReducer";

type ProductsHeaderType = {
  isCart: boolean;
  onClick:
    | ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void)
    | undefined;
};

const useStyles = makeStyles((theme) => ({
  root: {
    top: 0,
    zIndex: 10,
    position:'sticky'
  },
  paper: {
    display: "flex",
    flexDirection: "row-reverse",
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    [theme.breakpoints.up("sm")]: {
      "& > *": {
        padding: "0 1rem",
      },
    },
  },
}));

export const ProductsHeader = ({ isCart, onClick }: ProductsHeaderType) => {
  const classes = useStyles();
  const price = useSelector((state: RootState) => state.cartReducer.price);

  return (
    <Grid container spacing={3} justify="flex-end" className={classes.root}>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <ProductsCart isCart={isCart} onClick={onClick} />
          <ProductsPrice price={price} />
          {!isCart && <ProductsSearchInput />}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ProductsHeader;
