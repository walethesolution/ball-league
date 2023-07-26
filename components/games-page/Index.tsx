"use client";

import SubNavBar from "./SubNavBar";
import Calender from "./WeeklyCalender";
import GamesDiv from "../home/GamesDiv";
import GameGrounds from "./GameGrounds";

const Index = () => {
  return (
    <div>
      <SubNavBar />
      <div className="flex flex-col justify-center items-center gap-8">
        <Calender year={2023} month={6} />
        <GamesDiv />
        <GamesDiv />
        <GameGrounds />
      </div>
    </div>
  );
};

export default Index;
