import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/style.css";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Yehey from "./pages/Yehey";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/permission" element={<LandingPage />} />
        <Route path="/permission/yehey" element={<Yehey />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
