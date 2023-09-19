"use client";

import PlayerSubNavBar from "./PlayerSubNavBar";
import PlayerTable from "./PlayerTable";
import Roster from "./Roster";
import { useState } from "react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("ap");
  return (
    <div className="pt-20 lg:pt-22">
      <PlayerSubNavBar setActiveTab={setActiveTab} activeTab={activeTab} />
      <div className="flex flex-col gap-4 pt-20 lg:pt-22">
        <Roster />
        <PlayerTable />
      </div>
    </div>
  );
};

export default Index;
