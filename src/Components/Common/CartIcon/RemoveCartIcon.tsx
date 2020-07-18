import React from "react";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import IconButton from "@material-ui/core/IconButton";

export type RemoveCartIconType = {
  color?: "inherit" | "primary" | "secondary" | "action" | "disabled" | "error";
  onClick:
    | ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void)
    | undefined;
};

export const RemoveCartIcon = ({
  color = "primary",
  onClick,
}: RemoveCartIconType) => {
  return (
    <div onClick={onClick}>
      <IconButton>
        <RemoveShoppingCartIcon color={color} fontSize="default" />
      </IconButton>
    </div>
  );
};

export default RemoveCartIcon;
