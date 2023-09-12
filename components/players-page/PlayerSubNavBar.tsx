import SubNavBarr from "../common/SubNavBarr";

interface PlayerSubNavBarProps {
  setActiveTab: (tab: string) => void;
  activeTab: string;
}

const PlayerSubNavBar: React.FC<PlayerSubNavBarProps> = ({
  setActiveTab,
  activeTab,
}) => {
  const items = [
    { label: "All players", tab: "ap" },
    { label: "OGs", tab: "og" },
  ];

  return (
    <SubNavBarr
      title="PLAYERS"
      items={items}
      setActiveTab={setActiveTab}
      activeTab={activeTab}
    />
  );
};

export default PlayerSubNavBar;
