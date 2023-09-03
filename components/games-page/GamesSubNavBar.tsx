import React from "react";
import SubNavBarr from "../common/SubNavBarr";

interface GamesSubNavBarProps {
  setActiveTab: (tab: string) => void;
}

const GamesSubNavBar: React.FC<GamesSubNavBarProps> = ({ setActiveTab }) => {
  const items = [
    { label: "Unplayed games", tab: "ug" },
    { label: "Played games", tab: "pg" },
  ];

  return <SubNavBarr title="GAMES" items={items} setActiveTab={setActiveTab} />;
};

export default GamesSubNavBar;
