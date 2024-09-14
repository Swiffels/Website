import Img from "/assets/Images/Posts/AlarmClock/alarmclock0.jpg";
import img1 from "/assets/Images/Posts/AlarmClock/alarmclock1.jpg";
import Contact from "../Contact/Contact";
import NavBarPosts from "../NavBar/NavBarPosts";

const Template = () => {
  return (
    <div className="w-screen scroll-smooth h-screen transition-colors overflow-x-hidden">
      <NavBarPosts />
      <Blog />
      <Contact />
    </div>
  );
};

const Blog = () => {
  return (
    <div className="w-screen">
      <NameImage />
      <Text />
    </div>
  );
};

const NameImage = () => {
  return (
    <div className="relative inline-block w-full">
      <img src={Img} className="max-h-[28rem] 2xl:max-h-[38rem] w-full object-cover" />
      <div style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }} className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
        <h1 className="text-antiwhite-900 font-custom font-extrabold text-3xl md:text-5xl pt-8 md:pb-2 text-center">Making an IoT Alarm Clock</h1>
        <h2 className="text-raisin_black-900 font-custom font-semibold text-2xl md:text-4xl pt-0 pb-10 text-center">Webservers and HTTPS</h2>
      </div>
    </div>
  );
};

const Text = () => {
  return (
    <div className="prose-sm prose sm:prose-lg mx-auto px-8 mb-4 pt-10 max-w-3xl">
      <h3>I can't wake up.</h3>
      <p className="indent-12">
        So, I have a problem waking up. I have missed classes in high school and have almost been late for important meetings because I couldn't wake up to my alarms. I was even given an alarm clock
        that shakes my pillow, but I still couldn't get up. Now, I do wake up, but I turn off the alarm and go back to bed before fully waking up. After searching the internet for solutions and trying
        some to no avail, I decided to create my own solution to this problem.
      </p>
      <p className="indent-12">I decided that an effective solution would need to include a few features:</p>
      <ul>
        <li>Be more than just a simple button to turn off</li>
        <li>Easy to set to when I need to wake up</li>
        <li>Be able to run from an outlet and also be battery-powered so I can't just unplug it</li>
        <li>Distance from bed</li>
        <li>Be able to turn off the alarm if I am not at home</li>
      </ul>
      <img src={img1} className="max-h-96 mx-auto !leading-tight !my-0 !py-0" />
      <figcaption className="text-center font-bold !pt-0">Image of how I originally connected to the ESP8266</figcaption>
      <p className="indent-12">
        After many hours of trying, I finally got the ESP8266 to receive the code. I then began coding the basic time functions as well as the alarm functions for storing, handling, and activating the
        alarm. After verifying all was working, I started coding the HTTPS side, where I had GET requests to send and receive info from the alarm clock to test everything. After getting that done, I
        created its own WiFi network via AP mode, which allows someone to connect to it with another device and add their WiFi details through POST requests. I also added region data to handle time
        changes and other information, as well as code to play different songs and music. After all of this, I decided it was finally time to work on the webserver, after using just command line
        statements for many weeks to communicate with it.
      </p>
      <img src={img1} className="max-h-96 mx-auto !my-0 !py-0 !leading-tight" />
      <figcaption className="text-center font-bold !pt-0">Final setup before soldering the board</figcaption>
      <img src={img1} className="max-h-96 max-w-md mx-auto !my-2 !py-0 !leading-tight" />
    </div>
  );
};

export default Template;
