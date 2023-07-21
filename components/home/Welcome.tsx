import Image from "next/image";
import Wale from "../../public/assets/images/olawale.svg";
import Alex from "../../public/assets/images/alex.svg";
import Dariel from "../../public/assets/images/dariel.svg";

const Welcome: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10 lg:gap-16 xl:gap-24">
      <div className="flex flex-col gap-2">
        <p className="text-base text-center lg:text-xl">Ball & Life</p>
        <h1 className="text-2xl font-bold border-b-2 border-black md:text-3xl xl:text-5xl">
          WELCOME TO OUR LEAGUE
        </h1>
      </div>
      {/* The images section */}
      <div className="flex flex-col gap-14 lg:flex lg:flex-row">
        <div className="flex flex-col justify-center items-center gap-1 font-medium">
          <Image
            src={Wale}
            alt="Photo of Olawale"
            className="lg:w-[265px] lg:h-[265px] xl:w-[395px] xl:h-[384px]"
          />
          <p className="text-sm xl:text-2xl">OLAWALE AYEJUYONE</p>
          <p className="text-[10px] xl:text-sm">POINT GUARD</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-1 font-medium">
          <Image
            src={Dariel}
            alt="Photo of Dariel"
            className="lg:w-[265px] lg:h-[265px] xl:w-[395px] xl:h-[384px]"
          />
          <p className="text-sm xl:text-2xl">DARIEL SORIANO</p>
          <p className="text-[10px] xl:text-sm">SHOOTING GUARD</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-1 font-medium">
          <Image
            src={Alex}
            alt="Photo of Alex"
            className="lg:w-[265px] lg:h-[265px] xl:w-[395px] xl:h-[384px]"
          />
          <p className="text-sm xl:text-2xl">ALEXANDER ODITA</p>
          <p className="text-[10px] xl:text-sm">SMALL FORWARD</p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
