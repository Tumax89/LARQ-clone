import React from "react";
import data from "../../data/data";

const DropdownMenu = () => {
  return (
    <>
      <div className="left-0 top-12 absolute bg-gray-400 bg-opacity-75 h-xxxl w-full ">
        <div className="flex relative z-50 left-0 top-0 justify-between items-center w-full h-md px-0 xl:px-14 bg-gray-100">
          <div className="flex h-full w-9/12 ">
            {data.products.map((products) => (
              <div key={products.id} className="block   m-2 z-50">
                <img
                  className=" w-full h-10/12 cursor-pointer z-50"
                  src={products.image}
                  alt={products.name}
                ></img>

                <div className="flex text-blue-900 justify-center cursor-pointer pt-6 hover:text-gray-400">
                  {products.name}
                </div>
                <div className="flex justify-center text-center text-gray-400 cursor-pointer ">
                  {products.description}
                </div>
              </div>
            ))}
          </div>
          <div className="block w-3/12 pl-4 pt-12 h-md   xl:pl-12 ">
            <div className="pb-2 cursor-pointer "> Shop</div>
            <div className="pb-2 cursor-pointer  text-gray-400 hover:text-blue-900">
              All bottles
            </div>
            <div className="pb-2 cursor-pointer  text-gray-400 hover:text-blue-900">
              Limited Edition Sleeve
            </div>
            <div className="cursor-pointer  text-gray-400 hover:text-blue-900">
              Accessories
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DropdownMenu;
