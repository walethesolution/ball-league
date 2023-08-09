"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/assets/images/logo.svg";
import Hamburger from "../../public/assets/icons/hamburger.svg";
import CloseIcon from "../../public/assets/icons/close-icon.svg";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
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
          <Link href={"/"}>
            <Image
              className="w-[61px] h-[64px] md:w-[85px] md:h-[72px] lg:w-[137px] lg:h-[113px]"
              src={Logo}
              alt="Kings league logo"
              onClick={closeMenu}
            />
          </Link>
          <div className="lg:hidden absolute left-1/2 transform -translate-x-1/2">
            <h2 className="text-xl text-black font-medium">KINGS LEAGUE</h2>
          </div>
        </div>
        <ul className="hidden lg:flex items-center space-x-16 lg:justify-center flex-grow">
          <Link href={"/games"} className="text-lg font-normal">
            GAMES
          </Link>
          <Link href={"/about"} className="text-lg font-normal">
            ABOUT US
          </Link>
          <Link href={"/players"} className="text-lg font-normal">
            PLAYERS
          </Link>
          <Link href={"/stats"} className="text-lg font-normal">
            STATS
          </Link>
          <Link href={"/updates"} className="text-lg font-normal">
            NEWS & BLOG
          </Link>
        </ul>
        <Link
          href={""}
          className=" hidden lg:block bg-[#2A6041] mr-8 text-white px-7 py-2.5 text-sm font-bold rounded-xl xl:px-7 xl:py-2.5 xl:text-base"
        >
          Sign up
        </Link>
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
            <Link
              href={"/games"}
              className="mb-2 text-lg font-normal md:mb-4"
              onClick={closeMenu}
            >
              GAMES
            </Link>
            <Link
              href={"/about"}
              className="mb-2 text-lg font-normal md:mb-4"
              onClick={closeMenu}
            >
              ABOUT US
            </Link>
            <Link
              href={"/players"}
              className="mb-2 text-lg font-normal md:mb-4"
              onClick={closeMenu}
            >
              PLAYERS
            </Link>
            <Link
              href={"/stats"}
              className="mb-2 text-lg font-normal md:mb-4"
              onClick={closeMenu}
            >
              STATS
            </Link>
            <Link
              href={"/updates"}
              className="mb-2 text-lg font-normal md:mb-4"
              onClick={closeMenu}
            >
              NEWS & BLOG
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
