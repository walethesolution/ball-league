interface SubNavBarProps {
  setActiveTab: (tab: string) => void;
}

const SubNavBar: React.FC<SubNavBarProps> = ({ setActiveTab }) => {
  return (
    <div className="h-[64px] bg-black flex flex-row items-center gap-4 px-6">
      <div
        className="text-[#FFFFFA] border-r-2 pr-3"
        onClick={() => setActiveTab("news")}
      >
        <p className="text-lg">UPDATES</p>
      </div>
      <div className="text-[#FFFFFA]" onClick={() => setActiveTab("news")}>
        <p className="text-sm">News</p>
      </div>
      <div className="text-[#FFFFFA]" onClick={() => setActiveTab("blog")}>
        <p className="text-sm">Blog</p>
      </div>
    </div>
  );
};

export default SubNavBar;
