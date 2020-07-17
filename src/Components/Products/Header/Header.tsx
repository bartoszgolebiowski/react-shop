import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import ProductsCart from "../../Common/Cart";
import ProductsPrice from "../../Common/Price/Price";
import ProductSearchInput from "../../Common/Input/SearchInput/SearchInput";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "sticky",
  },
  paper: {
    display: "flex",
    flexDirection: "row-reverse",
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    "& > *": {
      padding: "0 1rem",
    },
  },
}));

export const ProductHeader = (props: any) => {
  const classes = useStyles();
  const {}
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
 
  return (
    <div className={classes.root}>
      <Grid container spacing={3} justify="flex-end">
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <ProductsCart showCart={(e) => console.log(e)} />
            <ProductsPrice price={666.66} />
            <ProductSearchInput
              onChange={(e) => console.log(e)}
            />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductHeader;
