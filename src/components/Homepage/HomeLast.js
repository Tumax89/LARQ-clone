import React from "react";
import text_content_block from "../../img/text_content_block.jpeg";
import basqlogo from "../../img/basq-logo.svg";
import screen1 from "../../img/LARQ_Website_Homepage_Magazine_1.jpeg";
import screen2 from "../../img/LARQ_Website_Homepage_Magazine_2.jpeg";
import screen3 from "../../img/LARQ_Website_Homepage_Magazine_3.jpeg";

const HomeLast = () => {
  return (
    <div className="relative text-blue-900 z-10 xl:px-8 overflow-hidden m-auto  max-w-screen-xl">
      <div className="bg-new-blue absolute left-0 top-1/4 w-full  h-150 transform skew-y-25 z-0 "></div>
      <div className="relative z-50 mb-24">
        <div className=" flex flex-col m-auto  max-w-screen-xl flex-wrap z-100">
          <div className="block md:flex m-auto ">
            <div className=" flex flex-col items-center justify-center max-w-md md:w-6/12 mx-16 xl:mx-32 text-center">
              <h1 className="mt-12  mb-8 text-2xl lg:text-4xl font-semibold block">
                LARQ x Draymond Green
              </h1>

              <p className="hidden md:flex text-gray-400 font-thin text-xl mb-8">
                Level up your hydration game with the all-new DG23 Edition
                Bottle
              </p>
              <button
                type="button"
                className="hidden md:flex  items-center justify-center  w-44 bg-blue-900 font-medium border-2 border-blue-900   py-2 text-white hover:bg-white hover:text-blue-900 transition-all  duration-1000 ease-in-out"
              >
                Shop now
              </button>
            </div>

            <div className="flex flex-col items-center justify-center text-center mx-6 w-12/12 md:w-6/12 mt-5 md:mt-0 ">
              <img
                src={text_content_block}
                alt="text_content_block"
                className=""
              ></img>
              <p className="flex mt-10  object-cover md:hidden font-thin text-gray-400 text-xl mb-5">
                Level up your hydration game with the all-new DG23 Edition
                Bottle
              </p>
              <button
                type="button"
                className="flex mt-4 items-center justify-center text-center md:hidden w-44 bg-blue-900 font-medium border-2 border-blue-900   py-2 text-white hover:bg-white hover:text-blue-900 transition-all  duration-1000 ease-in-out"
              >
                Shop now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden sm:flex items-center justify-center relative z-50 h-56">
        <div className="flex flex-col items-center justify-center max-w-lg ">
          <img
            src={basqlogo}
            alt="basqlogo"
            className="  h-32 w-48 left-0 top-0 p-3"
          />
          <div className="flex items-center justify-center text-center pt-2  ">
            <div className=" border-b-4 w-12 border-red-400 "></div>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col md:flex-row   px-8 overflow-hidden">
        <div className="flex w-full  md:w-6/12">
          <div class="grid grid-rows-2 grid-flow-col gap-4">
            <div class="row-span-2 ">
              <img
                src={screen1}
                alt="screen1"
                className="object-cover h-full w-full"
              />
            </div>
            <div class="row-span-1 ">
              <img
                src={screen2}
                alt="screen2"
                className="object-cover h-full w-full"
              />
            </div>
            <div class="row-span-1 ">
              <img
                src={screen3}
                alt="screen3"
                className="object-cover h-full w-full"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start justify-center w-full md:w-6/12 md:mx-8 xl:mx-32  text-center ">
          <h2 className="mt-12 text-left mb-8 text-2xl lg:text-4xl font-semibold block">
            Get inspired
          </h2>
          <p className="flex text-gray-400 font-thin text-xl mb-8 text-left leading-10">
            Satisfy all of your inspiration needs in one place. We're covering
            top travel destinations, product line-ups, interviews with experts
            in different industries, news from us (your favorite self-cleaning
            bottle people), and more.
          </p>
          <button
            type="button"
            className="flex  items-center justify-center  w-44 bg-blue-900 font-medium border-2 border-blue-900   py-2 text-white hover:bg-white hover:text-blue-900 transition-all  duration-1000 ease-in-out"
          >
            Read more
          </button>
        </div>
      </div>

      <div className="flex relative items-center justify-center my-16 md:my-24">
        <div className="flex flex-col max-w-4xl px-8 md:px-12 mb-12">
          <div className="flex flex-row">
            <div className="pr-2 ">
              <svg width="26px" height="21px" viewBox="0 0 26 21">
                <g
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <path
                    d="M0.345408068,14.4260493 C0.345408068,8.90974572 3.19987171,4.39318933 8.90888463,0.876244659 L10.4625956,2.4299556 C7.86102006,4.30887124 6.43981031,6.59725982 6.19892369,9.29518997 C7.76468673,9.29518997 9.06545497,9.84922089 10.1012674,10.9572993 C11.1852572,12.0412891 11.727244,13.3661457 11.727244,14.9319087 C11.727244,16.5458491 11.1732131,17.9068381 10.0651346,19.0149165 C8.98114484,20.1470837 7.66833244,20.7131587 6.12665807,20.7131587 C4.36818573,20.7131587 2.97106429,20.1229954 1.93525182,18.9426509 C0.875350685,17.7382178 0.345408068,16.232699 0.345408068,14.4260493 Z M14.4733378,14.4260493 C14.4733378,8.93383439 17.3398455,4.41727799 23.0729471,0.876244659 L24.6266581,2.4299556 C21.9769052,4.35704857 20.5436513,6.64543714 20.3268534,9.29518997 C21.8926164,9.29518997 23.1933847,9.84922089 24.2291971,10.9572993 C25.3131869,12.0412891 25.8551737,13.3661457 25.8551737,14.9319087 C25.8551737,16.5458491 25.3011428,17.9068381 24.1930643,19.0149165 C23.1090745,20.1470837 21.7962621,20.7131587 20.2545878,20.7131587 C18.4961154,20.7131587 17.098994,20.1229954 16.0631815,18.9426509 C15.0032804,17.7382178 14.4733378,16.232699 14.4733378,14.4260493 Z"
                    fill="#F2746A"
                  ></path>
                </g>
              </svg>
            </div>
            <p className=" text-xl lg:text-3xl font-semibold leading-10 tracking-wide">
              Say goodbye to your reusable bottles persistent funk - and hello
              to this Jetsons-worthy update.
            </p>
          </div>
          <h2 className="flex pl-8 pt-8 text-gray-400">OPRAH MAGAZINE</h2>
        </div>
      </div>
    </div>
  );
};

export default HomeLast;
