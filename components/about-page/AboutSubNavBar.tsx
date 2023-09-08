import SubNavBarr from "../common/SubNavBarr";

interface AboutSubNavBarProps {
  setActiveTab: (tab: string) => void;
  activeTab: string;
}

const AboutSubNavBar: React.FC<AboutSubNavBarProps> = ({
  setActiveTab,
  activeTab,
}) => {
  const items = [
    { label: "Our mission", tab: "mission" },
    { label: "History", tab: "history" },
  ];
  return (
    <SubNavBarr
      title="ABOUT US"
      items={items}
      setActiveTab={setActiveTab}
      activeTab={activeTab}
    />
  );
};

export default AboutSubNavBar;
