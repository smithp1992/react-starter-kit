import React from "react";
import {render} from "react-dom";
import store from "./src/redux/store/Store";
import Provider from "react-redux/es/components/Provider";
import App from "./src/App";

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById("app")
);
