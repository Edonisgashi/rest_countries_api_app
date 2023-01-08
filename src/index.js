import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import App from "./App";
import Country from "./Components/Country";
import { HashRouter, Routes, Route } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/country/:countryName" element={<Country />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
