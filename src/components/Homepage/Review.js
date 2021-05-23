import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import logoforbes from "../../img/logo_forbes.jpeg";
import logomagazine from "../../img/logo_o_magazine.png";
import busines from "../../img/logo_business_insider.png";
import weird from "../../img/logo_wired.png";
import { AiFillStar } from "react-icons/ai";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        background: "gray",
        right: "12px",
        color: "red",
      }}
      onClick={onClick}
    />
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        background: "gray",
        left: "12px",
        top: "135px",
        zIndex: 10,
      }}
      onClick={onClick}
    />
  );
}

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 728,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings} className="relative  border-b-2  ">
      <div className="h-mid">
        <h2 className="px-12 pt-10 text-lg text-center text-blue-900">
          “It’s nice knowing that I don’t have to give the LARQ the "sniff test"
          before each fill up.”
        </h2>
        <div className="flex items-center justify-center  pt-6">
          <img src={logoforbes} alt="logo-forbes" />
        </div>
      </div>
      <div className="h-mid ">
        <h2 className="px-12 pt-10 text-lg text-center pt-6 text-blue-900">
          “It’s nice knowing that I don’t have to give the LARQ the "sniff test"
          before each fill up.”
        </h2>
        <div className="flex items-center justify-center pt-6 ">
          <img src={logomagazine} alt="logo-forbes" />
        </div>
      </div>
      <div className="h-mid pt-14 ">
        <div className="flex justify-center items-center  text-3xl text-red-500">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h1 className="text-center text-blue-900 text-2xl pt-2 px-6 md:px-12">
          Based on 2386 reviews
        </h1>
        <Link
          to=""
          className="flex justify-center text-gray-400 pt-4 items-center underline cursor-pointer hover:no-underline"
        >
          See all reviews
        </Link>
      </div>
      <div className="h-mid ">
        <h2 className="px-12 pt-10 text-lg text-center pt-6 text-blue-900">
          “It’s nice knowing that I don’t have to give the LARQ the "sniff test"
          before each fill up.”
        </h2>
        <div className="flex items-center justify-center pt-6 ">
          <img src={busines} alt="logo-forbes" />
        </div>
      </div>
      <div className="h-mid ">
        <h2 className="px-12 pt-10 text-lg text-center text-blue-900">
          “It’s nice knowing that I don’t have to give the LARQ the "sniff test"
          before each fill up.”
        </h2>
        <div className="flex items-center justify-center pt-6 ">
          <img src={weird} alt="logo-forbes" />
        </div>
      </div>
    </Slider>
  );
}
