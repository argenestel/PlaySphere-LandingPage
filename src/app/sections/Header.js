import React from "react";
import ImageSlider from "../components/ImageSlider";

const images = ["/image.png", "/image.png", "/image.png"];

const Header = () => {
  return (
    <div className="md:h-screen h-[85vh] p-3 relative text-white">
      <div className="bg-white h-full w-full rounded-t-[60px] overflow-hidden">
        <div className="bg-black h-1/2 overflow-hidden">
          <ImageSlider images={images} />
        </div>
        <div></div>
        <div></div>
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
    </div>
  );
};

export default Header;
