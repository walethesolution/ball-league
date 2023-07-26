import Image from "next/image";
import Ellipse from "../../public/assets/icons/ellipse.svg";

const GamesDiv = () => {
  return (
    <div>
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
    </div>
  );
};

export default GamesDiv;
