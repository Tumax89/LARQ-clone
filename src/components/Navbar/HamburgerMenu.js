import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";

import { Link } from "react-router-dom";

import { IoIosArrowForward } from "react-icons/io";
import { GrLanguage } from "react-icons/gr";

import data from "../../data/data";

const HamburgerMenu = () => {
  const [select, setSelect] = useState("");

  const [toggleShow, setToggleShow] = useState(false);
  const toggle = () => setToggleShow(!toggleShow);

  return (
    <div
      className="fixed overflow-y-auto  w-full top-12
     bg-white h-full "
    >
      <div className="  mx-2 sm:mx-4">
        <div className="flex flex-col">
          {data.products.map((product) => (
            <div
              key={product._id}
              className="flex justify-start items-center  border-b h-40 w-full "
            >
              <Link to="/aa">
                <img className="h-20 " src={product.image} alt={product.name} />
              </Link>
              <div className="w-4/12">
                <div className=" text-blue-900 font-semibold pb-1">
                  {product.name}
                </div>
                <div className="text-gray-400 font-thin">
                  {product.description}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className=" flex flex-col  justify-start mb-12 mt-6 mx-8  ">
          <div
            className="reltive flex border-b py-4 text-xl font-medium cursor-pointer"
            onClick={toggle}
          >
            <span className="flex hover:text-gray-400">Shop</span>
            <div className=" pl-2 pt-1 ">
              {!toggleShow ? (
                <div className="">
                  <IoIosArrowForward className="transform  rotate-0 transition duration-300" />
                </div>
              ) : (
                <div className=" w-96 ">
                  <IoIosArrowForward className="relative transform rotate-90 transition duration-300"></IoIosArrowForward>
                  <div className="  flex flex-col justify-center  h-28 text-blue-900 font-medium  hover:cursor-pointer">
                    <div className="border-b  pt-2 hover:text-gray-400">
                      All Bottless
                    </div>
                    <div className="border-b pt-2 hover:text-gray-400">
                      Limited Edition Sleeve
                    </div>
                    <div className="pt-2 hover:text-gray-400">Accessories</div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="relative border-b py-4 text-xl font-medium hover:text-gray-400">
            Technology
          </div>
          <div className="flex items-center border-b py-4 text-xl font-medium">
            <span className="hover:text-gray-400">EN </span>
            <GrLanguage className=" text-2xl pl-2" />
          </div>
          <div className=" my-6 font-medium text-lg">
            <div className="pb-2">My account</div>
            <div className="pb-2">Our story</div>
            <div className="pb-2">Support</div>
            <div className="pb-2">Press</div>
          </div>
          <div>
            <div className="mt-6">
              <ReactFlagsSelect
                selected={select}
                onSelect={(code) => setSelect(code)}
                countries={["US", "GB", "CA"]}
                customLabels={{
                  US: "United States",
                  GB: "Great Britian",
                  CA: "Canada",
                }}
                placeholder="Select shipping destination"
                className="bg-white w-full m-auto text-gray-900"
              />
            </div>
            <div className="pb-10 md:pb-0">
              © 2021 LARQ. All Rights Reserved
            </div>
            <div className="pb-10 md:pb-0">Terms & Privacy</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
