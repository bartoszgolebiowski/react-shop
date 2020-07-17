import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";
import { Provider } from "react-redux";
import store from "./Redux/store/store";
import Products from "./Containers/Products/Products";

const App = () => {
  return (
    <Provider store={store}>
      <CssBaseline />
      <Products />
    </Provider>
  );
};

export default App;
