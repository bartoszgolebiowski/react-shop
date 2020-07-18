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

export type CartIconType = {
  color?: "inherit" | "primary" | "secondary" | "action" | "disabled" | "error";
  badgeContent?: number;
  onClick:
    | ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void)
    | undefined;
};

export const CartIcon = ({
  color = "primary",
  badgeContent = 0,
  onClick,
}: CartIconType) => {
  return (
    <div onClick={onClick}>
      <IconButton>
        <StyledBadge badgeContent={badgeContent} color="secondary">
          <ShoppingCartIcon color={color} fontSize="default" />
        </StyledBadge>
      </IconButton>
    </div>
  );
};

export default CartIcon;
