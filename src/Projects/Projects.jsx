import ProjectButton from "./ProjectButton";
import websiteProjectLogo from "/assets/websiteProjectLogo.png";
import alarmClockLogo from "/assets/alarmClockLogo.png";
import rockClimbingLogo from "/assets/rockClimbingLogo.jpg";

function Projects() {
  return (
    <div className="w-full bg-slate-100 text-center">
      <h1 className="text-raisin_black-500 font-custom font-extrabold text-5xl pt-8 pb-10">Featured Projects</h1>
      <div className="flex justify-around flex-col md:flex-row">
        <ProjectButton name={"Portfolio"} image={websiteProjectLogo} description={"Making a website"} />
        <ProjectButton name={"IoT Alarm Clock"} image={alarmClockLogo} description={"Webserver-based alarm clock"} />
        <ProjectButton name={"Accessible Rock Climbing"} image={rockClimbingLogo} description={"Visually impaired climbing holds"} />
      </div>
    </div>
  );
}

export default Projects;
