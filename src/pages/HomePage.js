import React from "react";
import HeroInner from "../components/Homepage/HeroInner";
import HeroSection from "../components/Homepage/HeroSection";

import Navbar from "../components/Navbar/Navbar";
import SimpleSlider from "../components/Homepage/Review";
import Trending from "../components/Homepage/Trending";
import CarbonCalculator from "../components/Homepage/CarbonCalculator";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <SimpleSlider />
      <Trending />
      <HeroInner />
      <CarbonCalculator />
    </div>
  );
};

export default HomePage;
