import Timeline from "../Experience/Timeline";
import Resume from "/assets/Resume - ShawnPrather.pdf";

const Experience = () => {
  return (
    <div id="experience" className="bg-steel_blue-500 h-fit pb-8">
      <h1 className="text-antiwhite-500 font-custom font-extrabold text-5xl pt-8 pb-10 text-center">Experience</h1>
      <div className="flex justify-center">
        <Timeline />
      </div>
      <div className="w-max mx-auto mt-4 ">
        <a
          href={Resume}
          target="_blank"
          rel="noopener noreferrer"
          className="text-antiwhite-500 font-custom font-bold text-lg px-4 py-2 rounded-xl bg-antiwhite-200 hover:bg-steel_blue-400 shadow-md hover:text-steel_blue-900 hover:shadow-xl transition-all"
        >
          View Resume
        </a>
      </div>
    </div>
  );
};

export default Experience;
