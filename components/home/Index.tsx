import React from "react";
import Hero from "./Hero";
import Tournament from "../tournament/Tournament";
import VideoOfTheWeek from "./VideoOfTheWeek";
import Sponsors from "./Sponsors";

const Index = () => {
  return (
    <div>
      <Hero />
      <div className="flex flex-col gap-28 p-8">
        <VideoOfTheWeek />
        <Tournament />
      </div>
    </div>
  );
};

export default Index;
