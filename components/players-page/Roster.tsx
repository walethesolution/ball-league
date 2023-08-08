const Roster = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-4 lg:mt-8 gap-4">
      <h2 className="text-lg font-bold border-b-2 border-black md:text-xl xl:text-2xl">
        LEAGUE ROSTER
      </h2>
      <div className="bg-[#D9D9D9] w-[400px] h-[49px] flex items-center px-8 md:w-[550px] lg:w-[900px]">
        <ul className="flex gap-28 font-medium md:gap-32">
          <li>Players</li>
          <li>Pos</li>
          <li className="hidden lg:block">Height</li>
          <li className="hidden lg:block">Weight</li>
        </ul>
      </div>
    </div>
  );
};

export default Roster;
