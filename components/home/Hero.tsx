"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import HomeCourt from "../../public/assets/images/homeCourt.png";
import GatedCourt from "../../public/assets/images/gatedCourt.png";
import Link from "next/link";

const backgrounds = [
  { type: "image", src: HomeCourt },
  { type: "image", src: GatedCourt },
];

const Hero: React.FC = () => {
  const [currentBackground, setCurrentBackground] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentBackground((prev) => (prev + 1) % backgrounds.length);
    }, 7000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {backgrounds.map((bg, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            index === currentBackground ? "opacity-100" : "opacity-0"
          }`}>
          <Image
            src={bg.src}
            alt={`Background ${index}`}
            className="w-full h-full object-cover"
            layout="fill"
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70 z-10"></div>

      <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-20 px-4">
        <div className="max-w-3xl mx-auto flex flex-col gap-8 md:gap-12">
          <h1 className="text-white font-extrabold text-4xl md:text-6xl leading-tight">
            Feel Like a Pro, Join the KINGS LEAGUE
          </h1>
          <p className="text-white text-lg md:text-xl font-medium">
            Become part of a professional basketball community. <br></br> Track
            your performances and connect with local members.
          </p>
          <div className="relative inline-block">
            <Link
              href={"/join"}
              className="text-white py-3 px-8 text-lg md:text-xl bg-green-600 hover:bg-green-700 transition-colors duration-300 rounded-full shadow-lg">
              Join our community
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
