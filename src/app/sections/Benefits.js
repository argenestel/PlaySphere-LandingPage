import React from 'react'
import Carousal from "../components/Carousal";
import { RiSparkling2Fill } from "react-icons/ri";

const images = [
  '/image.png',
  '/aboutbg.webp',
  '/image.png',
  '/aboutbg.webp'
]

const Benefits = () => {
  return (
    <>
      <div className="md:h-[80vh] h-min-content flex md:flex-row flex-col p-3">
        <div className="rounded-[50px] bg-green-400 md:h-full h-[400px] md:w-[40%] w-full m-1 overflow-hidden">
          <Carousal images={images}/>
        </div>
        <div className="rounded-[50px] bg-gradient-to-b  from-[#c1ffb3] to-white md:h-full h-min-content md:w-[60%] w-full m-1">
          <div className="w-full py-10 md:px-20 px-6 h-full">
            <h4 className="font-cc text-2xl md:text-4xl text-black mb-5 text-[#c1ffb3]">
              BENEFITS FOR HOLDERS
            </h4>
            <div className="text-black font-dmmono text-xs">
              <div className="flex border-b border-black p-2 mt-7">
                <div>
                  <RiSparkling2Fill fontSize={20} className="mx-2" />
                </div>
                <h6>Exclusive Ownership, Ultimate Scarcity</h6>
              </div>
              <div className="flex border-b border-black p-2 mt-7">
                <div>
                  <RiSparkling2Fill fontSize={20} className="mx-2" />
                </div>
                <h6>Unlock VIP Access and Special Privileges</h6>
              </div>
              <div className="flex border-b border-black p-2 mt-7">
                <div>
                  <RiSparkling2Fill fontSize={20} className="mx-2" />
                </div>
                <h6>Interactive Power in Your Hands</h6>
              </div>
              <div className="flex border-b border-black p-2 mt-7">
                <div>
                  <RiSparkling2Fill fontSize={20} className="mx-2" />
                </div>
                <h6>Elevate Your Status and Connect</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Benefits