import React from "react";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar/Navbar";
import SimpleSlider from "../components/Review";
import Trending from "../components/Trending";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <SimpleSlider />
      <Trending />
    </div>
  );
};

export default HomePage;
