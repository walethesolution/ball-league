"use client";

import Why from "./Why";
import AboutSubNavBar from "./AboutSubNavBar";
import { useState } from "react";
import GameGrounds from "../games-page/GameGrounds";
import Members from "./Members";

const Index = () => {
  const [activeTab, setActiveTab] = useState("mission");

  return (
    <div className="pt-20 lg:pt-22">
      <AboutSubNavBar setActiveTab={setActiveTab} activeTab={activeTab} />
      <div className="pt-20 lg:pt-22">
        <Why />
        <Members />
      </div>
    </div>
  );
};

export default Index;
