import React from "react";
import Image from "next/image";
// import SponsorLogo1 from "../../public/assets/images/sponsor1.png";
// import SponsorLogo2 from "../../public/assets/images/sponsor2.png";
// import SponsorLogo3 from "../../public/assets/images/sponsor3.png";

const Sponsors = () => {
  return (
    <div className="bg-gray-800 text-white rounded-lg shadow-lg p-6">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Sponsors</h2>
      {/* <div className="flex flex-wrap justify-center gap-8">
        <Image src={""} alt="Sponsor 1" className="w-40 h-40 object-contain" />
        <Image
          src={""}
          alt="Sponsor 2"
          width={100}
          className="w-40 h-40 object-contain"
        />
        <Image src={""} alt="Sponsor 3" className="w-40 h-40 object-contain" />
      </div> */}
    </div>
  );
};

export default Sponsors;
