import React from "react";
import Points from "./Points";
import Assists from "./Assists";
import Rebounds from "./Rebounds";

const AllStats = () => {
  return (
    <div className="flex flex-col gap-4 md:flex-row">
      <Points />
      <Assists />
      <Rebounds />
    </div>
  );
};

export default AllStats;
