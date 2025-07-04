import React from "react";
import { HeroSection } from "../Components/HeroSection";
import Navbar from "../Components/Navbar";
import { ProblemSection } from "../Components/ProblemSection";
import { PlatformsList } from "../Components/PlatformsList";
import { MultiBrandSection } from "../Components/MultiBrandSection";
import { RealTimeFeaturesSection } from "../Components/RealTimeFeaturesSection";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <PlatformsList />
      <MultiBrandSection />
      <RealTimeFeaturesSection />
    </>
  );
};

export default LandingPage;
