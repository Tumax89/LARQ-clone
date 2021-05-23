import React from "react";
import trendingData from "../../data/trendingData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Trending = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="flex flex-col  px-4 xl:px-10 pt-16 pb-12">
      <h1 className="flex text-3xl md:text-6xl font-semibold text-blue-900 items-center justify-center ">
        Treding now
      </h1>
      <div className="flex flex items-center justify-center pt-6 pr-8">
        <div className=" border-b-4 w-12 border-red-400  mb-24 sm:mb-12"></div>
      </div>
      <Slider {...settings} className="">
        {trendingData.products.map((products) => (
          <div key={products.id} className="flex relative flex-col">
            <div className="group shadow-lg bg-blue-900 transition-all duration-500 ease-in-out mx-4">
              <img
                className="flex  group-hover:opacity-75 h-full  p-0 w-full"
                src={products.image}
                alt={products.name}
              />
              <div className="absolute opacity-0 group-hover:opacity-100  w-full  bottom-2/4  transition-all  duration-1000 ease-in-out ">
                <p className="flex pb-4 justify-center pr-16 text-white font-extrabold text-base">
                  Select size:
                </p>
                <div className="flex h-12 items-center justify-center pr-12 ">
                  <button className="border-2 border-white text-white mx-4 lg:px-8 px-2 py-2 hover:bg-white hover:text-blue-800 transition-all  duration-1000 ease-in-out">
                    17 oz
                  </button>
                  <button className="border-2 border-white text-white hover:bg-white hover:text-blue-800 lg:px-8 px-2 py-2 transition-all  duration-1000 ease-in-out">
                    25 oz
                  </button>
                </div>
              </div>
            </div>
            <div className="px-8 text-blue-400 text-xs  pt-6 cursor-text sm:text-base sm:pt-2 ">
              {products.title}
            </div>
            <div className="pt-2 px-8 font-extrabold text-base cursor-text text-blue-900 sm:text-xl">
              {products.name}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Trending;
