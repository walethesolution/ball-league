"use client";

import Why from "./Why";
import Members from "./Members";
import AboutSubNavBar from "./AboutSubNavBar";
import { useState } from "react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("mission");

  return (
    <div>
      <AboutSubNavBar setActiveTab={setActiveTab} />
      <Why />
      <Members />
    </div>
  );
};

export default Index;
