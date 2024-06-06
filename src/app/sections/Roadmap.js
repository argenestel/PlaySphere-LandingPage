'use client';
import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const images = [
  '/image.png',
  '/aboutbg.webp',
  '/image.png',
  '/aboutbg.webp'
]
function LeftArrow(props) {
  const { className, style, onClick } = props;
  return ( 
    <div
      className={className}
      style={{...style}}
      onClick={onClick}
    >
      <FaChevronLeft className="w-8 h-8 bg-black rounded-full p-2 text-white" />
    </div>
  );
}
function RightArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style }}
      onClick={onClick}
    >
      <FaChevronRight className=" w-8 h-8 bg-black rounded-full p-2 text-white" />
    </div>
  );
}

const Roadmap = () => {
  const settings = {
    className: "slider p-1 variable-width",
    dots: true,
    infinite: false,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    prevArrow: <LeftArrow className=" absolute right-0 bottom-0"/>,
    nextArrow: <RightArrow />
  };
  return (
    <>
      {/* <div className=" text-black">
        <Slider {...settings}>
          <div className="h-full m-1 object-cover w-[300px] rounded-[50px] overflow-hidden bg-gradient-to-b from-[#c1ffb3] to-white relative">
            <div className="flex w-full h-full justify-center items-center -rotate-90">
              <h1 className="text-5xl font-cc">ROADMAP</h1>
            </div>
          </div>
          <div className="h-full m-1 object-cover rounded-[50px] overflow-hidden  bg-red-300 relative">
            <img src={'/image.png'} alt="car-img" layout="fill" objectFit="cover"></img>
            <div className="absolute bottom-0 opacity-90 h-1/2 w-full bg-gradient-to-b from-[#c1ffb3] to-white">
            </div>
          </div>
          <div className="h-full m-1 object-cover rounded-[50px] overflow-hidden  bg-red-300 relative">
            <img src={'/image.png'} alt="car-img" layout="fill" objectFit="cover"></img>
            <div className="absolute bottom-0 opacity-90 h-1/2 w-full bg-gradient-to-b from-[#c1ffb3] to-white">
            </div>
          </div>
        </Slider>
      </div > */}
     <div className="slider-container w-full">
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
    </>
  );
};

export default Roadmap;
