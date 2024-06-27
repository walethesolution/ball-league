"use client";

import Image from "next/image";
import HomeCourt from "../../public/assets/images/homeCourt.png";

const Hero: React.FC = () => {
  return (
    <>
      <Image
        src={HomeCourt}
        alt="this is home court"
        className="w-full h-screen object-cover"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center mt-[3rem] fade-in">
        <div
          className="text-center text-white text-[12.375vw] md-[9.375vw]"
          style={{ lineHeight: "0.8em" }}>
          <p>Kings</p>
          <p>League</p>
        </div>
      </div>
    </>
  );
};

export default Hero;
