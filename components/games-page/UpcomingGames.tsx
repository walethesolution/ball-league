import Link from "next/link";
import GamesDiv from "../home/GamesDiv";
import WeeklyCalender from "./WeeklyCalender";
import Court from "./Court";

const UpcomingGames = () => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="flex flex-col gap-4 mx-auto">
        <WeeklyCalender />
        <GamesDiv teams={["Team A", "Team B"]} time={"11:00 AM"} />
        <div className="mt-4 flex flex-row gap-4 w-full text-center xl:flex xl:justify-center">
          <Link
            href={""}
            className="w-full bg-[#3708e4] text-white px-7 py-2.5 text-sm text-center font-bold rounded-xl xl:px-14 xl:py-4 xl:text-base xl:w-1/2 "
          >
            REGISTER
          </Link>
        </div>
      </div>
      <div className="mt-14 lg:mt-20">
        <Court />
      </div>
    </div>
  );
};

export default UpcomingGames;
