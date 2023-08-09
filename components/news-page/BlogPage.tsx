import Image from "next/image";
import Link from "next/link";
import Sammy from "../../public/assets/images/sammy.svg";
import Shooter from "../../public/assets/images/steve-shooter.svg";

const BlogPage: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-4 lg:mt-8 gap-4">
        <h2 className="text-lg  text-center font-bold border-b-2 border-black md:text-xl xl:text-2xl">
          COMMUNITY MEMBERS SHARE THOUGHTS
        </h2>
      </div>
      <div className="flex flex-col items-center justify-center gap-14 text-center mx-auto my-5 xl:my-24 xl:mx-10 xl:gap-20">
        <div className="flex flex-col gap-4 mx-4 md:items-stretch md:flex-row lg:mx-8 lg:gap-8 xl:gap-14">
          <div className="md:w-1/2">
            <Image
              src={Sammy}
              alt="Our court looking like miami"
              className="w-full"
            />
          </div>
          <div className="flex flex-col gap-4 md:w-1/2 md:gap-2 lg:justify-center lg:items-center xl:gap-10">
            <h2 className="text-lg font-semibold lg:text-xl xl:text-2xl">
              OH SAMMY !!!
            </h2>
            <p className="text-base lg:text-lg xl:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              vulputate auctor dolor, vitae tincidunt turpis fringilla at. Nunc
              eget placerat lectus. Curabitur rutrum dui in sollicitudin tempus.
            </p>
            <p>August 13, 2023</p>
            <p>
              Written by: <span>Wale</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 mx-4 md:items-stretch md:flex-row lg:mx-8 lg:gap-8 xl:gap-14">
          <div className="md:w-1/2">
            <Image src={Shooter} alt="Rodge in court" />
          </div>
          <div className="flex flex-col gap-4 md:w-1/2 md:gap-2 lg:justify-center lg:items-center xl:gap-10">
            <h2 className="text-lg font-semibold lg:text-xl xl:text-2xl">
              BEST SHOOTING FORM
            </h2>
            <p className="text-base lg:text-lg xl:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              vulputate auctor dolor, vitae tincidunt turpis fringilla at. Nunc
              eget placerat lectus. Curabitur rutrum dui in sollicitudin tempus.
            </p>
            <p>August 13, 2023</p>
            <p>
              Written by: <span>Wale</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
