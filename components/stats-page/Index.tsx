"use client";

import React from "react";
import { useState } from "react";
import SubNavBar from "./SubNavBar";

const Index = () => {
  const [activeTab, setActiveTab] = useState("stats");

  return (
    <div className="flex flex-col min-h-screen">
      <SubNavBar setActiveTab={setActiveTab} />
      <div className="flex flex-col justify-center items-center gap-4 flex-grow ">
        <div>
          <h1 className="font-bold text-2xl md:text-3xl text-center lg:text-5xl">
            THIS PAGE IS CURRENTLY UNDER CONSTRUCTION
          </h1>
        </div>
        <div>
          <p className="text-center text-base md:text-lg lg:text-xl">
            Bear with us!!!! <br /> we are working on hiring a Statistician
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
