import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { BsCaretDown } from "react-icons/bs";

import { Link } from "react-router-dom";
import mobilelogo from "../../img/mobile logo.svg";
import logo from "../../img/logo-larq.svg";
import DropdownMenu from "./DropdownMenu";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const toggle = () => setClick(!click);

  const onMouseEnter = () => {
    if (window.innerWidth < 768) {
      setDropdown(false);
    } else setDropdown(true);
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 768) {
      setDropdown(false);
    } else setDropdown(false);
  };
  return (
    <div className="flex bg-gray-100 h-12  top-0 sticky items-center  justify-between z-50 relative m-auto  max-w-screen-xl">
      <div
        onClick={toggle}
        className="flex h-12 w-12 transition duration-700 ease-in-out md:hidden"
      >
        {click ? (
          <FiMenu className="  flex h-full w-full px-2 text-3xl" />
        ) : (
          <img
            src={mobilelogo}
            alt="mobilelogo"
            className=" bg-green-500 h-12 w-12 left-0 top-0 p-3"
          />
        )}
      </div>
      <Link to="/">
        <img src={logo} alt="" className="flex  pl-12 md:pl-8" />
      </Link>
      <div className="flex">
        <ul className=" hidden md:flex text-blue-900 font-semibold">
          <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <Link to="" className="flex p-4 items-center ">
              LARQ bottles <BsCaretDown className="pl-1 text-2xl" />
            </Link>
            {dropdown && <DropdownMenu />}
          </li>
          <li>
            <Link to="" className="flex p-4 items-center">
              Technology
            </Link>
          </li>
          <li>
            <Link to="" className=" flex p-4 items-center">
              Reviews
            </Link>
          </li>
          <li>
            <Link to="" className=" flex p-4 items-center">
              Sign In
            </Link>
          </li>
        </ul>{" "}
        <Link
          to="shoppingcards"
          className="h-full pr-8 py-4 pl-4 mr-0 right-0 cursor-pointer text-2xl "
        >
          <FiShoppingCart />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
