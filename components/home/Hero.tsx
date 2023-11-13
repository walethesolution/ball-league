"use client";

import Image from "next/image";
import HomeCourt from "../../public/assets/images/homeCourt.png";

const Hero: React.FC = () => {
  return (
    <div>
      <Image
        src={HomeCourt}
        alt="this is home court"
        className="w-full h-screen object-cover"
      />
      <div className="absolute inset-0 flex justify-center items-center mt-[3rem] fade-in">
        <p className="text-white font-bold text-2xl md:text-3xl text-center lg:text-5xl">
          DISCOVER <br className="md:hidden" /> THE <br className="md:hidden" />
          COURT OF LEGENDS
        </p>
      </div>
    </div>
  );
};

export default Hero;
