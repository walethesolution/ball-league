"use client";
import { useState } from "react";
import NewsPage from "./NewsPage";
import BlogPage from "./BlogPage";
import UpdatesSubNavBar from "./UpdatesSubNavBar";

const TabContent = () => {
  const [activeTab, setActiveTab] = useState("news");

  return (
    <>
      <UpdatesSubNavBar setActiveTab={setActiveTab} activeTab={activeTab} />
      <div className="pt-20 lg:pt-22">
      {activeTab === "news" ? <NewsPage /> : <BlogPage />}
      </div>
    </>
  );
};

export default TabContent;
