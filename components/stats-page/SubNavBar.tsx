interface SubNavBarProps {
  setActiveTab: (tab: string) => void;
}

const SubNavBar: React.FC<SubNavBarProps> = ({ setActiveTab }) => {
  return (
    <div className="h-[64px] bg-black flex flex-row items-center gap-4 px-6">
      <div
        className="text-[#FFFFFA] border-r-2 pr-3"
        onClick={() => setActiveTab("stats")}
      >
        <p className="text-lg">STATS</p>
      </div>
      <div className="text-[#FFFFFA]" onClick={() => setActiveTab("points")}>
        <p className="text-sm">Points</p>
      </div>
      <div className="text-[#FFFFFA]" onClick={() => setActiveTab("assists")}>
        <p className="text-sm">Assists</p>
      </div>
      <div className="text-[#FFFFFA]" onClick={() => setActiveTab("rebounds")}>
        <p className="text-sm">Rebounds</p>
      </div>
    </div>
  );
};

export default SubNavBar;
