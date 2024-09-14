import FeaturedProjectButton from "./FeaturedProjectButton";
import websiteProjectLogo from "/assets/websiteProjectLogo.png";
import alarmClockLogo from "/assets/Images/Posts/AlarmClock/alarmClockLogo.png";
import rockClimbingLogo from "/assets/rockClimbingLogo.jpg";

function FeaturedProjects() {
  return (
    <div id="projects" className="w-full bg-slate-100 text-center">
      <h1 className="text-raisin_black-500 font-custom font-extrabold text-5xl pt-8 pb-10">Featured Projects</h1>
      <div className="flex justify-items-center items-center align-items-center justify-center flex-col lg:flex-row pb-4">
        <FeaturedProjectButton name={"Portfolio"} image={websiteProjectLogo} description={"Making a website"} />
        <FeaturedProjectButton name={"IoT Alarm Clock"} image={alarmClockLogo} description={"Webserver-based alarm clock"} to={"/AlarmClock"} />
        <FeaturedProjectButton name={"Accessible Rock Climbing"} image={rockClimbingLogo} description={"Climbing holds for visually impaired "} />
      </div>
    </div>
  );
}

export default FeaturedProjects;
