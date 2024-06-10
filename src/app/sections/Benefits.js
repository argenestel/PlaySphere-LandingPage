import React from 'react'
import Carousal from "../components/Carousal";
import { RiSparkling2Fill } from "react-icons/ri";

const images = [
  "/1.png", "/2.png", "/3.png", "/4.png", "/5.png", "/6.png",
  "/7.png"
];

const benefits = [
  "Exclusive In-Game Powers and Abilities",
  "Immersive Augmented Reality Integration ",
  "Composable and Evolutionary NFT System powered by cNFTs ",
  "Integration with the gaming platform of [Redacted]"
]

const Benefits = () => {
  return (
    <>
      <div id='benefits' className="md:h-[80vh] h-min-content flex md:flex-row flex-col p-3">
        <div className="rounded-[50px] bg-green-400 md:h-full h-[400px] md:w-[40%] w-full m-1 overflow-hidden">
          <Carousal images={images} />
        </div>
        <div className="rounded-[50px] bg-gradient-to-r from-soft-pink to-soft-cyan md:h-full h-min-content md:w-[60%] w-full m-1">
          <div className="w-full py-10 md:px-20 px-6 h-full">
            <h4 className="font-cc text-2xl md:text-4xl text-black mb-5">
              BENEFITS FOR HOLDERS
            </h4>
            <div className="text-black font-dmmono text-sm">
              {benefits.map((benefit, ind) => {
                return <div key={ind} className="flex border-b border-black p-2 mt-7">
                  <div>
                    <RiSparkling2Fill fontSize={20} className="mx-2" />
                  </div>
                  <h6 >{benefit}</h6>
                </div>
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Benefits