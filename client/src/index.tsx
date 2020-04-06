import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { Provider } from "react-redux";
import { createStore } from "redux";

import App from "components/app";

import rootReducer from "state/root";

import * as serviceWorker from "./serviceWorker";

import "./styles/index.scss";

(window as any).axios = axios;
const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();