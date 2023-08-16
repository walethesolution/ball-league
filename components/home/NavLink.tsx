"use client";

import Link from "next/link";
import Image from "next/image";
import Net from "../../public/assets/icons/basketball-net.jpg";

interface NavLinkProps {
  href: string;
  activeLink: string;
  setActiveLink: (href: string) => void;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({
  href,
  children,
  activeLink,
  setActiveLink,
}) => {
  const isActive = activeLink == href;
  return (
    <li>
      <Link href={href} passHref>
        <div
          className="flex flex-col items-center"
          onClick={() => setActiveLink(href)}
        >
          {children}
          {isActive && (
            <div className="fixed mt-5">
              <Image
                src={Net}
                alt="basketball net"
                className="w-[20px] h-[20px]"
              />
            </div>
          )}
        </div>
      </Link>
    </li>
  );
};

export default NavLink;
