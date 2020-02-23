import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import AuthServiceProvider from "./services/AuthService/AuthServiceProvider";
import App from "./App";
import "./index.css";


ReactDOM.render(
  <Router>
    <AuthServiceProvider>
      <App />
    </AuthServiceProvider>
  </Router>,
  document.getElementById("root")
);
