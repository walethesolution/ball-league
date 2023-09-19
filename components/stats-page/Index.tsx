"use client";

import React from "react";
import { useState } from "react";
import SubNavBar from "./SubNavBar";
import UnderConstruction from "../common/UnderConstruction";

const Index = () => {
  const [activeTab, setActiveTab] = useState("allStats");

  return (
    <div className="flex flex-col pt-20 lg:pt-22">
      <SubNavBar setActiveTab={setActiveTab} activeTab={activeTab} />
      <div className="flex flex-col justify-center items-center gap-4 flex-grow ">
        <UnderConstruction />
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
