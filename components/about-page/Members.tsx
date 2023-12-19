import Images from "../home/Images";

const Members = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-8 gap-2 xl:mt-16 xl:gap-12">
      <h2 className="text-base font-bold border-b-2 border-black md:text-xl xl:text-2xl">
        BOARD OF DIRECTORS
      </h2>
      <div>
        <Images />
      </div>
    </div>
  );
};

export default Members;
