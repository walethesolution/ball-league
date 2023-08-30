import Image from "next/image";
import Wale from "../../public/assets/images/olawale.svg";
import Alex from "../../public/assets/images/alex.svg";
import Dariel from "../../public/assets/images/dariel.svg";

const Images = () => {
  return (
    <div>
      <div className="flex flex-col gap-14 lg:flex lg:flex-row xl:gap-24">
        <div className="flex flex-col justify-center items-center gap-1 font-medium">
          <Image
            src={Wale}
            alt="Photo of Olawale"
            className="lg:w-[265px] lg:h-[265px]"
          />
          <p className="text-sm xl:text-2xl">OLAWALE AYEJUYONE</p>
          <p className="text-[10px] xl:text-sm">POINT GUARD</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-1 font-medium">
          <Image
            src={Dariel}
            alt="Photo of Dariel"
            className="lg:w-[265px] lg:h-[265px]"
          />
          <p className="text-sm xl:text-2xl">DARIEL SORIANO</p>
          <p className="text-[10px] xl:text-sm">SHOOTING GUARD</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-1 font-medium">
          <Image
            src={Alex}
            alt="Photo of Alex"
            className="lg:w-[265px] lg:h-[265px]"
          />
          <p className="text-sm xl:text-2xl">ALEXANDER ODITA</p>
          <p className="text-[10px] xl:text-sm">SMALL FORWARD</p>
        </div>
      </div>
    </div>
  );
};

export default Images;
