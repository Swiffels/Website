import { MdOutlineModeStandby } from "react-icons/md";

const Logo = () => {
  return (
    <div className="flex-col flex items-center mx-1 justify-center">
      <img src="src\assets\logo.png" className="w-7 h-7 md:w-9 md:h-9" />
      <h1 className="text-xs font-bold pl-1 md:text-sm md:pl-1 ">Shawn Prather</h1>
    </div>
  );
};

export default Logo;
