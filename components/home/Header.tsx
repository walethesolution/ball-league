"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/assets/images/logo.svg";
import Hamburger from "../../public/assets/icons/hamburger.svg";
import CloseIcon from "../../public/assets/icons/close-icon.svg";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogoClick = () => {
    setActiveLink("");
    closeMenu();
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const storedActiveLink = localStorage.getItem("activeLink");
    if (storedActiveLink) {
      setActiveLink(storedActiveLink);
    }

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Store active link in local storage whenever it changes
    localStorage.setItem("activeLink", activeLink);
  }, [activeLink]);

  useEffect(() => {
    // Prevent scrolling when the menu is open
    if (menuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    // Clean up on component unmount
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [menuOpen]);

  return (
    <div>
      <div className="w-full fixed bg-transparent shadow-lg z-50">
        <nav className="flex items-center justify-between mx-3 h-[85px]">
          <div className="flex items-center">
            <Link href={"/"}>
              <Image
                className="w-[61px] h-[64px] md:w-[85px] md:h-[72px]"
                src={Logo}
                alt="Kings league logo"
                onClick={handleLogoClick}
              />
            </Link>
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <h2 className="text-3xl text-black font-lobster font-semibold">
                KL
              </h2>
            </div>
          </div>
          <div className="cursor-pointer lg:mr-4" onClick={handleMenuToggle}>
            {menuOpen ? (
              <Image src={CloseIcon} alt="close-icon" />
            ) : (
              <Image src={Hamburger} alt="hamburger" />
            )}
          </div>
        </nav>
      </div>
      {menuOpen && (
        <div className="fixed right-0 w-1/3 top-[80px] p-2 shadow bg-[#FFFFFA] h-screen z-[9999] flex flex-col gap-24 transition-transform duration-500 ease-in-out">
          <ul className="flex flex-col mx-4 text-xl gap-4">
            <Link
              href={"/games"}
              className="mb-2 text-lg font-normal md:mb-4"
              onClick={closeMenu}>
              GAMES
            </Link>
            <Link
              href={"/about"}
              className="mb-2 text-lg font-normal md:mb-4"
              onClick={closeMenu}>
              ABOUT US
            </Link>
            <Link
              href={"/players"}
              className="mb-2 text-lg font-normal md:mb-4"
              onClick={closeMenu}>
              PLAYERS
            </Link>
            <Link
              href={"/stats"}
              className="mb-2 text-lg font-normal md:mb-4"
              onClick={closeMenu}>
              STATS
            </Link>
            <Link
              href={"/updates"}
              className="mb-2 text-lg font-normal md:mb-4"
              onClick={closeMenu}>
              NEWS & BLOG
            </Link>
            <Link
              href={"/events"}
              className="mb-2 text-lg font-normal md:mb-4"
              onClick={closeMenu}>
              EVENTS
            </Link>
          </ul>
          <Link
            href={"login"}
            className="bg-[#2A6041] text-white px-7 py-2.5 text-sm font-bold rounded-xl xl:px-7 xl:py-2.5 xl:text-base flex items-center justify-center"
            onClick={closeMenu}>
            LOG IN
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
