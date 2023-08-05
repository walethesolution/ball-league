const Roster = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-4 lg:mt-8 gap-4">
      <h2 className="text-lg font-bold border-b-2 border-black md:text-xl xl:text-2xl">
        LEAGUE ROSTER
      </h2>
      <div className="bg-[#D9D9D9] w-[369px] h-[49px] flex items-center px-6">
        <ul className="flex gap-32 font-medium">
          <li>Players</li>
          <li>Pos</li>
        </ul>
      </div>
    </div>
  );
};

export default Roster;
