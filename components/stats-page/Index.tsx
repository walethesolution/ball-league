"use client";

import React from "react";
import { useState } from "react";
import SubNavBar from "./SubNavBar";
import UnderConstruction from "../common/UnderConstruction";
import AllStats from "./AllStats";
import Images from "../home/Images";

const Index = () => {
  const [activeTab, setActiveTab] = useState("allStats");

  return (
    <div className="flex flex-col pt-20 lg:pt-22">
      <SubNavBar setActiveTab={setActiveTab} activeTab={activeTab} />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <Images />
      </div>
    </div>
  );
};

export default Index;
