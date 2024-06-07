"use client";
import React from "react";
import Image from "next/image";
const RoadmapItem = ({ sour, ind }) => {
  return (
    <>
      <div className="rounded-[50px] bg-green-100 mx-2 h-full overflow-hidden relative">
        <div className="bg-red-400 w-full h-full relative">
          <Image src="/aboutbg.webp" layout="fill" objectFit="cover" />
          <div className="w-full h-[60%] absolute bottom-0 bg-gradient-to-b from-[#c1ffb3d9] to-[#e6ffe0] left-0 z-10 px-10 flex flex-col justify-center">
            <h6 className="font-cc my-4 text-xl md:text-2xl uppercase">
              {sour.name}
            </h6>
            <div className="font-dmmono md:text-base text-sm">
              <ul>
                <li className="list-disc decoration-0 list-inside">
                  {sour.item1}
                </li>
                <li className="list-disc list-inside my-3">{sour.item2}</li>
                <li className="list-disc list-inside my-3">{sour.item3}</li>
                <li className="list-disc list-inside my-3">{sour.item4}</li>
                <li className="list-disc list-inside my-3">{sour.item5}</li>
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
