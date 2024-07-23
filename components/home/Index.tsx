import React from "react";
import Hero from "./Hero";
import About from "./About";
import Games from "./Games";
import Welcome from "./Welcome";
import Updates from "./Updates";
import Tournament from "./Tournament";

const Index = () => {
  return (
    <div>
      <Hero />
      <div className="flex flex-col gap-28 p-8">
        <Tournament />{" "}
      </div>
    </div>
  );
};

export default Index;
