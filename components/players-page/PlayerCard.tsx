import Image from "next/image";
import Link from "next/link";
import Wale from "../../public/assets/images/olawale.svg";
const PlayerCard = () => {
  return (
    <div className="flex justify-center">
      <div className="bg-[#D9D9D9] w-[400px] h-[64px] flex items-center gap-24 px-4">
        <div className="flex gap-2">
          <Image
            src={Wale}
            alt="Photo of Olawale"
            className="w-[40px] h-[40px]"
          />
          <p className="text-sm">
            Olawale <br />
            Ayejuone
          </p>
        </div>
        <p className="text-sm">PG</p>
        <Link
          href={""}
          className=" bg-[#2A6041] w-[110px] h-[30px] text-white text-center py-1.5 text-[10px] rounded-xl"
        >
          View More
        </Link>
      </div>
    </div>
  );
};

export default PlayerCard;
