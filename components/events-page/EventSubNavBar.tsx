import SubNavBarr from "../common/SubNavBarr";

interface SubNavBarProps {
  setActiveTab: (tab: string) => void;
  activeTab: string;
}

const EventSubNavBar: React.FC<SubNavBarProps> = ({
  setActiveTab,
  activeTab,
}) => {
  const items = [
    { label: "Upcoming", tab: "upcoming" },
    { label: "Past", tab: "past" },
  ];

  return (
    <div className="fixed w-full top-20 z-[9998]">
      <SubNavBarr
        title="EVENTS"
        items={items}
        setActiveTab={setActiveTab}
        activeTab={activeTab}
      />
    </div>
  );
};

export default EventSubNavBar;
