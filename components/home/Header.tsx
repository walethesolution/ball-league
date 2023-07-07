import Image from "next/image";
import Logo from "../../public/assets/images/logo.svg";

const Header: React.FC = () => {
  return (
    <div className="flex flex-col">
      <Image className="" src={Logo} alt="Kings league logo" />
    </div>
  );
};

export default Header;
