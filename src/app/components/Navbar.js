"use client";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTelegramPlane } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Navbar = () => {
  const [raised, setRaised] = useState(false);
  return (
    <>
      <header className=" h-[100px] top-[20px] w-full fixed z-50 flex items-center justify-center">
        <div className="bg-[#0f0f0f80] backdrop-blur-xl mx-1 p-3 rounded-full">
          <FaTelegramPlane size={30} />
        </div>
        <div className="bg-[#0f0f0f80] backdrop-blur-xl mx-1 p-3 rounded-full">
          <FaTwitter size={30} />
        </div>
        <div
          onMouseOver={() => setRaised(true)}
          onMouseOut={() => setRaised(false)}
          className="rounded-full bg-[#0f0f0f80] backdrop-blur-xl  flex items-center  p-2"
        >
          <div className="bg-[#c1ffb3] rounded-full cursor-pointer">
            <GiHamburgerMenu size={25} className="m-4" color="black" />
          </div>
        </div>
        <div className="bg-[#0f0f0f80] backdrop-blur-xl mx-1 p-3 rounded-full">
          <FaInstagram size={30} />
        </div>
        <div className="bg-[#0f0f0f80] backdrop-blur-xl mx-1 p-3   rounded-full">
          <MdEmail size={30} />
        </div>
      </header>
    </>
  );
};

export default Navbar;
2;
