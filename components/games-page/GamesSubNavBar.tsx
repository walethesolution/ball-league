import React from "react";
import SubNavBarr from "../common/SubNavBarr";

interface GamesSubNavBarProps {
  setActiveTab: (tab: string) => void;
  activeTab: string;
}

const GamesSubNavBar: React.FC<GamesSubNavBarProps> = ({
  setActiveTab,
  activeTab,
}) => {
  const items = [
    { label: "Upcoming games", tab: "ug" },
    { label: "Played games", tab: "pg" },
  ];

  return (
    <div className="fixed w-full top-20 z-[9998]">
      <SubNavBarr
        title="GAMES"
        items={items}
        setActiveTab={setActiveTab}
        activeTab={activeTab}
      />
    </div>
  );
};

export default GamesSubNavBar;
