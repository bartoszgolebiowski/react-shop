import React from "react";
import { withStyles } from "@material-ui/core/styles";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);

export type CartrType = {
  badgeContent: number;
  onClick:
    | ((event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void)
    | undefined;
};

export const Cart = ({ badgeContent, onClick }: CartrType) => {
  return (
    <IconButton>
      <StyledBadge badgeContent={badgeContent} color="secondary">
        <ShoppingCartIcon
          color="primary"
          fontSize="default"
          onClick={onClick}
        />
      </StyledBadge>
    </IconButton>
  );
};

export default Cart;
