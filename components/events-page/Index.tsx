"use client";
import { useState } from "react";
import EventSubNavBar from "./EventSubNavBar";
import Eventcards from "./Eventcards";

const Index = () => {
  const [activeTab, setActiveTab] = useState("upcoming");
  return (
    <div className="pt-20 lg:pt-22">
      <EventSubNavBar activeTab={activeTab} setActiveTab={setActiveTab} />
      <Eventcards />
    </div>
  );
};

export default Index;
