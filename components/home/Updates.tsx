"use client";

import Image from "next/image";
import Link from "next/link";
import MiamiCourt from "../../public/assets/images/maimi-view-ct.svg";
import RodgeCourt from "../../public/assets/images/rodg-n-ct.svg";
import "../../styles/animations.css";
import useFadeInScroll from "@/styles/useFadeInScroll";

const Updates: React.FC = () => {
  const { ref, isVisible } = useFadeInScroll();

  return (
    <div ref={ref} className={`${isVisible ? "fade-in" : ""}`}>
      <div className="flex flex-col gap-4 items-center justify-center xl:gap-7">
        <h1 className="text-2xl font-bold border-black md:text-3xl xl:text-5xl">
          LATEST UPDATES
        </h1>
        <h3 className="text-center text-sm md:text-base xl:text-xl">
          NEWS & BLOG
        </h3>
      </div>
      <div className="flex flex-col items-center justify-center gap-14 text-center mx-auto my-5 xl:my-24 xl:mx-16 xl:gap-20">
        <div className="flex flex-col gap-4 mx-4 md:items-stretch md:flex-row lg:mx-8 lg:gap-8 xl:gap-14">
          <div className="md:w-1/2">
            <Image src={MiamiCourt} alt="Our court looking like miami" />
          </div>
          <div className="flex flex-col gap-4 md:w-1/2 md:gap-2 lg:justify-center lg:items-center xl:gap-8">
            <h2 className="text-lg font-semibold lg:text-xl xl:text-2xl">
              OUR MIAMI STYLE COURT
            </h2>
            <p className="text-base lg:text-lg xl:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              vulputate auctor dolor, vitae tincidunt turpis fringilla at. Nunc
              eget placerat lectus. Curabitur rutrum dui in sollicitudin tempus.
            </p>
            <div className="mt-4 md:mt-2">
              <Link
                href={"/updates"}
                className="bg-[#2A6041] text-white px-7 py-2.5 text-sm font-bold rounded-xl xl:px-14 xl:py-4 xl:text-base"
              >
                MORE NEWS
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 mx-4 md:items-stretch md:flex-row-reverse lg:mx-8 lg:gap-8 xl:gap-14">
          <div className="md:w-1/2">
            <Image src={RodgeCourt} alt="Rodge in court" />
          </div>
          <div className="flex flex-col gap-4 md:w-1/2 md:gap-2 lg:justify-center lg:items-center xl:gap-8">
            <h2 className="text-lg font-semibold lg:text-xl xl:text-2xl">
              GREATNESS ARRIVES EARLY
            </h2>
            <p className="text-base lg:text-lg xl:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              vulputate auctor dolor, vitae tincidunt turpis fringilla at. Nunc
              eget placerat lectus. Curabitur rutrum dui in sollicitudin tempus.
            </p>
            <p>
              August 13, 2023
              <br />
              Written by: <span>Wale</span>
            </p>
            <div className="mt-4 md:mt-2">
              <Link
                href={"/updates"}
                className="bg-[#2A6041] text-white px-7 py-2.5 text-sm font-bold rounded-xl xl:px-14 xl:py-4 xl:text-base"
              >
                MORE BLOGS
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Updates;
