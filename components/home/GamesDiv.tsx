import Image from "next/image";
import Ellipse from "../../public/assets/icons/ellipse.svg";

interface GamesDivProps {
  teams: string[];
  time?: string;
  scores?: number[];
}

const GamesDiv: React.FC<GamesDivProps> = ({ teams, time, scores }) => {
  return (
    <div>
      <div className="w-full h-[177px] bg-[#EBDCCB] flex flex-row items-center justify-center gap-9 font-semibold text-sm px-2 md:w-[489px] md:h-[220px] md:text-base md:gap-14 xl:w-[687px] xl:h-[269px] xl:text-xl xl:gap-20 rounded-lg">
        <div className="flex gap-4 justify-center items-center">
          <div className="flex flex-col items-center gap-2">
            <Image
              src={Ellipse}
              alt="svg icon"
              className="w-[70px] h-[70px] md:w-[100px] md:h-[100px] xl:w-[150px] xl:h-[150px]"
            />
            <p>{teams[0]}</p>
          </div>
          <p className="text-xl xl:text-5xl">{scores && scores[0]}</p>
        </div>
        <div className="items-center">
          <p>{time ? time : <p className="font-medium">VS</p>}</p>
        </div>
        <div className="flex gap-4 justify-center items-center">
          <p className="text-xl xl:text-5xl">{scores && scores[1]}</p>
          <div className="flex flex-col items-center gap-2">
            <Image
              src={Ellipse}
              alt="svg icon"
              className="w-[70px] h-[70px] md:w-[100px] md:h-[100px] xl:w-[150px] xl:h-[150px]"
            />
            <p>{teams[1]}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamesDiv;
