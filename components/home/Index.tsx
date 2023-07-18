import React from "react";
import Hero from "./Hero";
import About from "./About";
import Games from "./Games";
import Welcome from "./Welcome";
import Updates from "./Updates";

const Index = () => {
  return (
    <>
      <Hero />
      <div className="flex flex-col gap-28">
        <About />
        <Games />
        <Welcome />
      </div>
      {/* <Updates />  */}
    </>
  );
};

export default Index;
