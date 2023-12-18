import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/assets/images/logo.svg";
import Line from "../../public/assets/icons/line.svg";
import Youtube from "../../public/assets/icons/youtube.svg";
import Whatsapp from "../../public/assets/icons/whatsapp.svg";
import Twitter from "../../public/assets/icons/twitter.svg";
import Instagram from "../../public/assets/icons/instagram.svg";
import Facebook from "../../public/assets/icons/facebook.svg";

const Footer = () => {
  return (
    <div className="bg-black flex flex-col mt-16">
      <div className="flex flex-col gap-8 px-7">
        <div className="flex flex-col gap-9 mt-8 lg:flex-row lg:space-x-48">
          <div className="flex flex-row items-center gap-9 lg:flex-col lg:items-start">
            <Image
              src={Logo}
              alt="Our logo"
              className="w-[70px] h-[60px] lg:w-[80px] lg:h-[80px]"
            />
            <div className=" flex flex-col text-sm font-medium text-[#FFFFFA] gap-2">
              <p>Come test your basketball skill.</p>
              <p>Improve life skill as a bonus.</p>
            </div>
          </div>
          <div className="flex flex-col text-[#FFFFFA] text-base font-normal gap-4 lg:flex-row lg:gap-24">
            <div className="flex flex-col gap-4">
              <Link href="/about">About Us</Link>
              <Link href="/tbd">Contact Us</Link>
              <Link href="/updates">News</Link>
              <Link href="/updates">Blogs</Link>
            </div>
            <div className="flex flex-col gap-4">
              <Link href="/tbd">Code of conduct</Link>
              <Link href="/tbd">Sponsors</Link>
              <Link href="/tbd">Events</Link>
              <Link href="/tbd">Gallery</Link>
            </div>
            <div className="flex flex-col gap-4">
              <Link href="/tbd">Documentary</Link>
              <Link href="/tbd">Funny Moments</Link>
            </div>
          </div>
        </div>
        <Image src={Line} alt="A straight line" className="mt-10 w-full" />

        <div className="flex flex-col gap-4 lg:flex-row-reverse lg:items-center lg:mb-10 lg:justify-between">
          <div className="flex flex-col items-left justify-center gap-3">
            <div className="flex flex-col gap-2 text-white">
              <h3 className="font-bold ">Follow Us</h3>
              <p className="text-wrap">
                Stay up to date with our community events, <br />
                game highlights, and more by following us on social media.
              </p>
            </div>
            <div className="flex flex-row justify-left gap-6">
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={Youtube}
                  alt="Youtube icon"
                  className="w-[30px] h-[30px]"
                />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={Facebook}
                  alt="Facebook icon"
                  className="w-[30px] h-[30px]"
                />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={Twitter}
                  alt="Twitter icon"
                  className="w-[30px] h-[30px]"
                />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={Instagram}
                  alt="Instagram icon"
                  className="w-[30px] h-[30px]"
                />
              </a>
              <a
                href="https://www.whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={Whatsapp}
                  alt="Whatsapp icon"
                  className="w-[30px] h-[30px]"
                />
              </a>
            </div>
          </div>
          <div>
            <p className="text-base text-[#FFFFFA] font-medium mb-5 text-center lg:mb-0">
              &copy; 2023 Kings League. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
