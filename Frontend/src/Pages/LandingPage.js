import React from "react";
import { HeroSection } from "../Components/HeroSection";
import Navbar from "../Components/Navbar";
import { ProblemSection } from "../Components/ProblemSection";
import { PlatformsList } from "../Components/PlatformsList";
import { MultiBrandSection } from "../Components/MultiBrandSection";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <PlatformsList />
      <MultiBrandSection />
    </>
  );
};

export default LandingPage;
