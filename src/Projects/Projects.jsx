import ProjectButton from "./ProjectButton";
import WebsiteLogo from "/assets/ProjectLogos/WebsiteLogo.png";
import AlarmClockLogo from "/assets/ProjectLogos/AlarmClockLogo.png";
import RockClimbingLogo from "/assets/ProjectLogos/RockClimbingLogo.png";
import FlightProgramLogo from "/assets/ProjectLogos/FlightProgramLogo.png";
import JapaneseLogo from "/assets/ProjectLogos/JapaneseLogo.png";
import ThreeDPrintingLogo from "/assets/ProjectLogos/3dPrintingLogo.png";
import PopcornLogo from "/assets/ProjectLogos/PopcornLogo.png";

function FeaturedProjects() {
  return (
    <div className="w-full bg-raisin_black-500 text-center">
      <h1 className="text-slate-200 font-custom font-extrabold text-5xl pt-8 pb-10">All Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 items-center justify-items-center align-items-center justify-center">
        <ProjectButton name={"Portfolio"} icon={WebsiteLogo} />
        <ProjectButton name={"IoT Alarm Clock"} icon={AlarmClockLogo} />
        <ProjectButton name={"Accessible Rock Climbing"} icon={RockClimbingLogo} />
        <ProjectButton name={"Flight Itinerary"} icon={FlightProgramLogo} />
        <ProjectButton name={"Learning Japanese"} icon={JapaneseLogo} />
        <ProjectButton name={"3D Modeling & Printing"} icon={ThreeDPrintingLogo} />
        <ProjectButton name={"Selling Over 30k Worth of Popcorn"} icon={PopcornLogo} />
      </div>
    </div>
  );
}

export default FeaturedProjects;
