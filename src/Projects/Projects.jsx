import ProjectButton from "./ProjectButton";

function Projects() {
  return (
    <div className="w-full bg-slate-100 text-center">
      <h1 className="text-raisin_black-500 font-custom font-extrabold text-5xl pt-8 pb-10">Featured Projects</h1>
      <div className="flex justify-around flex-col md:flex-row">
        <ProjectButton name={"Portfolio"} image={"assets/websiteProjectLogo.png"} description={"Making a website"} />
        <ProjectButton name={"IoT Alarm Clock"} image={"assets/alarmClockLogo.png"} description={"Webserver-based alarm clock"} />
        <ProjectButton name={"Accessible Rock Climbing"} image={"assets/rockClimbingLogo.jpg"} description={"Visually impaired climbing holds"} />
      </div>
    </div>
  );
}

export default Projects;
