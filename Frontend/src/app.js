import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import LandingPage from "./Pages/LandingPage";
import Onboarding from "./Pages/Onboarding";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/onboarding" element={<Onboarding />} />
      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);
