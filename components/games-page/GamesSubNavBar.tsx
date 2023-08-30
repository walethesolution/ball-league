// const SubNavBar = () => {
//   return (
//     <div className="h-[64px] bg-black flex flex-row items-center gap-4 px-6">
//       <div className="text-[#FFFFFA] border-r-2 pr-3">
//         <p className="text-lg">GAMES</p>
//       </div>
//       <div className="text-[#FFFFFA]">
//         <p className="text-sm">Upcoming games</p>
//       </div>
//       <div className="text-[#FFFFFA]">
//         <p className="text-sm">Played games</p>
//       </div>
//     </div>
//   );
// };

// export default SubNavBar;
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
