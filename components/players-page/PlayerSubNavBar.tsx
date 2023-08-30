import SubNavBarr from "../common/SubNavBarr";

interface PlayerSubNavBarProps {
  setActiveTab: (tab: string) => void;
}

const PlayerSubNavBar: React.FC<PlayerSubNavBarProps> = ({ setActiveTab }) => {
  const items = [
    { label: "All players", tab: "ap" },
    { label: "OGs", tab: "og" },
  ];

  return (
    <SubNavBarr title="PLAYERS" items={items} setActiveTab={setActiveTab} />
  );
};

export default PlayerSubNavBar;
