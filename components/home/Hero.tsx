import Image from "next/image";
import HomeCourt from "../../public/assets/images/home-court.svg";

const Hero = () => {
  return (
    <div className="">
      <Image
        src={HomeCourt}
        alt="this is home court"
        className="w-full h-full object-cover"
      />
      <p>DISCOVER THE COURT OF LEGENDS</p>
    </div>
  );
};

export default Hero;
