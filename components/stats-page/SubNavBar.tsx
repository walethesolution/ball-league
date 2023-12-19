import SubNavBarr from "../common/SubNavBarr";

interface SubNavBarProps {
  setActiveTab: (tab: string) => void;
  activeTab: string;
}

const SubNavBar: React.FC<SubNavBarProps> = ({ setActiveTab, activeTab }) => {
  const items = [
    { label: "Overall", tab: "allStats" },
    { label: "Points", tab: "points" },
    { label: "Assists", tab: "assists" },
    { label: "Rebounds", tab: "rebounds" },
  ];

  return (
    <div className="fixed w-full top-20 z-[9998]">
      <SubNavBarr
        title="STATS"
        items={items}
        setActiveTab={setActiveTab}
        activeTab={activeTab}
      />
    </div>
  );
};

export default SubNavBar;
