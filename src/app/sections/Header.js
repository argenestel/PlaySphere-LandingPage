import React from "react";
import ImageSlider from "../components/ImageSlider";

const images = ["/image.png", "/image.png", "/image.png"];

const Header = () => {
  return (
    <div className="md:h-screen h-[85vh] p-3 relative text-white z-1">
      <div className="bg-white h-full w-full rounded-t-[60px] overflow-hidden">
        <div className="bg-black h-1/2 overflow-hidden">
          <ImageSlider images={images} />
        </div>
        <div className="bg-black h-1 w-full"></div>
        <div className="bg-black h-1/2 overflow-hidden">
          <ImageSlider images={images} direction={"right"} />
        </div>
      </div>
      <div className="opacity-100 z-10 backdrop-blur-xl absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 text-center bg-[#0f0f0f80] md:py-[30px] md:pb-[40px] md:px-[70px] py-[30px] rounded-[50px] md:w-fit w-[90%]  md:rounded-[100px]">
        <div>
          <h2 className="font-cc text-2xl md:text-6xl my-3">PLAYSPHERE</h2>
        </div>
        <div>
          <p className="font-dmmono">
            NFT collection that will capture your heart and soul.
          </p>
        </div>
      </div>
      <div className="font-dmmono flex-wrap flex absolute bottom-[10px] z-10 left-[50%]  justify-center -translate-x-1/2 -translate-y-1/2 md:flex-row flex-col items-center">
        <input
          type="email"
          className="bg-white outline-none text-black md:p-4 p-2 px-6 rounded-full min-w-[300px] text-base m-1 h-fit"
          placeholder={"your@address.com"}
        />
        <button className="text-base bg-[#c1ffb3] text-black font-semibold min-w-[250px] px-6 m-1 rounded-full p-2 md:p-4 h-fit">
          Join the Waitlist
        </button>
      </div>
    </div>
  );
};

export default Header;
