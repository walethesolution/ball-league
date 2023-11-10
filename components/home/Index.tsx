import React from "react";
import Hero from "./Hero";
import About from "./About";
import Games from "./Games";
import Welcome from "./Welcome";
import Updates from "./Updates";
import Highlights from "../highlights/Highlights";

const Index = () => {
  return (
    <div className="pt-20 lg:pt-22">
      <Hero />
      <div className="flex flex-col gap-28">
        <Highlights />
        <About />
        <Games />
        <Welcome />
        <Updates />
      </div>
    </div>
  );
};

export default Index;
