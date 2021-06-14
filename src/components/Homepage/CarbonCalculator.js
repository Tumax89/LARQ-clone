import React from "react";
import cloud1 from "../../img/carbon/cloud1.png";
import cloud2 from "../../img/carbon/cloud2.png";
import cloud3 from "../../img/carbon/cloud3.png";
import bottle from "../../img/bottle.gif";
import right from "../../img/carbon/right.png";
import left from "../../img/carbon/left_alt.png";

const CarbonCalculator = () => {
  const [value, setValue] = React.useState(3);
  const handleSubmit = () => {
    setValue(value);
  };

  return (
    <div className="relative md:mb-24">
      <div className=" flex flex-col m-auto  max-w-screen-xl bg-new-blue lg:bg-white">
        <div className=" relative  w-full h-xs md:h-mid  m-auto ">
          <img
            src={cloud1}
            alt="cloud1"
            className="absolute top-6  md:top-10 w-10 left-20 sm:left-1/4 "
          />
          <img
            src={cloud2}
            alt="cloud2"
            className="absolute top-8 md:top-12 w-12 left-1/3 "
          />
          <img
            src={cloud3}
            alt="cloud3"
            className="absolute top-4 md:top-6 w-14 left-2/4"
          />
          <img
            src={left}
            alt="left"
            className="absolute left-0 w-8/12 sm:w-5/12 bottom-0  transform -translate-x-1/3 sm:translate-x-0 "
          />

          <img
            src={right}
            alt="right"
            className="absolute  right-0 w-11/12 sm:w-7/12 bottom-8 transform sm:translate-x-0 translate-x-1/3 "
          />
        </div>
        <div className="relative flex flex-col items-center justify-center h-xxl sm:h-lg bg-new-blue px-8 md:mt-8 xl:px-14 ">
          <h1 className="mb-8 text-blue-900 max-w-xl md:max-w-full text-2xl md:text-4xl text-center font-semibold ">
            One million single use plastic bottles are thrown out every minute!
          </h1>
          <div className=" text-blue-900 sm:w-735">
            <div className="relative bg-white px-8 py-4">
              <h2 className="text-2xl font-semibold text-center">
                Measure your impact on the world and your wallet
              </h2>
              <p className="pt-2 text-xl  text-center font-thin">
                Enter how many single-use plastic bottles you use weekly.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center  my-6">
                <div className="flex flex-col  sm:mr-12 sm:mb-0 mb-4">
                  <input
                    onSubmit={handleSubmit}
                    className="border border-gray-300 border-solid w-20  py-1 relative focus:outline-none active:outline-none w-20 text-center"
                    value={value}
                    type="text"
                    onChange={(e) => setValue(e.target.value)}
                  />
                  <p className="px-1 mt-1 text-xs">bottles/week</p>
                </div>

                <div className="flex items-center justify-center bg-blue-800 text-white px-6 py-4 text-sm max-w-sm ">
                  Measure my impact
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col relative items-center justify-center sm:my-4">
            <img src={bottle} alt="bottle" className=" my-2 sm:my-6" />
            <p className="font-thin text-sm text-gray-600">
              The average person uses 3 single-use bottles per week!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarbonCalculator;
