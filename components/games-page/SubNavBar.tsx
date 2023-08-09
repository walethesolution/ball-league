const SubNavBar = () => {
  return (
    <div className="h-[64px] bg-black flex flex-row items-center gap-4 px-6">
      <div className="text-[#FFFFFA] border-r-2 pr-3">
        <p className="text-lg">GAMES</p>
      </div>
      <div className="text-[#FFFFFA]">
        <p className="text-sm">Upcoming games</p>
      </div>
      <div className="text-[#FFFFFA]">
        <p className="text-sm">Played games</p>
      </div>
    </div>
  );
};

export default SubNavBar;
