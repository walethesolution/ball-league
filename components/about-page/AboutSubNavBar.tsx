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
    <div className="fixed w-full top-20 z-[9998]">
      <SubNavBarr
        title="ABOUT US"
        items={items}
        setActiveTab={setActiveTab}
        activeTab={activeTab}
      />
    </div>
  );
};

export default AboutSubNavBar;
