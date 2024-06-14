"use client";
import React from "react";
import Image from "next/image";
const RoadmapItem = ({ sour, ind }) => {
  return (
    <>
      <div className="rounded-[50px] bg-green-100 mx-2 h-full overflow-hidden relative">
        <div className="bg-red-400 w-full h-full relative">
          <Image src={sour.img} width={500} height={500} className="w-full h-full object-cover" />
          <div className="w-full h-[60%] absolute bottom-0 bg-gradient-to-b to-[#b2f3f3e0] from-[#fdb0c0e0] left-0 z-10 px-10 flex flex-col justify-center">
            <h6 className="font-cc my-4 text-xl md:text-2xl uppercase">
              {sour.name}
            </h6>
            <div className="font-dmmono md:text-base text-sm">
              <ul>
                {sour.items.map((item,ind)=>{
                  return <li key={ind} className="list-disc decoration-0 list-inside">
                  {item}
                </li>
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[-60px] md:bottom-[-90px] font-cc right-[40px] z-20 text-[150px] md:text-[220px] text-[#0f0f0f] opacity-15">
          <h1>{ind + 1}</h1>
        </div>
      </div>
    </>
  );
};

export default RoadmapItem;
