"use client";

import Link from "next/link";
import Weather from "./Weather";
import GamesDiv from "./GamesDiv";
import "../../styles/animations.css";
import useFadeInScroll from "@/styles/useFadeInScroll";

const Games = () => {
  const { ref, isVisible } = useFadeInScroll();

  const currentDate = new Date();

  // Calculating days until next sunday
  const daysUntilNextSunday = 7 - currentDate.getDay();
  const nextSunday = new Date(
    currentDate.getTime() + daysUntilNextSunday * 24 * 60 * 60 * 1000
  );
  // Define options for formatting the date
  const formattedNextSunday = nextSunday.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div
      ref={ref}
      className={`flex flex-col justify-center items-center ${
        isVisible ? "fade-in" : ""
      }`}
    >
      {/*First section*/}
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold border-black md:text-3xl xl:text-5xl">
          UPCOMING GAME
        </h1>
        <h3 className="text-center text-sm md:text-base xl:text-xl">
          SEASON 1
        </h3>
      </div>

      {/* Second section */}
      <div className="flex flex-col gap-4 items-center justify-center mt-10 lg:flex lg:flex-row  lg:gap-16">
        <div className="flex flex-col items-center gap-6 my-4">
          <p className="text-center text-sm font-normal md:text-base xl:text-xl">
            {formattedNextSunday}
          </p>
          <GamesDiv teams={["Team A", "Team B"]} time={"11:00 AM"} />
          <div className="xl:mt-4 flex flex-row gap-4 w-full text-center">
            <div className="flex-grow">
              <Link
                href={"/games"}
                className="w-full bg-[#2A6041] text-white px-7 py-2.5 text-sm text-center font-bold rounded-xl xl:px-14 xl:py-4 xl:text-base"
              >
                VIEW MORE GAMES
              </Link>
            </div>
            <div className="flex-grow">
              <Link
                href={""}
                className="w-full bg-[#3708e4] text-white px-7 py-2.5 text-sm text-center font-bold rounded-xl xl:px-14 xl:py-4 xl:text-base"
              >
                REGISTER
              </Link>
            </div>
          </div>
        </div>
        <Weather />
      </div>
    </div>
  );
};

export default Games;
