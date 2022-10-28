import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import ReactDOM from "react-dom/client";
import App from "./App";
import reducer from "./reducers";
import "./App.css";

const store = configureStore({
  reducer,
  // middleware: [thunk],
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  // {/* </React.StrictMode> */}
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
