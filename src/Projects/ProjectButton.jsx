import { Link } from "react-router-dom";

const ProjectButton = ({ name, icon, to }) => {
  return (
    <div className="w-72 h-36 bg-antiwhite-700 border-2 drop-shadow-md border-black rounded-xl transition-transform duration-300 ease-in-out transform hover:-translate-y-2 my-4 mx-6">
      <Link to={to} className="flex flex-row items-center text-center h-36 no-underline">
        <div className="overflow-clip grid w-36 rounded-xl">
          <img src={icon} alt={name} className="rounded-xl max-h-24 max-w-24 block m-auto" />
        </div>
        <div className="flex-1">
          <h1 className="font-bold text-2xl pr-2 text-black">{name}</h1>
        </div>
      </Link>
    </div>
  );
};

export default ProjectButton;
