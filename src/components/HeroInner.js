import React from "react";
import img from "../img/alexandra-tran-unsplash.jpg";
import cropped from "../img/alexandra-cropped.jpg";
const HeroInner = () => {
  return (
    <>
      <div className="relative flex h-650 z-0 px-8 mt-24 xl:px-14 ">
        <img
          src={img}
          alt={img}
          className="object-cover w-full sm:flex hidden "
        />
        <img
          src={cropped}
          alt={cropped}
          className="object-cover w-full  sm:hidden"
        />
        <div className="h-lg z-0  absolute w-4/6 top-36 right-20 xl:w-3/12 lg:w-4/12 md:right-36 ">
          <h2 className=" leading-10 tracking-wide text-3xl  pb-12  text-blue-900 md:text-5xl font-semibold text-center  lg:text-left ">
            LARQ Bottle PureVis™
          </h2>
          <h2 className="text-center font-semibold text-xl pb-28 md:pb-12  lg:text-left text-blue-900">
            Pure water from a self-cleaning bottle.
          </h2>
          <div className="flex justify-center lg:justify-start ">
            <div className="flex justify-center w-44 bg-white py-2 text-blue-900 font-semibold   border-2  hover:bg-blue-900 hover:text-white hover:border-blue-900 transition-all  duration-1000 ease-in-out">
              Shop now
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroInner;
