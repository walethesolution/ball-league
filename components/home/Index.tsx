import React from "react";
import Hero from "./Hero";

import Tournament from "../tournament/Tournament";

const Index = () => {
  return (
    <div>
      <Hero />
      <div className="flex flex-col gap-28 p-8">
        <Tournament />
      </div>
    </div>
  );
};

export default Index;
