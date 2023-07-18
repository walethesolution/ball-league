import Image from "next/image";
import Link from "next/link";
import Ellipse from "../../public/assets/icons/ellipse.svg";
import Weather from "./Weather";

const Games = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      {/*First section*/}
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold border-b-2 border-black md:text-3xl xl:text-5xl">
          UPCOMING GAME
        </h1>
        <h3 className="text-center text-sm md:text-base xl:text-xl">
          SEASON 1
        </h3>
      </div>

      {/* Second section */}
      <div className="flex flex-col gap-4 items-center justify-center lg:flex lg:flex-row  lg:gap-16">
        <div className="flex flex-col items-center gap-6 my-4">
          <p className="text-center text-sm font-normal md:text-base xl:text-xl">
            July 16, 2023
          </p>
          <div className="w-[347px] h-[177px] bg-[#EBDCCB] flex flex-row items-center justify-center gap-9 font-semibold text-sm md:w-[489px] md:h-[220px] md:text-base md:gap-14 xl:w-[687px] xl:h-[269px] xl:text-xl xl:gap-20">
            <div className="flex flex-col items-center gap-2">
              <Image
                src={Ellipse}
                alt="svg icon"
                className="w-[70px] h-[70px] md:w-[100px] md:h-[100px] xl:w-[150px] xl:h-[150px]"
              />
              <p>TEAM A</p>
            </div>
            <div className="items-center">
              <p>11:00 AM</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Image
                src={Ellipse}
                alt="svg icon"
                className="w-[70px] h-[70px] md:w-[100px] md:h-[100px] xl:w-[150px] xl:h-[150px]"
              />
              <p>TEAM B</p>
            </div>
          </div>
          <div className="xl:mt-4">
            <Link
              href={""}
              className="bg-[#2A6041] text-white px-7 py-2.5 text-sm text-center font-bold rounded-xl xl:px-14 xl:py-4 xl:text-base"
            >
              VIEW MORE GAMES
            </Link>
          </div>
        </div>
        <Weather />
      </div>
    </div>
  );
};

export default Games;
