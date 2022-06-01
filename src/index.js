import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from './redux/store'

ReactDOM.render(
  <React.StrictMode>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </React.StrictMode>,
  document.getElementById("root")
);
