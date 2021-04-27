import React from "react";
import herosection from "../img/LARQ-BOTTLE-MOVEMENT-REVIEW-ONE-TECH-TRAVELLER-HERO.jpeg";
const HeroSection = () => {
  return (
    <div className=" flex h-lg z-0 relative">
      <img
        src={herosection}
        alt={herosection}
        className="object-cover w-full "
      />
      <div className="h-md block z-0 absolute w-5/6 inset-x-9 top-28 lg:left-44 md:w-2/6 md:top-1/4 ">
        <h1 className="text-3xl text-gray-900 text-center pb-6  md:text-3xl md:text-left md:text-white lg:text-5xl  ">
          60 seconds to pure water
        </h1>
        <h2 className="text-gray-900 text-center pb-28 md:pb-6  md:text-left md:text-white">
          Award-winning design with effective UV-C LED technology for on-the-go
          water purification.
        </h2>
        <div className="flex justify-center md:justify-start ">
          <div className="flex justify-center w-44 bg-blue-900 py-2 text-white hover:bg-white hover:text-blue-900">
            Shop now
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
