import Images from "./Images";

const Welcome: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10 lg:gap-16 xl:gap-24">
      <div className="flex flex-col gap-2">
        <p className="text-base text-center lg:text-xl">Ball & Life</p>
        <h1 className="text-2xl font-bold border-b-2 border-black md:text-3xl xl:text-5xl">
          WELCOME TO OUR LEAGUE
        </h1>
      </div>
      {/* The images section */}
      <Images />
    </div>
  );
};

export default Welcome;
