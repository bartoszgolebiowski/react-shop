import React from "react";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import { SEARCH_TEST } from "../../../../Config/products/contants";

type SearchInputType = {
  onChange:
    | ((
        event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
      ) => void)
    | undefined;
};

export const SearchInput = ({ onChange }: SearchInputType) => {
  return (
    <Input
      name="products-search"
      placeholder={SEARCH_TEST}
      disableUnderline
      onChange={onChange}
      endAdornment={
        <InputAdornment position="start">
          <SearchIcon />
        </InputAdornment>
      }
    />
  );
};

export default SearchInput;
