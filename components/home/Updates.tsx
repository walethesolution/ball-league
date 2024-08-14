"use client";

import Link from "next/link";
import MiamiCourt from "../../public/assets/images/gatedCourt.png";
import SteveShooter from "../../public/assets/images/steveShooter.png";
import "../../styles/animations.css";
import useFadeInScroll from "@/styles/useFadeInScroll";
import { Card, CardBody } from "@nextui-org/react";
import Image from "next/image";

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
      <div className="flex flex-col items-center justify-center gap-14 text-center xl:my-24 xl:mx-16 xl:gap-20">
        <div>
          <Card>
            <CardBody className="flex flex-col gap-5 justify-center md:flex-row">
              <div>
                <Image
                  src={MiamiCourt}
                  alt="Our court looking like miami"
                  width={400}
                  className="rounded"
                />
              </div>
              <div className="flex flex-col gap-4 md:w-1/2 md:gap-2 justify-center items-center xl:gap-8">
                <h2 className="text-lg font-semibold lg:text-xl xl:text-2xl">
                  OUR MIAMI STYLE COURT
                </h2>
                <p className=" text-base lg:text-lg xl:text-xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  vulputate auctor dolor, vitae tincidunt turpis fringilla at.
                  Nunc eget placerat lectus. Curabitur rutrum dui in
                  sollicitudin tempus.
                </p>
                <Link
                  href={"/updates"}
                  className="bg-[#2A6041] text-white px-7 py-2.5 text-sm font-bold rounded-xl xl:px-14 xl:py-4 xl:text-base">
                  MORE NEWS
                </Link>
              </div>
            </CardBody>
          </Card>
        </div>

        <div className="flex flex-col gap-4 mx-4  lg:mx-8 lg:gap-8 xl:gap-14">
          <Card>
            <CardBody className="flex flex-col gap-5 justify-center md:items-stretch md:flex-row-reverse">
              <div className="flex-col">
                <Image
                  src={SteveShooter}
                  alt="Our court looking like miami"
                  width={400}
                  className="rounded"
                />
                <p className="text-center">
                  November 13, 2023
                  <br />
                  Written by: <span>Wale</span>
                </p>
              </div>
              <div className="flex flex-col gap-4 md:w-1/2 md:gap-2 justify-center items-center xl:gap-8">
                <h2 className="text-lg font-semibold lg:text-xl xl:text-2xl">
                  GREATNESS ARRIVES EARLY
                </h2>
                <p className=" text-base lg:text-lg xl:text-xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  vulputate auctor dolor, vitae tincidunt turpis fringilla at.
                  Nunc eget placerat lectus. Curabitur rutrum dui in
                  sollicitudin tempus.
                </p>
                <Link
                  href={"/updates"}
                  className="bg-[#2A6041] text-white px-7 py-2.5 text-sm font-bold rounded-xl xl:px-14 xl:py-4 xl:text-base">
                  MORE BLOGS
                </Link>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Updates;
