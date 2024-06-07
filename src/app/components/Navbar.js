"use client";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTelegramPlane } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import './Navbar.css'
import Link from "next/link";

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleNavbar = () => {
    setIsExpanded(!isExpanded);
  };
  const [raised, setRaised] = useState(false);
  return (
    <>
      <header className={`h-[100px] top-[20px] w-full fixed z-50 flex items-center justify-center`}>
        <div className="sideicon md:flex hidden bg-[#0f0f0f80] backdrop-blur-xl mx-1 p-3 rounded-full">
          <FaTelegramPlane size={30} />
        </div>
        <div className="sideicon md:flex hidden bg-[#0f0f0f80] backdrop-blur-xl mx-1 p-3 rounded-full">
          <FaTwitter size={30} />
        </div>
        <div
          onMouseOver={() => setRaised(true)}
          onMouseOut={() => setRaised(false)}
          className={`hamburgout hover:w-[400px] md:hover:w-[500px] relative  cursor-pointer rounded-full bg-[#0f0f0f80] backdrop-blur-xl  flex items-center justify-center  p-2`}
        >
          <div className="hamburgin h-[40px] w-[40px] md:h-[60px] md:w-[60px] flex items-center justify-center bg-[#c1ffb3] rounded-full">
            <GiHamburgerMenu size={25} className="m-3 md:m-4" color="black" />
          </div>
          <div className="hamburgcont">
            <Link className="hamblink md:text-base text-sm md:m-3 m-1 hover:text-[#c1ffb3] hover:underline font-dmmono" href={'/'}>Home</Link>
            <Link className="hamblink md:text-base text-sm md:m-3 m-1 hover:text-[#c1ffb3] hover:underline font-dmmono" href={'/'}>Story</Link>
            <Link className="hamblink md:text-base text-sm md:m-3 m-1 hover:text-[#c1ffb3] hover:underline font-dmmono" href={'/'}>Benefits</Link>
            <Link className="hamblink md:text-base text-sm md:m-3 m-1 hover:text-[#c1ffb3] hover:underline font-dmmono" href={'/'}>Roadmap</Link>
            <Link className="hamblink md:text-base text-sm md:m-3 m-1 hover:text-[#c1ffb3] hover:underline font-dmmono" href={'/'}>FAQ</Link>
            <Link className="hamblink md:text-base text-sm md:m-3 m-1 hover:text-[#c1ffb3] hover:underline font-dmmono" href={'/'}>Team</Link>
          </div>
        </div>
        <div className="sideicon md:flex hidden bg-[#0f0f0f80] backdrop-blur-xl mx-1 p-3 rounded-full">
          <FaInstagram size={30} />
        </div>
        <div className="sideicon md:flex hidden bg-[#0f0f0f80] backdrop-blur-xl mx-1 p-3   rounded-full">
          <MdEmail size={30} />
        </div>
      </header>
      
    </>
  );
};

export default Navbar;
2;
