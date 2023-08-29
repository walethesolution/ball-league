"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import HomeCourt from "../../public/assets/images/home-court.svg";
import ThreeGuys from "../../public/assets/images/tim-fua-ima.svg";
import Shooter from "../../public/assets/images/steve-shooter.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "../../styles/hero.css";
import "../../styles/animations.css";

const Hero: React.FC = () => {
  const [swiper, setSwiper] = useState<SwiperCore | null>(null);

  const customizeSwiperSettings = (swiperInstance: SwiperCore) => {
    if (swiperInstance) {
      swiperInstance.params.speed = 2500;
      swiperInstance.params.slidesPerView = 1;
      swiperInstance.update();
    }
  };

  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 3000 }}
        onSwiper={(swiperInstance) => {
          customizeSwiperSettings(swiperInstance);
          setSwiper(swiperInstance);
        }}
      >
        <SwiperSlide>
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
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="relative">
            <Image
              src={ThreeGuys}
              alt="Three guys on court"
              className="w-full h-screen object-cover md:h-full"
            />
            <div className="absolute flex justify-center items-center inset-0 mt-[5rem] fade-in">
              <p className="text-white font-bold text-2xl md:text-3xl text-center lg:text-5xl">
                EMBRACE THE SPIRIT OF COMPETITION <br /> AND CAMARADARIE
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="relative">
            <Image
              src={Shooter}
              alt="Basketball shooting form"
              className="w-full h-screen object-cover md:h-full"
            />
            <div className="absolute flex justify-center items-center inset-0 mt-[4rem] fade-in">
              <p className="text-white font-bold text-2xl md:text-3xl text-center lg:text-5xl">
                THE SHOOTER&apos;S FORM, <br />
                TAKE YOUR GAME <br className="md:hidden" /> TO THE NEXT LEVEL
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Hero;
