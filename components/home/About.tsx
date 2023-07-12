import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/assets/images/logo.svg";

const About: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image src={Logo} alt="The logo" />
      <h2 className="text-lg">WHO WE ARE</h2>
      <p>
        Sunday balling league is a league for our community. Founded in 2022,
        headquarters in Brooklyn, NY. We are a body that&apos;s committed to
        creating a good atmosphere every game day. Friends and family first,
        competitors next.
      </p>
      <Link href={""} className="bg-[#2A6041] text-black px-8 py-2.5">
        MORE ABOUT US
      </Link>
    </div>
  );
};

export default About;
