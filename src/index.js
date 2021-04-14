import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/scss/index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import UserProvider from "./context/Provider";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
