const PlayerSubNavBar = () => {
  return (
    <div className="h-[64px] bg-black flex flex-row items-center gap-4 px-6">
      <div className="text-[#FFFFFA] border-r-2 pr-3">
        <p className="text-lg">PLAYERS</p>
      </div>
      <div className="text-[#FFFFFA]">
        <p className="text-sm">All players</p>
      </div>
      <div className="text-[#FFFFFA]">
        <p className="text-sm">OGs</p>
      </div>
    </div>
  );
};

export default PlayerSubNavBar;
