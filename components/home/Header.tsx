"use client";

import React, { use, useState } from "react";
import Image from "next/image";
import Logo from "../../public/assets/images/logo.svg";
import Hamburger from "../../public/assets/icons/hamburger.svg";
import CloseIcon from "../../public/assets/icons/close-icon.svg";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-between mx-3 my-3 h-[83px]">
        <Image
          className="w-[61px] h-[64px]"
          src={Logo}
          alt="Kings league logo"
        />
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <h2 className="text-xl text-black font-medium">KINGS LEAGUE</h2>
        </div>
        <div className="cursor-pointer" onClick={handleMenuToggle}>
          {menuOpen ? (
            <Image src={CloseIcon} alt="close-icon" />
          ) : (
            <Image src={Hamburger} alt="hamburger" />
          )}
        </div>
      </div>
      {menuOpen && (
        <div className="absolute right-0 w-1/2 top-[83px] p-2 shadow">
          <ul>
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
