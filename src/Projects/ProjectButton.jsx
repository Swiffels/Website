const ProjectButton = ({ name, image, description }) => {
  return (
    <div className="md:w-full h-auto border-steel_blue-400 bg-steel_blue-600 bg-gradient-to-r from-steel_blue-700 border-2 rounded-2xl transition-transform duration-300 ease-in-out transform hover:-translate-y-2 my-4 mx-6">
      <button className="flex flex-col items-center w-full text-center h-72">
        <div className="overflow-hidden rounded-t-2xl h-64">
          <img src={image} alt={name} className="rounded-t-2xl object-cover w-full h-max object-center" />
        </div>
        <h1 className="font-bold text-lg md:text-2xl pt-2 pb-1">{name}</h1>
        <p className="font-semibold text-md md:text-xl pb-1">{description}</p>
      </button>
    </div>
  );
};

export default ProjectButton;
