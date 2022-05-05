import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import CountriesProvider from "./store/contexts/CountriesProvider";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CountriesProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CountriesProvider>
  </React.StrictMode>
);

reportWebVitals();
