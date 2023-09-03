import Image from "next/image";
import Link from "next/link";
import { Players } from "./playerdata";

const PlayerCard: React.FC<{ player: Players }> = ({ player }) => {
  const { name, position, imageSrc, height, weight } = player;

  return (
    <div className="flex justify-center">
      <div className="bg-[#D9D9D9] w-[400px] h-[64px] flex items-center gap-24 px-4 md:w-[550px] md:h-[75px] lg:w-[900px] lg:h-[90px] xl:w-[1000px] xl:h-[102px]">
        <div className="flex gap-2 xl:gap-4">
          <Image
            src={imageSrc}
            alt="Photo of Olawale"
            className="w-[40px] h-[40px]"
          />
          <div className="w-[70px]">
            <p className="text-sm xl:text-base">{name}</p>
          </div>
        </div>
        <p className="text-sm xl:text-base">{position}</p>
        <div className="flex gap-24 lg:ml-16">
          <p className="text-sm hidden lg:block xl:text-base">{height}</p>
          <p className="text-sm hidden lg:block lg:ml-10 xl:text-base">
            {weight}
          </p>
          <Link
            href={""}
            className="text-center text-sm md:ml-16 xl:ml-28 xl:text-base"
          >
            View More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
