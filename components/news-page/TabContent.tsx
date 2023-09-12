"use client";
import { useState } from "react";
import NewsPage from "./NewsPage";
import BlogPage from "./BlogPage";
import UpdatesSubNavBar from "./UpdatesSubNavBar";

const TabContent = () => {
  const [activeTab, setActiveTab] = useState("news");

  return (
    <div>
      <UpdatesSubNavBar setActiveTab={setActiveTab} activeTab={activeTab} />
      {activeTab === "news" ? <NewsPage /> : null}
      {activeTab === "blog" ? <BlogPage /> : null}
    </div>
  );
};

export default TabContent;
