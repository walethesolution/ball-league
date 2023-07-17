import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/assets/images/logo.svg";

const About: React.FC = () => {
  return (
    <div className="flex flex-col mt-10 items-center justify-center gap-6 xl:gap-10 ">
      <Image src={Logo} alt="The logo" />
      <h1 className="text-2xl font-bold border-b-2 border-black md:text-3xl xl:text-5xl">
        WHO WE ARE
      </h1>
      <p className="w-full text-center text-[#1F2937] text-sm leading-8 font-normal px-4 md:text-base md:leading-9 md:px-6 xl:text-2xl xl:leading-10">
        Kings League is a league for our community.
        <br />
        Founded in 2023, headquarters in Brooklyn, NY.
        <br />
        We are a body that&apos;s committed to creating a positive atmosphere
        every game day.
        <br />
        Our priority is to foster a sense of friendship and family, with healthy
        competition coming next.
      </p>
      <Link
        href={""}
        className="bg-[#2A6041] text-white px-7 py-2.5 text-sm font-bold rounded-xl xl:px-14 xl:py-4 xl:text-base"
      >
        MORE ABOUT US
      </Link>
    </div>
  );
};

export default About;
