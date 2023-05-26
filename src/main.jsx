import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./store/store";
import { Provider } from "react-redux";
import "./assets/CSS/style.css"
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="overlay"></div>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
