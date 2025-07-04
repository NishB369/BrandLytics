import React from "react";
import { HeroSection } from "../Components/LandinPageComponents/HeroSection";
import Navbar from "../Components/LandinPageComponents/Navbar";
import { ProblemSection } from "../Components/LandinPageComponents/ProblemSection";
import { PlatformsList } from "../Components/LandinPageComponents/PlatformsList";
import { MultiBrandSection } from "../Components/LandinPageComponents/MultiBrandSection";
import { RealTimeFeaturesSection } from "../Components/LandinPageComponents/RealTimeFeaturesSection";
import FinalCTASection from "../Components/LandinPageComponents/FinalCTASection";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <PlatformsList />
      <MultiBrandSection />
      <RealTimeFeaturesSection />
      <FinalCTASection />
    </>
  );
};

export default LandingPage;
