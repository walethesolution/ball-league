"use client";

import Image from "next/image";
import HomeCourt from "../../public/assets/images/home-court.svg";
import ThreeGuys from "../../public/assets/images/tim-fua-ima.svg";
import Shooter from "../../public/assets/images/steve-shooter.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../styles/hero.css";
import Slides from "./Slides";

const Hero: React.FC = () => {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]}>
        <SwiperSlide>
          <div className="relative">
            <Image
              src={HomeCourt}
              alt="this is home court"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex justify-center items-center  mt-[3rem]">
              <p className="text-white font-bold text-2xl md:text-3xl text-center lg:text-5xl">
                DISCOVER THE <br className="md:hidden" /> COURT OF LEGENDS
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
              className="w-full h-full object-cover"
            />
            <div className="absolute flex justify-center items-center inset-0 mt-[5rem]">
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
              className="w-full h-full object-cover"
            />
            <div className="absolute flex justify-center items-center inset-0 mt-[4rem]">
              <p className="text-white font-bold text-2xl md:text-3xl text-center lg:text-5xl">
                THE SHOOTER&apos;S FORM, <br />
                TAKE YOUR GAME TO THE NEXT LEVEL
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Hero;
