"use client";

import React from "react";
import Link from "next/link";
import { Card, CardHeader, CardBody } from "@nextui-org/react";

const Eventcards = () => {
  return (
    <div className="flex flex-col pt-20  mx-10 lg:mt-0 gap-8 items-center justify-center">
      <div className="flex flex-col gap-4 border-b border-gray-500 pb-4 lg:w-1/2">
        <div className="flex flex-col items-center justify-center bg-[#dad8d8] h-60">
          <Card>
            <CardHeader className="flex flex-col">
              <p className=" text-black/60 font-bold mt-2">TECH</p>
              <h2 className="text-center text-3xl font-semibold">
                Build your first website
              </h2>
            </CardHeader>
            <CardBody className="text-center">
              <p className="text-lg">Host: Olawale Ayejuyone</p>
              <span className="text-sm">Software Engineer</span>
            </CardBody>
          </Card>
        </div>

        <div className="flex flex-col items-center justify-center">
          <Card>
            <h4 className="text-center font-medium">EVENT INFO</h4>
            <CardBody className="flex flex-col items-left">
              <p>
                <span className="font-bold">Date</span>: TBD
              </p>
              <p>
                <span className="font-bold">Description</span>: Whether you have
                designed a website before <br /> or you are yet to see the
                computer for the first time, <br /> It don't matter, You will
                build your first website.
              </p>
              <p>
                <span className="font-bold">Time</span>: TBD
              </p>
              <p>
                <span className="font-bold">Location</span>: TBD
              </p>
            </CardBody>
          </Card>
          <Link
            href={"/"}
            className="bg-[#2A6041] text-white px-7 py-2.5 text-sm font-bold rounded-xl xl:px-14 xl:py-4 xl:text-base"
          >
            REGISTER
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-4 border-b border-gray-500 pb-4 lg:w-1/2">
        <div className="flex flex-col items-center justify-center bg-[#dad8d8] h-60">
          <Card>
            <CardHeader className="flex flex-col">
              <p className=" text-black/60 font-bold mt-2">FITNESS</p>
              <h2 className="text-center text-3xl font-semibold">
                Training Day
              </h2>
            </CardHeader>
            <CardBody className="text-center">
              <p className="text-lg">Host: TBD</p>
              <span className="text-sm">Pro Athlete</span>
            </CardBody>
          </Card>
        </div>

        <div className="flex flex-col items-center justify-center">
          <Card>
            <h4 className="text-center font-medium">EVENT INFO</h4>
            <CardBody className="flex flex-col items-left">
              <p>
                <span className="font-bold">Date</span>: TBD
              </p>
              <p>
                <span className="font-bold">Description</span>: A training
                bootcamp to push our physical ability to the next level
              </p>
              <p>
                <span className="font-bold">Time</span>: TBD
              </p>
              <p>
                <span className="font-bold">Location</span>: TBD
              </p>
            </CardBody>
          </Card>
          <Link
            href={"/"}
            className="bg-[#2A6041]  text-white px-7 py-2.5 text-sm font-bold rounded-xl xl:px-14 xl:py-4 xl:text-base"
          >
            REGISTER
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Eventcards;
