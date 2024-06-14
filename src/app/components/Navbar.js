"use client";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTelegramPlane, FaTwitter, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import './Navbar.css';
import Link from "next/link";

const Navbar = () => {

  return (
    <>
      <header className="h-[100px] top-[20px] w-full fixed z-50 flex items-center justify-center">
        <div className="sideicon md:flex hidden bg-[#0f0f0f80] backdrop-blur-xl mx-1 p-3 rounded-full">
          <a href="https://t.me/aptosvictors" target="_blank" rel="noopener noreferrer">
            <FaTelegramPlane size={30} className="text-soft-cyan" />
          </a>
        </div>
       
        <div
          className={`hamburgout hover:w-[400px] md:hover:w-[500px] relative cursor-pointer rounded-full bg-[#0f0f0f80] backdrop-blur-xl flex items-center justify-center p-2`}
        >
          <div className="hamburgin h-[40px] w-[40px] md:h-[60px] md:w-[60px] flex items-center justify-center bg-soft-cyan rounded-full">
            <GiHamburgerMenu size={25} className="m-3 md:m-4" color="black" />
          </div>
          <div className="hamburgcont">
            <Link className="hamblink md:text-base text-sm md:m-3 m-1 hover:text-soft-cyan hover:underline font-dmmono" href="/">Home</Link>
            <Link className="hamblink md:text-base text-sm md:m-3 m-1 hover:text-soft-cyan hover:underline font-dmmono" href="#about">Story</Link>
            <Link className="hamblink md:text-base text-sm md:m-3 m-1 hover:text-soft-cyan hover:underline font-dmmono" href="#benefits">Benefits</Link>
            <Link className="hamblink md:text-base text-sm md:m-3 m-1 hover:text-soft-cyan hover:underline font-dmmono" href="#roadmap">Roadmap</Link>
            <Link className="hamblink md:text-base text-sm md:m-3 m-1 hover:text-soft-cyan hover:underline font-dmmono" href="#faq">FAQ</Link>
            <Link className="hamblink md:text-base text-sm md:m-3 m-1 hover:text-soft-cyan hover:underline font-dmmono" href="#sneakpeek">SneakPeek</Link>
          </div>
        </div>
        <div className="sideicon md:flex hidden bg-[#0f0f0f80] backdrop-blur-xl mx-1 p-3 rounded-full">
          <a href="https://twitter.com/aptosvictors" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={30} className="text-soft-cyan" />
          </a>
        </div>
        {/* <div className="sideicon md:flex hidden bg-[#0f0f0f80] backdrop-blur-xl mx-1 p-3 rounded-full">
          <a href="https://instagram.com/aptosvictors" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} className="text-soft-cyan" />
          </a>
        </div> */}
        {/* <div className="sideicon md:flex hidden bg-[#0f0f0f80] backdrop-blur-xl mx-1 p-3 rounded-full">
          <a href="mailto:info@aptosvictors.com">
            <MdEmail size={30} className="text-soft-cyan" />
          </a>
        </div> */}
      </header>
    </>
  );
};

export default Navbar;
