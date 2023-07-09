import Image from "next/image";
import HomeCourt from "../../public/assets/images/home-court.svg";

const Hero = () => {
  return (
    <div className="relative">
      <Image
        src={HomeCourt}
        alt="this is home court"
        className="w-full h-full object-cover"
      />
      <div className="absolute flex justify-center items-center inset-0 mt-[3rem]">
        <p className="text-white font-bold text-2xl md:text-3xl">
          DISCOVER THE <br className="md:hidden" /> COURT OF LEGENDS
        </p>
      </div>
    </div>
  );
};

export default Hero;
