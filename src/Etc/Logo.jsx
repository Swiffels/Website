import { MdOutlineModeStandby } from "react-icons/md";
import logo from "/assets/logo.png";

const Logo = () => {
  return (
    <div className="w-30 flex-col flex items-center mx-1 justify-center">
      <img src={logo} className="w-9 h-9" />
      <h1 className="font-bold text-sm pl-1 ">Shawn Prather</h1>
    </div>
  );
};

export default Logo;
