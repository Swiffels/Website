import { Link } from "react-router-dom";

const FeaturedProjectButton = ({ name, image, description, to }) => {
  return (
    <div className="w-96 bg-steel_blue-600 bg-gradient-to-r from-steel_blue-700 h-[22rem] drop-shadow-md rounded-b-2xl rounded-t-3xl transition-transform duration-300 ease-in-out transform hover:-translate-y-2 my-4 mx-6 overflow-hidden">
      <Link to={to} className="flex flex-col items-center w-full text-center h-72 no-underline">
        <div className="overflow-clip grid h-full rounded-t-2xl">
          <img src={image} alt={name} className="rounded-t-2xl h-64 w-max object-center object-cover" />
        </div>
        <div className="h-32">
          <h1 className="font-bold text-2xl pt-2 pb-1 text-black">{name}</h1>
          <p className="font-semibold text-xl pb-1 px-2 text-black">{description}</p>
        </div>
      </Link>
    </div>
  );
};

export default FeaturedProjectButton;
