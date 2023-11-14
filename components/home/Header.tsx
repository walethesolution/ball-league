"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/assets/images/logo.svg";
import Hamburger from "../../public/assets/icons/hamburger.svg";
import CloseIcon from "../../public/assets/icons/close-icon.svg";
import NavLink from "./NavLink";

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
    localStorage.removeItem("activeLink");

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

  return (
    <div>
      <div className="w-full fixed z-[9999] bg-[#FFFFFA] shadow-lg">
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
            <div className="lg:hidden absolute left-1/2 transform -translate-x-1/2">
              <h2 className="text-xl text-black font-lobster font-semibold">
                KINGS LEAGUE
              </h2>
            </div>
          </div>
          <ul className="hidden lg:flex items-center space-x-16 lg:justify-center">
            <NavLink
              href={"/games"}
              activeLink={activeLink}
              setActiveLink={setActiveLink}
            >
              GAMES
            </NavLink>
            <NavLink
              href={"/about"}
              activeLink={activeLink}
              setActiveLink={setActiveLink}
            >
              ABOUT US
            </NavLink>
            <NavLink
              href={"/players"}
              activeLink={activeLink}
              setActiveLink={setActiveLink}
            >
              PLAYERS
            </NavLink>
            <NavLink
              href={"/stats"}
              activeLink={activeLink}
              setActiveLink={setActiveLink}
            >
              STATS
            </NavLink>
            <NavLink
              href={"/updates"}
              activeLink={activeLink}
              setActiveLink={setActiveLink}
            >
              NEWS & BLOG
            </NavLink>
          </ul>
          <Link
            href={"/register"}
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
      </div>
      {menuOpen && (
        <div className="fixed right-0 w-3/4 top-[80px] p-2 shadow bg-[#FFFFFA] h-screen z-[9999] flex flex-col gap-24">
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
          <Link
            href={"/register"}
            className="bg-[#2A6041] text-white px-7 py-2.5 text-sm font-bold rounded-xl xl:px-7 xl:py-2.5 xl:text-base flex items-center justify-center"
            onClick={closeMenu}
          >
            Sign up
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
