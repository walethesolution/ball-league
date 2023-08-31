"use client";

import GamesDiv from "../home/GamesDiv";
import GameGrounds from "./GameGrounds";
import GamesSubNavBar from "./GamesSubNavBar";
import { useState } from "react";
import WeeklyCalender from "./WeeklyCalender";

const Index = () => {
  const [activeTab, setActiveTab] = useState("ug");

  return (
    <div>
      <GamesSubNavBar setActiveTab={setActiveTab} />
      <div className="flex flex-col justify-center items-center gap-8">
        <WeeklyCalender />
        <GamesDiv />
        <GamesDiv />
        <GameGrounds />
      </div>
    </div>
  );
};

export default Index;
