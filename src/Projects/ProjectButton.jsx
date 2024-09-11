const ProjectButton = ({ name, icon }) => {
  return (
    <div className="w-72 h-36 bg-antiwhite-700 border-2 border-black rounded-xl transition-transform duration-300 ease-in-out transform hover:-translate-y-2 my-4 mx-6">
      <button className="flex flex-row items-center text-center h-36">
        <div className="overflow-clip grid w-36 rounded-xl">
          <img src={icon} alt={name} className="rounded-xl max-h-24 max-w-24 block m-auto" />
        </div>
        <div className="flex-1">
          <h1 className="font-bold text-2xl pr-2">{name}</h1>
        </div>
      </button>
    </div>
  );
};

export default ProjectButton;
