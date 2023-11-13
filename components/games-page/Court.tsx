import Image from "next/image";
import Court213 from "../../public/assets/images/blog1.png";

const Court = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <h1 className="font-semibold animate-bounce">Gameday Court</h1>
      <div className="w-[70%]">
        <Image src={Court213} alt="PS 213" className="rounded-xl" />
      </div>
      <p className="font-medium">Name: PS 213</p>
      <p className="font-medium">
        Location: 799 Vermont Street, Brooklyn NY 11207
      </p>
    </div>
  );
};

export default Court;
