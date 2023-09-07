"use client";

import GamesSubNavBar from "./GamesSubNavBar";
import { useState } from "react";
import UnplayedGames from "./UnplayedGames";
import PlayedGames from "./PlayedGames";

const Index = () => {
  const [activeTab, setActiveTab] = useState("ug");

  return (
    <div>
      <GamesSubNavBar setActiveTab={setActiveTab} activeTab={activeTab} />
      <div className="flex flex-col justify-center items-center gap-8 relative">
        {activeTab === "ug" && (
          <div className="text-white bg-white w-1/2 h-1/2"></div>
        ) ? (
          <UnplayedGames />
        ) : null}
        {activeTab === "pg" ? <PlayedGames /> : null}
      </div>
    </div>
  );
};

export default Index;
