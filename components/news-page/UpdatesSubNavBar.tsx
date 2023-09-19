import React from "react";
import SubNavBarr from "../common/SubNavBarr";

interface UpdatesSubNavBarProps {
  setActiveTab: (tab: string) => void;
  activeTab: string;
}

const UpdatesSubNavBar: React.FC<UpdatesSubNavBarProps> = ({
  setActiveTab,
  activeTab,
}) => {
  const items = [
    { label: "News", tab: "news" },
    { label: "Blog", tab: "blog" },
  ];

  return (
    <div className="fixed w-full top-20 z-[9998]">
      <SubNavBarr
        title="UPDATES"
        items={items}
        setActiveTab={setActiveTab}
        activeTab={activeTab}
      />
    </div>
  );
};

export default UpdatesSubNavBar;
