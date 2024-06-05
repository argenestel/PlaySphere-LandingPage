import React from "react";
import Carousal from "../components/Carousal";

const Roadmap = () => {
  return (
    <>
      <div className="p-3 flex flex-col md:flex-row h-[70vh] w-full justify-center items-center">
        <div className="md:w-[40%] w-full h-full rounded-[50px] overflow-hidden">
          <Carousal />
        </div>
        <div className="m-3 flex items-center justify-center bg-[#c1ffb3] rounded-[50px] h-full  overflow-hidden  w-full">
          <div className="w-full p-10">
            <h4 className="font-cc text-2xl md:text-4xl text-black my-10 text-[#c1ffb3]">
              GOT QUESTIONS?
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Roadmap;
