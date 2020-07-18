import React from "react";
import Grid from "@material-ui/core/Grid/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Card from "@material-ui/core/Card/Card";
import CardHeader from "@material-ui/core/CardHeader/CardHeader";
import CardContent from "@material-ui/core/CardContent/CardContent";
import CardActions from "@material-ui/core/CardActions/CardActions";
import CardMedia from "@material-ui/core/CardMedia/CardMedia";
import Typography from "@material-ui/core/Typography/Typography";

import CartIcon from "../../Common/CartIcon/CartIcon";
import { TrendingProduct } from "../../../Models/products";

type SingleProductType = {
  item: TrendingProduct;
  cartAction:
    | ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void)
    | undefined;
};

const useStyles = makeStyles((theme) => ({
  card: {
    maxHeight: "30rem",
  },
  head: {
    maxHeight: "7rem",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  content: {
    maxHeight: "6rem",
  },
  footer: {
    height: "4rem",
  },
}));

export const SingleProduct = ({ item, cartAction }: SingleProductType) => {
  const classes = useStyles();

  return (
    <Grid item xs={6} sm={4} md={3}>
      <Card className={classes.card}>
        <CardHeader
          className={classes.head}
          title={item.title.substr(0, 30)}
          subheader={`${item.price} ${item.currency_code}`}
        />
        <CardMedia
          className={classes.media}
          image={item.Images[0]?.url_170x135 || ""}
          title={item.title}
        />
        <CardContent className={classes.content}>
          <Typography variant="body2" color="textSecondary" component="p">
            {item.description.substr(0, 100)}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <CartIcon onClick={cartAction} />
        </CardActions>
      </Card>
    </Grid>
  );
};

export default SingleProduct;
