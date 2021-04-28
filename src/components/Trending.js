import React from "react";
import trendingData from "../data/trendingData";

const Trending = () => {
  return (
    <div className="flex flex-col h-xl lg:h-xxl  px-4 xl:px-16 pt-16 pb-24 ">
      <h1 className="flex text-6xl font-semibold text-blue-900 items-center justify-center ">
        Treding now
      </h1>
      <div className="flex flex items-center justify-center pt-6 pr-8">
        <div className=" border-b-4 w-12 border-red-400  mb-24 sm:mb-12"></div>
      </div>
      <div className="flex">
        {trendingData.products.map((products) => (
          <div key={products.id} className=" flex relative flex-col mx-2">
            <div className="group shadow-lg transition-all duration-500 ease-in-out">
              <img
                className="flex  group-hover:opacity-25 h-full lg:p-8  xl:p-12 p-0 w-full"
                src={products.image}
                alt={products.name}
              />
              <div className="absolute opacity-0 group-hover:opacity-100  w-full  bottom-2/4  transition-all  duration-1000 ease-in-out ">
                <div className="flex h-12 justify-center">
                  <button className="text-center ring-2  px-8 py-2 mr-2 ml-2  ">
                    17 oz
                  </button>
                  <button className="text-center ring-2  px-8 mr-2 ml-2   ">
                    25 oz
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:px-12 text-blue-400 text-xs  pt-6 sm:text-base sm:pt-2">
              {products.title}
            </div>
            <div className="pt-2 lg:px-12 font-extrabold text-base text-blue-900 sm:text-xl ">
              {products.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
