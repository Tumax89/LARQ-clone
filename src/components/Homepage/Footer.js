import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";

import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
const Footer = () => {
  const [selected, setSelected] = useState("");

  return (
    <div className=" text-white px-8  bg-blue-900 m-auto  max-w-screen-xl">
      <div className=" flex flex-col lg:flex-row items-center justify-center ">
        <div className="relative flex flex-col sm:flex-row order-2 lg:order-1 font-thin w-full lg:w-7/12 py-10 ">
          <div className="flex flex-col items-center sm:items-start justify-center   w-full md:w-1/3 ">
            <p className="font-bold pb-2">Help</p>
            <p className="pb-2">Frequently Asked Questions</p>
            <p className="pb-2">Reviews</p>
            <p className="pb-2">My Account</p>
            <p className="pb-2">Corporate Gifting</p>
            <p className="pb-2">Contact Us</p>
          </div>
          <div className="flex flex-col items-center sm:items-start justify-center   py-6  w-full md:w-1/3">
            <p className="font-bold pb-2">Shop</p>
            <p className="pb-2">LARQ Bottle PureVis™</p>
            <p className="pb-2">LARQ Bottle Movement PureVis™</p>
            <p className="pb-2">Limited Edition Sleeve</p>
            <p className="pb-2">Accessories</p>
          </div>
          <div className="flex flex-col items-center sm:items-start justify-center   py-6 sm:py-14 w-full md:w-1/3">
            <p className="font-bold pb-2">About</p>
            <p className=" pb-2">Basq Magazine</p>
            <p className="pb-2">Press</p>
            <p className="pb-2">Our Story</p>
            <p className="pb-2">Technology</p>
          </div>
        </div>
        <div className="order-1 lg:order-2 w-full lg:w-5/12  sm:px-8 pt-8 ">
          <div className="pb-4 font-semibold text-center sm:text-left">
            Sign up for our newsletter
          </div>
          <form className="flex flex-row">
            <input
              type="text"
              placeholder="Enter  your Email"
              name="email"
              required
              className="w-7/12 mr-6 text-center py-2"
            />
            <button
              type="submit"
              className="w-5/12 bg-white text-blue-900 font-bold py-2"
            >
              Sign Up
            </button>
          </form>
          <div className="mt-6">
            <ReactFlagsSelect
              selected={selected}
              onSelect={(code) => setSelected(code)}
              countries={["US", "GB", "CA"]}
              customLabels={{
                US: "United States",
                GB: "Great Britian",
                CA: "Canada",
              }}
              placeholder="Select your shipping destination"
              className="bg-white w-full sm:w-10/12 text-gray-900"
            />
          </div>
        </div>
      </div>
      <div className=" flex flex-col md:flex-row  pb-8 w-full items-center justify-center md:justify-between font-thin">
        <div className="grid grid-cols-4 gap-6 text-3xl w-40 pb-10 md:pb-0">
          <AiFillFacebook />
          <AiFillInstagram />
          <AiFillYoutube />
          <AiOutlineTwitter />
        </div>
        <div className="pb-10 md:pb-0">© 2021 LARQ. All Rights Reserved</div>
        <div className="pb-10 md:pb-0">Terms & Privacy</div>
      </div>
    </div>
  );
};

export default Footer;
