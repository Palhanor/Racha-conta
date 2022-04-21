/* IMPORTS */
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router } from "react-router-dom";
import App from "./App";
import "normalize.css";
import "./index.scss";

/* FUNÇÃO DE RENDERIZAÇÃO DA APLICAÇÃO */
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
