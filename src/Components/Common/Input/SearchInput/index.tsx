import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import SearchInput from "./SearchInput";
import { useDebounce } from "../../../../Utils/customHooks/useDebounce";
import { saveFiltersAction } from "../../../../Redux/actions/products/Actions";
import { SEARCH_DEBOUNCE_TIME } from "../../../../Config/products/contants";

export const ProductsSearchInput = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState<string>("");
  const debouncedSearchTerm = useDebounce(value, SEARCH_DEBOUNCE_TIME);

  useEffect(() => {
    dispatch(saveFiltersAction(debouncedSearchTerm));
  }, [dispatch, debouncedSearchTerm]);

  return <SearchInput onChange={(e) => setValue(e.target.value)} />;
};

export default ProductsSearchInput;
