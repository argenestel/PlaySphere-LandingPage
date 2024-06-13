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
      <FaChevronLeft className="arrows" style={{ color: "white" }} />
    </div>
  );
};
const RightArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div onClick={onClick} className={`arrow ${className}`}>
      <FaChevronRight className="arrows" style={{ color: "white" }} />
    </div>
  );
};

const roadmap = [
  {
    "name": "Foundation",
    "items": [
      "Inception (Conceptualize vision, mechanics, target audience)",
      "Asset Creation (Design characters, environments, UI elements)",
      "Game Creation (Implement core mechanics, blockchain integration)",
      "AR Integration (Develop AR features for immersion)",
      "Aptos Integration (Integrate with Aptos blockchain)"
    ]
    , "img": '/bg1.jpg'
  },
  {
    "name": "Community Building",
    "items": [
      "Alpha Development (Internal testing, bug fixing)",
      "Social Media Presence (Launch channels, begin marketing)",
      "Community Building (Foster engaged community)",
      "NFT Announcement (Reveal NFT collection details)",
      "Wallet Whitelisting for Free Mints (Early supporters mint for free)"
    ]
    , "img": '/bg2.jpg'
  },
  {
    "name": "Testing and Refinement",
    "items": [
      "Selecting Beta Testers (Invite diverse group for testing)",
      "Beta Release (Launch closed beta version)",
      "Incentivized Beta Testing (Reward testers with NFTs, tokens)",
      "Gather feedback and iterate based on insights"
    ]
    , "img": '/bg3.jpg'
  },
  {
    "name": "Launch and Expansion",
    "items": [
      "Mainnet Launch (Full game release on Aptos mainnet)",
      "Community Expansion (Expand marketing, influencer collaborations)",
      "[Redacted] (Mysterious high-impact update)",
      "Continuous updates and community engagement"
    ]
    , "img": '/city.jpg'
  }
]



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
      <div id="roadmap" className="text-black slider-container p-3  w-full">
        <Slider {...settings}>
          <div
            style={{ width: 300 }}
            className="w-[560px] md:w-[560px]  md:h-[100vh] h-[90vh]"
          >
            <div className="rounded-[50px] bg-gradient-to-b from-soft-pink to-soft-cyan mx-2 h-full p-4 overflow-hidden">
              <div className="flex justify-center items-center w-full h-full -rotate-90">
                <h2 className="font-cc text-6xl m-2">ROADMAP</h2>
              </div>
            </div>
          </div>
          {roadmap.map((item, ind) => {
            return <div
              key={ind}
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
