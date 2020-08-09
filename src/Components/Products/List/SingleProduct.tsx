import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { useInView } from "react-intersection-observer";

import CartIcon from "../../Common/CartIcon/CartIcon";
import { TrendingProduct } from "../../../Models/products";
import RemoveCartIcon from "../../Common/CartIcon/RemoveCartIcon";

type SingleProductType = {
  removeCartIcon?: boolean;
  item: TrendingProduct;
  cartAction:
    | ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void)
    | undefined;
};

const useStyles = makeStyles((theme) => ({
  card: {
    maxHeight: "30rem",
    minHeight: "30rem",
    margin: "2rem 0",
    [theme.breakpoints.up("sm")]: {
      maxHeight: "28rem",
      minHeight: "28rem",
      margin: "2rem 0",
    },
  },
  head: {
    maxHeight: "10rem",
    minHeight: "10rem",
    overflow: "hidden",
    [theme.breakpoints.up("sm")]: {
      maxHeight: "7rem",
      minHeight: "7rem",
    },
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  content: {
    maxHeight: "10rem",
    minHeight: "10rem",
    overflow: "hidden",
    [theme.breakpoints.up("sm")]: {
      maxHeight: "8rem",
      minHeight: "8rem",
    },
  },
  footer: {
    maxHeight: "4rem",
    minHeight: "4rem",
  },
}));

export const SingleProduct = ({
  removeCartIcon = false,
  item,
  cartAction,
}: SingleProductType) => {
  const classes = useStyles();
  const [ref, inView] = useInView({
    threshold: 0,
  });

  return (
    <Grid className={classes.card} item xs={6} sm={4} md={3}>
      <Card data-cy={`single-product-${item.listing_id}`}>
        <CardHeader
          className={classes.head}
          title={item.title.substr(0, 30)}
          subheader={`${item.price} ${item.currency_code}`}
        />
        <CardMedia
          ref={ref}
          className={classes.media}
          image={inView ? item.Images[0]?.url_170x135 || "" : ""}
          title={item.title}
        />
        <CardContent className={classes.content}>
          <Typography variant="body2" color="textSecondary" component="p">
            {item.description.substr(0, 100)}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          {removeCartIcon ? (
            <RemoveCartIcon onClick={cartAction} />
          ) : (
            <CartIcon onClick={cartAction} />
          )}
        </CardActions>
      </Card>
    </Grid>
  );
};

export default SingleProduct;
