import React from "react";
import HeroLarge from "../../img/LARQ_Website_DPM_1-142_Homepage_Hero_2400x1100.jpeg";
import HeroMedium from "../../img/LARQ_Website_DPM_1-142_Homepage_Hero_2400x1388.jpeg";
import HeroSmall from "../../img/HeroSmallCropped.jpg";
const HeroSection = () => {
  return (
    <div className=" flex h-xl z-0 relative max-w-screen-xl m-auto ">
      <img
        src={HeroLarge}
        alt={HeroLarge}
        className="object-cover w-full hidden lg:flex bg-no-repeat "
      />
      <img
        src={HeroMedium}
        alt={HeroMedium}
        className="object-cover w-full hidden sm:flex  bg-no-repeat"
      />
      <img
        src={HeroSmall}
        alt={HeroSmall}
        className="object-cover w-full flex sm:hidden "
      />
      <div className="h-md block z-0 absolute w-5/6 inset-x-9 top-2/4 pt-8 sm:pt-0 lg:left-44 md:w-2/6 md:top-1/4 ">
        <h1 className="text-4xl text-center pb-1 md:pb-6 md:text-left text-blue-900 lg:text-5xl ">
          60 seconds to pure water
        </h1>
        <h2 className="text-xl text-center pb-2 md:pb-28 md:pb-6  md:text-left text-gray-500 font-thin">
          Award-winning design with effective UV-C LED technology for on-the-go
          water purification.
        </h2>
        <div className="flex justify-center md:justify-start ">
          <div className="flex justify-center w-44 bg-blue-900 font-medium  py-2 text-white hover:bg-white hover:text-blue-900 transition-all  duration-1000 ease-in-out border-2 border-blue-900">
            Shop now
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
