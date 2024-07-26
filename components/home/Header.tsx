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
    localStorage.setItem("activeLink", activeLink);
  }, [activeLink]);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [menuOpen]);

  return (
    <header className="fixed w-full bg-transparent z-50">
      <nav className="flex items-center justify-between h-[85px] bg-black bg-opacity-70 px-4 shadow-lg z-50">
        <Link href="/" onClick={handleLogoClick}>
          <Image
            src={Logo}
            alt="Kings League logo"
            className="w-[61px] h-[64px] md:w-[85px] md:h-[72px]"
          />
        </Link>
        <div className="lg:hidden z-50" onClick={handleMenuToggle}>
          <Image
            src={menuOpen ? CloseIcon : Hamburger}
            alt={menuOpen ? "close menu" : "open menu"}
          />
        </div>
        <ul className="hidden lg:flex gap-8 items-center text-white text-lg font-semibold">
          <li>
            <Link
              href="/tournament"
              onClick={closeMenu}
              className={
                activeLink === "players" ? "border-b-2 border-green-500" : ""
              }>
              Tournaments
            </Link>
          </li>
          <li>
            <Link
              href="/updates"
              onClick={closeMenu}
              className={
                activeLink === "updates" ? "border-b-2 border-green-500" : ""
              }>
              Contact us
            </Link>
          </li>
        </ul>
        <Link
          href="/login"
          className="hidden lg:flex bg-green-600 text-white px-6 py-2 text-sm font-bold rounded-full hover:bg-green-700 transition-colors">
          Log In
        </Link>
      </nav>
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-40">
          <div className="fixed right-0 w-2/3 max-w-xs bg-white h-full shadow-lg p-6 flex flex-col gap-8 mt-20 z-50">
            <ul className="flex flex-col gap-6 text-lg font-semibold">
              <li>
                <Link href="/players" onClick={closeMenu}>
                  Tournament
                </Link>
              </li>
              <li>
                <Link href="/updates" onClick={closeMenu}>
                  Contact Us
                </Link>
              </li>
            </ul>
            <Link
              href="/login"
              className="bg-green-600 text-white px-6 py-2 text-sm font-bold rounded-full hover:bg-green-700 transition-colors mr-4"
              onClick={closeMenu}>
              Log In
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
