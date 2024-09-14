import { MdOutlineModeStandby } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "/assets/logo.png";

const Logo = () => {
  return (
    <div className="w-30 flex-col flex items-center mx-0 sm:mx-1 justify-center object-contain scale-[90%] sm:scale-100">
      <Link to={"/"} className="flex flex-col rounded-full  items-center">
        <img src={logo} className="w-9 h-9" />
        <h1 className="font-bold text-xs sm:text-sm pl-1 ">Shawn Prather</h1>
      </Link>
    </div>
  );
};

export default Logo;
