import React from "react";
import trendingData from "../data/trendingData";

const Trending = () => {
  return (
    <div className="flex flex-col h-xl lg:h-xxl  px-4 xl:px-16 pt-16 pb-24 bg-blue-100">
      <h1 className="flex text-6xl font-semibold text-blue-900 items-center justify-center bg-green-100">
        Treding now
      </h1>
      <div className="flex flex items-center justify-center pt-6 pr-8">
        <div className=" border-b-4 w-12 border-red-400  mb-24 sm:mb-12"></div>
      </div>
      <div className="flex">
        {trendingData.products.map((products) => (
          <div key={products.id} className="flex flex-col mx-2">
            <img
              className="flex h-full lg:p-8     xl:p-12 p-0 w-full"
              src={products.image}
              alt={products.name}
            />
            <div className="bg-green-100 lg:px-12">{products.title}</div>
            <div className="lg:px-12">{products.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;