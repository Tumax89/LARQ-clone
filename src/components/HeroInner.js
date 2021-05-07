import React from "react";
import video from "../video/LARQ_Website_Homepage_Particle-Animation_580x580px.mp4";
import img from "../img/alexandra-tran-unsplash.jpg";
import cropped from "../img/alexandra-cropped.jpg";
import pitcher from "../img/LARQ_Pitcher.jpeg";
import bottle from "../img/LARQ_Bottle_Movement.jpeg";
const HeroInner = () => {
  return (
    <>
      <div className="relative flex h-650 z-0 px-8 mt-0 xl:mt-10 xl:px-14  ">
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
      <div className="block  mt-10 mb-24  h-auto px-8 xl:px-14 lg:flex ">
        <div className="mb-10 lg:mb-0 relative w-full lg:w-6/12  mr-6 bg-new-blue ">
          <img src={pitcher} alt={pitcher} className="z-0" />

          <div className="absolute z-10 top-1/4 xl:top-1/3 w-5/12 sm:w-4/12 lg:w-5/12  xl:w-6/12 right-6  sm:right-24 lg:right-6  flex flex-col ">
            <h2 className="font-bold text-xl xl:text-4xl md:text-3xl text-blue-900  ">
              LARQ Pitcher PureVis™
            </h2>
            <p className="mt-4 xl:mb-10 lg:mb-2 sm:mb-14 sm:mt-6 text-gray-400 sm:text-xl tracking-wider">
              Pure water beyond filtration.
            </p>
            <div className="flex justify-end mt-8  pr-8 xl:pr-12 font-bold underline hover:no-underline cursor-pointer  ">
              Pre-order
            </div>
          </div>
        </div>

        <div className="relative w-full lg:w-6/12 ml-0 lg:ml-6 bg-new-blue">
          <img src={bottle} alt={bottle} className="z-0" />
          <div className="absolute z-10 top-1/4 xl:top-1/3 w-5/12 sm:w-4/12 lg:w-5/12  xl:w-6/12 right-6  sm:right-24 lg:right-6  flex flex-col">
            <h2 className="font-bold text-xl xl:text-4xl md:text-3xl text-blue-900  ">
              LARQ Pitcher PureVis™
            </h2>
            <p className="mt-4 xl:mb-12 lg:mb-2 sm:mb-14 sm:mt-6 text-gray-400 sm:text-xl tracking-wider">
              Pure water beyond filtration.
            </p>
            <div className="flex justify-end mt-8 pr-8 xl:pr-12 font-bold underline hover:no-underline cursor-pointer ">
              Shop now
            </div>
          </div>
        </div>
      </div>
      <div className=""></div>

      <div className="flex flex-col items-center justify-center mt-6 mb-16  h-auto mx-8 xl:mx-14 ">
        <h1 className=" text-4xl sm:text-5xl lg:text-6xl  font-medium text-blue-900 items-center justify-center text-center w-5/12 md:w-4/12 xl:w-3/12 py-6  ">
          A smart way to sip
        </h1>
        <div className="flex flex items-center justify-center pt-2 ">
          <div className=" border-b-4 w-12 border-red-400 "></div>
        </div>
      </div>

      <div className="flex flex-col  mb-24  h-auto px-8 xl:px-14 lg:flex-row ">
        <div className="w-full lg:w-5/12 bg-new-blue p-12 lg:p-20 order-last lg:order-first">
          <h1 className="font-bold text-xl  md:text-3xl text-blue-900 pb-10 ">
            LARQ Bottle PureVis™
          </h1>
          <h3 className="text-blue-900 pb-6 text-xl font-semibold tracking-wider">
            Pure water in 60 seconds
          </h3>
          <p className="text-blue-900 pb-6 tracking-wider font-extralight">
            Neutralizes up to 99.9999%* of harmful bacteria and viruses using
            PureVis UV-C light
          </p>
          <p className="text-gray-400 pb-10 tracking-wider font-extralight">
            *in Adventure Mode
          </p>
          <h2 className="text-blue-900 pb-6 text-xl font-semibold tracking-wider">
            Self-cleaning & worry-free
          </h2>
          <p className="text-gray-400 font-extralight tracking-wider pb-10 font-extralight">
            Intelligently activates every 2 hours to keep your water and bottle
            stink-free.
          </p>
          <div className="flex justify-center md:justify-start ">
            <div className="flex justify-center w-44 bg-blue-900 font-medium border-2 border-blue-900   py-2 text-white hover:bg-white hover:text-blue-900 transition-all  duration-1000 ease-in-out">
              Shop now
            </div>
          </div>
        </div>
        <video
          autoPlay
          loop
          muted
          src={video}
          type="video/mp4"
          className="w-full lg:w-7/12 object-cover "
        ></video>
      </div>
    </>
  );
};

export default HeroInner;
