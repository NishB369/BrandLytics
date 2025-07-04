import React from "react";
import { HeroSection } from "../Components/HeroSection";
import Navbar from "../Components/Navbar";
import { ProblemSection } from "../Components/ProblemSection";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProblemSection />
    </>
  );
};

export default LandingPage;
