import Image from "next/image";
import React from "react";
import { LuFacebook, LuInstagram, LuSparkle, LuTwitter } from "react-icons/lu";

const Footer = () => {
    return (
        <>
            <div className="p-10 w-full font-dmmono">
                <div className="bg-black h-[1px] w-full"></div>
                <div className="flex md:flex-row w-full flex-col justify-evenly items-center py-10">
                    <Image alt="qrcode" className="m-4" src='/qr.png' width={250} height={250}/>
                    <h3 className="text-center font-cc text-xl md:text-3xl text-black uppercase">Scan this QR to bring Victors to your room </h3>
                </div>
                <div className="bg-black h-[1px] w-full"></div>
                <div className="flex md:flex-row flex-col justify-between py-10">
                    <div className="flex  justify-center md:flex-row flex-col items-center">
                        <input
                            type="text"
                            className="bg-gray-300 text-black p-2 px-4 rounded-full text-sm m-1 h-fit"
                            placeholder={"your@address.com"}
                        />
                        <button className="text-sm bg-black text-pink-200 px-4 m-1 rounded-full p-2 h-fit">
                            Join the Waitlist
                        </button>
                    </div>
                    <div className="text-black flex flex-col font-cc">
                        <div className="flex justify-center items-center my-2">
                            <LuSparkle />
                            <h6>Aptos Victors</h6>
                        </div>
                        <div className="flex justify-center text-[20px] my-2">
                            <LuTwitter className="mx-3" />
                            <LuInstagram className="mx-3" />
                            <LuFacebook className="mx-3" />
                        </div>
                    </div>
                </div>
                <div className="bg-black h-[1px] w-full"></div>
                <div className="text-black text-xs m-1 md:text-left text-center">
                    <p>© 2024 Playsphere Labs</p>
                </div>
            </div>
        </>
    );
};

export default Footer;
