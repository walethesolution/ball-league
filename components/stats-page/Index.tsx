"use client";

import React from "react";
import { useState } from "react";
import SubNavBar from "./SubNavBar";
import UnderConstruction from "../common/UnderConstruction";

const Index = () => {
  const [activeTab, setActiveTab] = useState("stats");

  return (
    <div className="flex flex-col">
      <SubNavBar setActiveTab={setActiveTab} />
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
