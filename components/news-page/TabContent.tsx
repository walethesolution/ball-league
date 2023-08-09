"use client";
import { useState } from "react";
import SubNavBar from "./SubNavBar";
import NewsPage from "./NewsPage";
import BlogPage from "./BlogPage";

const TabContent = () => {
  const [activeTab, setActiveTab] = useState("news");

  return (
    <div>
      <SubNavBar setActiveTab={setActiveTab} />
      {activeTab === "news" ? <NewsPage /> : null}
      {activeTab === "blog" ? <BlogPage /> : null}
    </div>
  );
};

export default TabContent;
