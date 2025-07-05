import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import LandingPage from "./Pages/LandingPage";
import Onboarding from "./Pages/Onboarding";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);
