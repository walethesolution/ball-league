import SubNavBarr from "../common/SubNavBarr";

interface SubNavBarProps {
  setActiveTab: (tab: string) => void;
}

const SubNavBar: React.FC<SubNavBarProps> = ({ setActiveTab }) => {
  const items = [
    { label: "Points", tab: "points" },
    { label: "Assists", tab: "assists" },
    { label: "Rebounds", tab: "rebounds" },
  ];

  return <SubNavBarr title="STATS" items={items} setActiveTab={setActiveTab} />;
};

export default SubNavBar;
