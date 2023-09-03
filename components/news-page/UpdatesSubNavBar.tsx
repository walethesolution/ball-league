import React from "react";
import SubNavBarr from "../common/SubNavBarr";

interface UpdatesSubNavBarProps {
  setActiveTab: (tab: string) => void;
}

const UpdatesSubNavBar: React.FC<UpdatesSubNavBarProps> = ({
  setActiveTab,
}) => {
  const items = [
    { label: "News", tab: "news" },
    { label: "Blog", tab: "blog" },
  ];

  return (
    <SubNavBarr title="UPDATES" items={items} setActiveTab={setActiveTab} />
  );
};

export default UpdatesSubNavBar;
