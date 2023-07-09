import Image from "next/image";
import HomeCourt from "../../public/assets/images/home-court.svg";
import ThreeGuys from "../../public/assets/images/tim-fua-ima.svg";
import Shooter from "../../public/assets/images/steve-shooter.svg";

const Hero = () => {
  return (
    <>
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
      <div className="relative">
        <Image
          src={ThreeGuys}
          alt="Three guys on court"
          className="w-full h-full object-cover"
        />
        <div className="absolute flex items-center justify-center inset-0 mt-[3rem]">
          <p className="text-white font-bold text-2xl md:text-3xl">
            EMBRACE THE SPIRIT OF COMPETITION <br className="md:hidden" /> AND
            CAMARADARIE
          </p>
        </div>
      </div>
      <div className="relative">
        <Image
          src={Shooter}
          alt="Basketball shooting form"
          className="w-full h-full object-cover"
        />
        <div className="absolute flex justify-center items-center inset-0 mt-[3rem]">
          <p className="text-white font-bold text-2xl md:text-3xl">
            THE SHOOTER&apos;S FORM; <br className="md:hidden" /> TAKE YOUR GAME
            TO THE NEXT LEVEL
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
