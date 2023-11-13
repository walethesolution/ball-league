import Image from "next/image";
import PS213 from "../../public/assets/images/pS.png";
import Gersh from "../../public/assets/images/Gersh.png";

const GameGrounds = () => {
  return (
    <div className="flex flex-col items-center gap-4 mt-14 lg:gap-8">
      <h1 className="font-bold border-b-2 border-black lg:text-xl xl:text-2xl">
        GAME GROUNDS
      </h1>
      <div className="flex flex-col gap-6 lg:flex lg:flex-row lg:gap-2 lg:mx-12">
        <div className="flex flex-col items-center text-left gap-2 mx-16 lg:mx-6">
          <Image
            src={PS213}
            alt="our home court PS213"
            className="rounded-lg"
          />
          <h2 className="font-semibold">PS 213</h2>
          <p>
            This is where it all started. <br /> The dream, The Idea. <br /> The
            Home Court
          </p>
        </div>
        <div className="flex flex-col items-center text-left gap-2 mx-16 lg:mx-6">
          <Image
            src={Gersh}
            alt="our away court Gersh"
            className="rounded-lg"
          />
          <h2 className="font-semibold">GERSH</h2>
          <p>
            This is the go-to place. <br /> The Community, The Feel. <br /> The
            Away Court
          </p>
        </div>
      </div>
    </div>
  );
};

export default GameGrounds;
