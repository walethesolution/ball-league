"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "../../public/assets/images/logo.svg";
import Hamburger from "../../public/assets/icons/hamburger.svg";
import CloseIcon from "../../public/assets/icons/close-icon.svg";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      // close menu when screensize reaches breakpoints
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative">
      <nav className="flex items-center justify-between mx-3 h-[83px] lg:h-[145px]">
        <div className="flex items-center">
          <Image
            className="w-[61px] h-[64px] md:w-[85px] md:h-[72px] lg:w-[137px] lg:h-[113px]"
            src={Logo}
            alt="Kings league logo"
          />
          <div className="lg:hidden absolute left-1/2 transform -translate-x-1/2">
            <h2 className="text-xl text-black font-medium">KINGS LEAGUE</h2>
          </div>
        </div>
        <ul className="hidden lg:flex items-center space-x-16 lg:justify-center flex-grow">
          <li className="text-lg font-normal ">GAMES</li>
          <li className="text-lg font-normal ">ABOUT US</li>
          <li className="text-lg font-normal ">PLAYERS</li>
          <li className="text-lg font-normal ">STATS</li>
          <li className="text-lg font-normal ">NEWS & BLOG</li>
        </ul>
        <div className="lg:hidden cursor-pointer" onClick={handleMenuToggle}>
          {menuOpen ? (
            <Image src={CloseIcon} alt="close-icon" />
          ) : (
            <Image src={Hamburger} alt="hamburger" />
          )}
        </div>
      </nav>
      {menuOpen && (
        <div className="absolute right-0 w-3/4 top-[83px] p-2 shadow z-[9999] bg-[#FFFFFA] h-screen ">
          <ul className="flex flex-col mx-4 gap-4">
            <li className="mb-2 text-lg font-normal md:mb-4">GAMES</li>
            <li className="mb-2 text-lg font-normal md:mb-4">ABOUT US</li>
            <li className="mb-2 text-lg font-normal md:mb-4">PLAYERS</li>
            <li className="mb-2 text-lg font-normal md:mb-4">STATS</li>
            <li className="mb-2 text-lg font-normal md:mb-4">NEWS & BLOG</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
