import Logo from "../Etc/Logo";
import DarkModeButton from "../NavBar/DarkModeButton";

const NavBar = () => {
  return (
    <div className="flex justify-between flex-row flex-auto items-center w-screen h-[4.7rem] bg-antiwhite-700 absolute z-10">
      <Logo />
      <div className="flex justify-end space-x-4 items-center pr-1 sm:4 ">
        <NavButton name="Projects" href={"#projects"} />
        <NavButton name="Experience" href={"#experience"} />
        <NavButton name="About" href={"#about"} />
        <NavButton name="Contact" href={"#contact"} />
      </div>
    </div>
  );
};

const NavButton = ({ name, href }) => {
  return (
    <div className="!ml-1.5">
      <a
        href={href}
        className="flex flex-col drop-shadow-md hover:drop-shadow-lg hover:bg-antiwhite-500 rounded-md my-[0.5] sm:mx-1 mx-0 text-sm md:text-md px-1 md:px-4 py-1 md:py-2 items-center cursor-pointer"
      >
        <span className="scale-1 font-semibold">{name}</span>
      </a>
    </div>
  );
};

export default NavBar;
