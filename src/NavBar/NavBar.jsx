import Logo from "../Etc/Logo";
import DarkModeButton from "../NavBar/DarkModeButton";
import { MdOutlineWorkOutline, MdOutlineWork, MdInfo, MdInfoOutline, MdDehaze, MdInsertChartOutlined, MdInsertChart } from "react-icons/md";
import { TbMessageFilled, TbMessage } from "react-icons/tb";

const NavBar = () => {
  return (
    <div className="flex justify-between flex-row flex-auto items-center w-screen h-[4.7rem] bg-antiwhite-700">
      <Logo />
      <div className="flex justify-end space-x-4 items-center ">
        <NavButton name="Projects" />
        <NavButton name="Experience" />
        <NavButton name="About" />
        <NavButton name="Contact" />
        <DarkModeButton />
      </div>
    </div>
  );
};

const NavButton = ({ name }) => {
  return (
    <div className="!ml-1.5">
      <button className="flex flex-col drop-shadow-md hover:drop-shadow-lg hover:bg-antiwhite-500 rounded-md my-[0.5] mx-1 text-sm md:text-md px-1 md:px-4 py-1 md:py-2 items-center">
        <span className="scale-1">{name}</span>
      </button>
    </div>
  );
};

export default NavBar;
