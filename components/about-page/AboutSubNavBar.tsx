import SubNavBarr from "../common/SubNavBarr";

interface AboutSubNavBarProps {
  setActiveTab: (tab: string) => void;
}

const AboutSubNavBar: React.FC<AboutSubNavBarProps> = ({ setActiveTab }) => {
  const items = [
    { label: "Our mission", tab: "mission" },
    { label: "History", tab: "history" },
  ];
  return (
    <SubNavBarr title="ABOUT US" items={items} setActiveTab={setActiveTab} />
  );
};

export default AboutSubNavBar;
