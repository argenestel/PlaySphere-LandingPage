"use client"
import React from "react";
import ImageSlider from "../components/ImageSlider";

const images = [
    "/4.png",
  "/7.png", "/8.png", "/12.png", "/10.png", "/9.png", "/12.png",
  "/13.png", "/17.png", "/15.png", "/14.png", "/20.png", "/18.png",
  "/16.png"
];

const Header = () => {
  const redirectToDashboard = () => {
    window.location.href = "https://dashboard.aptosvictors.xyz";
  };

  return (
    <div className="md:h-screen h-[85vh] p-3 relative text-white z-1">
      <div className="bg-[#1a1a1a] h-full w-full rounded-t-[60px] overflow-hidden">
        <div className="bg-gradient-to-r from-soft-purple to-soft-cyan h-1/2 overflow-hidden">
          <ImageSlider images={images} />
        </div>
        <div className="bg-gradient-to-r from-soft-cyan to-soft-purple h-1 w-full"></div>
        <div className="bg-gradient-to-r from-soft-purple to-soft-cyan h-1/2 overflow-hidden">
          <ImageSlider images={images} direction={"right"} />
        </div>
      </div>
      <div className="opacity-100 z-10 backdrop-blur-xl absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 text-center bg-[#0f0f0f80] md:py-[30px] md:pb-[40px] md:px-[70px] py-[30px] rounded-[50px] md:w-fit w-[90%] md:rounded-[100px]">
        <div>
          <h2 className="font-cc text-2xl md:text-6xl my-3 text-soft-cyan">APTOS VICTORS</h2>
        </div>
        <div>
          <p className="font-dmmono text-soft-pink">
            Endless fun, decentralized style – welcome to Aptos Victors
          </p>
        </div>
      </div>
      <div className="font-dmmono flex-wrap flex absolute bottom-[10px] z-10 left-[50%] justify-center -translate-x-1/2 -translate-y-1/2 md:flex-row flex-col items-center">
        <button
          className="text-base bg-gradient-to-r from-soft-pink to-soft-purple text-white font-semibold min-w-[250px] px-6 m-1 rounded-full p-2 md:p-4 h-fit"
          onClick={redirectToDashboard}
        >
          Dashboard
        </button>
      </div>
    </div>
  );
};

export default Header;
