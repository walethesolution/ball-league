import React from "react";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";

interface SlideProps {
  imageSrc: string;
  altText: string;
  caption: string;
}

const Slides: React.FC<SlideProps> = ({ imageSrc, altText, caption }) => {
  return (
    <SwiperSlide>
      <div className="relative">
        <Image
          src={imageSrc}
          alt={altText}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex justify-center items-center mt-[3rem]">
          <p className="text-white font-bold text-2xl md:text-3xl text-center lg:text-5xl">
            {caption}
          </p>
        </div>
      </div>
    </SwiperSlide>
  );
};

export default Slides;
