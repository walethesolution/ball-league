"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import HomeCourt from "../../public/assets/images/homeCourt.png";
import Stretching from "../../public/assets/images/stretching.png";
import GatedCourt from "../../public/assets/images/gatedCourt.png";

const backgrounds = [
  { type: "image", src: HomeCourt },
  { type: "image", src: Stretching },
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

      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      <div className="absolute inset-0 flex flex-col justify-center items-center text-center mt-[3rem] fade-in z-20">
        <div className="flex flex-col gap-16">
          <div className="text-center text-white text-[12.375vw] md:text-[9.375vw] leading-[0.8em]">
            <p>Kings</p>
            <p>League</p>
          </div>

          <button className=" text-white py-3 px-6 text-[4vw] md:text-[2vw] rounded-md hover:bg-green-700 transition-colors duration-300">
            Become a member
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
