import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Code from "./components/Code";
import Resources from "./components/Resources";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="code" element={<Code />} />
        <Route path="resources" element={<Resources />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);
