"use client";

import PlayerSubNavBar from "./PlayerSubNavBar";
import PlayerTable from "./PlayerTable";
import Roster from "./Roster";
import { useState } from "react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("ap");
  return (
    <div>
      <PlayerSubNavBar setActiveTab={setActiveTab} />
      <div className="flex flex-col gap-4">
        <Roster />
        <PlayerTable />
      </div>
    </div>
  );
};

export default Index;
