import Image from "next/image";
import HomeCourt from "../../public/assets/images/home-court.svg";

const Hero = () => {
  return (
    <div className="w-screen">
      <Image src={HomeCourt} alt="this is home court" className="" />
    </div>
  );
};

export default Hero;
