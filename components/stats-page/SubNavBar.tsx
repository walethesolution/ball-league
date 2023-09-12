import SubNavBarr from "../common/SubNavBarr";

interface SubNavBarProps {
  setActiveTab: (tab: string) => void;
  activeTab: string;
}

const SubNavBar: React.FC<SubNavBarProps> = ({ setActiveTab, activeTab }) => {
  const items = [
    { label: "All Stats", tab: "allStats" },
    { label: "Points", tab: "points" },
    { label: "Assists", tab: "assists" },
    { label: "Rebounds", tab: "rebounds" },
  ];

  return (
    <SubNavBarr
      title="STATS"
      items={items}
      setActiveTab={setActiveTab}
      activeTab={activeTab}
    />
  );
};

export default SubNavBar;
