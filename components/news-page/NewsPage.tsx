import Image from "next/image";
import Link from "next/link";
import MiamiCourt from "../../public/assets/images/maimi-view-ct.svg";
import RodgeCourt from "../../public/assets/images/rodg-n-ct.svg";

const NewsPage: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-4 lg:mt-8 gap-4">
        <h2 className="text-lg font-bold border-b-2 border-black md:text-xl xl:text-2xl">
          TOP STORIES
        </h2>
      </div>
      <div className="flex flex-col items-center justify-center gap-14 text-center mx-auto my-5 xl:my-24 xl:mx-10 xl:gap-20">
        <div className="flex flex-col gap-4 mx-4 md:items-stretch md:flex-row lg:mx-8 lg:gap-8 xl:gap-14">
          <div className="md:w-1/2">
            <Image src={MiamiCourt} alt="Our court looking like miami" />
          </div>
          <div className="flex flex-col gap-4 md:w-1/2 md:gap-2 lg:justify-center lg:items-center xl:gap-10">
            <h2 className="text-lg font-semibold lg:text-xl xl:text-2xl">
              THE HOME OF KINGS
            </h2>
            <p className="text-base lg:text-lg xl:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              vulputate auctor dolor, vitae tincidunt turpis fringilla at. Nunc
              eget placerat lectus. Curabitur rutrum dui in sollicitudin tempus.
            </p>
            <div className="mt-4 md:mt-2">
              <Link
                href={""}
                className="bg-[#2A6041] text-white px-7 py-2.5 text-sm font-bold rounded-xl xl:px-14 xl:py-4 xl:text-base"
              >
                READ MORE
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 mx-4 md:items-stretch md:flex-row lg:mx-8 lg:gap-8 xl:gap-14">
          <div className="md:w-1/2">
            <Image src={RodgeCourt} alt="Rodge in court" />
          </div>
          <div className="flex flex-col gap-4 md:w-1/2 md:gap-2 lg:justify-center lg:items-center xl:gap-10">
            <h2 className="text-lg font-semibold lg:text-xl xl:text-2xl">
              GREATNESS ARRIVES EARLY
            </h2>
            <p className="text-base lg:text-lg xl:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              vulputate auctor dolor, vitae tincidunt turpis fringilla at. Nunc
              eget placerat lectus. Curabitur rutrum dui in sollicitudin tempus.
            </p>
            <div className="mt-4 md:mt-2">
              <Link
                href={""}
                className="bg-[#2A6041] text-white px-7 py-2.5 text-sm font-bold rounded-xl xl:px-14 xl:py-4 xl:text-base"
              >
                READ MORE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
