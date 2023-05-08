import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import store from "./store/store";
import { Provider } from "react-redux";

import { WagmiConfig, createClient } from "wagmi";

ReactDOM.render(
  <Provider store={store}>
    <WagmiConfig client={createClient()}>
      <App />
    </WagmiConfig>
  </Provider>,
  document.getElementById("root")
);
