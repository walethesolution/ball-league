"use client";

// import Calender from "./WeeklyCalender";
import GamesDiv from "../home/GamesDiv";
import GameGrounds from "./GameGrounds";
import GamesSubNavBar from "./GamesSubNavBar";
import { useState } from "react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("ug");

  return (
    <div>
      <GamesSubNavBar setActiveTab={setActiveTab} />
      <div className="flex flex-col justify-center items-center gap-8">
        {/* <Calender year={2023} month={6} /> */}
        <GamesDiv />
        <GamesDiv />
        <GameGrounds />
      </div>
    </div>
  );
};

export default Index;
