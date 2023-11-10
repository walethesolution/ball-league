"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import HomeCourt from "../../public/assets/images/home-court.svg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "../../styles/hero.css";
import "../../styles/animations.css";

const Hero: React.FC = () => {
  return (
    <>
      <div className="relative">
        <Image
          src={HomeCourt}
          alt="this is home court"
          className="w-full h-screen object-cover md:h-full"
        />
        <div className="absolute inset-0 flex justify-center items-center mt-[3rem] fade-in">
          <p className="text-white font-bold text-2xl md:text-3xl text-center lg:text-5xl">
            DISCOVER <br className="md:hidden" /> THE{" "}
            <br className="md:hidden" /> COURT OF LEGENDS
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
