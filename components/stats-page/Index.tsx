"use client";

import React from "react";
import { useState } from "react";
import SubNavBar from "./SubNavBar";
import AllStats from "./AllStats";
import Points from "./Points";
import Assists from "./Assists";
import Rebounds from "./Rebounds";

const Index = () => {
  const [activeTab, setActiveTab] = useState("allStats");

  return (
    <div className="flex flex-col pt-20 lg:pt-22">
      <SubNavBar setActiveTab={setActiveTab} activeTab={activeTab} />
      <div className="flex flex-col items-center justify-center">
        {activeTab === "allStats" && <AllStats />}
        {activeTab === "points" && <Points />}
        {activeTab === "assists" && <Assists />}
        {activeTab === "rebounds" && <Rebounds />}
      </div>
    </div>
  );
};

export default Index;
