"use client";

import Why from "./Why";
import AboutSubNavBar from "./AboutSubNavBar";
import { useState } from "react";
import GameGrounds from "../games-page/GameGrounds";

const Index = () => {
  const [activeTab, setActiveTab] = useState("mission");

  return (
    <div>
      <AboutSubNavBar setActiveTab={setActiveTab} activeTab={activeTab} />
      <Why />
      <GameGrounds />
    </div>
  );
};

export default Index;
