import ProjectButton from "./ProjectButton";

function FeaturedProjects() {
  return (
    <div className="w-full bg-raisin_black-500 text-center">
      <h1 className="text-slate-200 font-custom font-extrabold text-5xl pt-8 pb-10">All Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 items-center justify-items-center align-items-center justify-center">
        <ProjectButton name={"Portfolio"} icon={"assets/ProjectsLogos/WebsiteLogo.png"} />
        <ProjectButton name={"IoT Alarm Clock"} icon={"assets/ProjectsLogos/AlarmClockLogo.png"} />
        <ProjectButton name={"Accessible Rock Climbing"} icon={"assets/ProjectsLogos/RockClimbingLogo.png"} />
        <ProjectButton name={"Flight Itinerary"} icon={"assets/ProjectsLogos/FlightProgramLogo.png"} />
        <ProjectButton name={"Learning Japanese"} icon={"assets/ProjectsLogos/JapaneseLogo.png"} />
        <ProjectButton name={"3D Modeling & Printing"} icon={"assets/ProjectsLogos/3dPrintingLogo.png"} />
        <ProjectButton name={"Selling Over 30k Worth of Popcorn"} icon={"assets/ProjectsLogos/PopcornLogo.png"} />
      </div>
    </div>
  );
}

export default FeaturedProjects;
