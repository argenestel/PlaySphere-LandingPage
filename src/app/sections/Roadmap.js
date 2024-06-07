"use client";
import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RoadmapItem from "../components/RoadmapItem";
import Slider from "react-slick";

const images = ["/image.png", "/aboutbg.webp", "/image.png", "/aboutbg.webp"];

const LeftArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div onClick={onClick} className={`arrow ${className}`}>
      <FaChevronLeft class="arrows" style={{ color: "white" }} />
    </div>
  );
};
const RightArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div onClick={onClick} className={`arrow ${className}`}>
      <FaChevronRight class="arrows" style={{ color: "white" }} />
    </div>
  );
};

const roadmap = [
  {
    name: "Planning and Foundation",
    item1: "Conceptualization",
    item2: "Conceptualization",
    item3: "Conceptualization",
    item4: "Conceptualization",
    item5: "Conceptualization",
  },
  {
    name: "Planning and Foundation",
    item1: "Conceptualization",
    item2: "Conceptualization",
    item3: "Conceptualization",
    item4: "Conceptualization",
    item5: "Conceptualization",
  },
  {
    name: "Planning and Foundation",
    item1: "Conceptualization",
    item2: "Conceptualization",
    item3: "Conceptualization",
    item4: "Conceptualization",
    item5: "Conceptualization",
  },
];

const Roadmap = () => {
  const settings = {
    className: "slider rounded-[50px] overflow-hidden variable-width w-full",
    infinite: false,
    dots: false,
    arrows: true,
    slidesToScroll: 1,
    initalSlide: 0,
    variableWidth: true,
    centerMode: false,
    responsive: [
      {
        breakpoint: 766,
        settings: {
          variableWidth: false,
          centerMode: false,
        },
      },
    ],
    prevArrow: <LeftArrow to="prev" />,
    nextArrow: <RightArrow to="next" />,
  };
  return (
    <>
      <div className="text-black slider-container p-3  w-full">
        <Slider {...settings}>
          <div
            style={{ width: 300 }}
            className="w-[560px] md:w-[560px]  md:h-[100vh] h-[90vh]"
          >
            <div className="rounded-[50px] bg-gradient-to-b from-[#c1ffb3] to-white mx-2 h-full p-4 overflow-hidden">
              <div className="flex justify-center items-center w-full h-full -rotate-90">
                <h2 className="font-cc text-3xl md:text-6xl m-2">ROADMAP</h2>
              </div>
            </div>
          </div>
          {roadmap.map((item, ind)=>{
      return <div
        style={{ width: 650 }}
        className="w-[560px] md:w-[560px] md:h-[100vh] h-[90vh]"
      >
        <RoadmapItem sour={item} ind={ind} />
      </div>
          })}
        </Slider>
      </div>
    </>
  );
};

export default Roadmap;
