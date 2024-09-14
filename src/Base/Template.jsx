import Logo from "/assets/logo.png";
import Img from "/assets/Images/Posts/geko.jpg";
import img1 from "/assets/Images/Posts/AlarmClock/alarmclock1.jpg";
import Contact from "../Contact/Contact";
import NavBar from "../NavBar/NavBar";
import NavBarPosts from "../NavBar/NavBarPosts";

const Template = () => {
  return (
    <div className="w-screen scroll-smooth h-screen transition-colors overflow-x-hidden">
      <link rel="icon" type="image/png" href={Logo} />
      <NavBarPosts />
      <Blog />
      <Contact />
    </div>
  );
};

const Blog = () => {
  return (
    <div>
      <NameImage />
      <Text />
    </div>
  );
};

const NameImage = () => {
  return (
    <div className="relative inline-block w-full">
      <img src={Img} className="max-h-[28rem] w-full object-cover" />
      <div style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }} className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
        <h1 className=" text-antiwhite-900 font-custom font-extrabold text-3xl sm:text-5xl pt-8 pb-0 text-center">Making an IoT Alarm Clock</h1>
        <h2 className=" text-raisin_black-900 font-custom font-semibold text-2xl sm:text-4xl pt-0 pb-10 text-center">Webservers and HTTPS</h2>
      </div>
    </div>
  );
};

const Text = () => {
  return (
    <div className="prose mx-auto px-8 mb-4 pt-10 w-full">
      <h3>I can't wake up.</h3>
      <p className="indent-12">
        So I have a problem waking up. I have missed classes in high school and almost been late for important meetings due to not being able to wake up to my alarms. I was even given a alarm clock
        that shakes my pillow to wake me up but I still can't get up. Now I do get up but I turn off the alarm and go back to bed before actually being awake enough to realize that I need to get up.
        So after looking around the internet for solutions and trying some to no avail I decided I needed to make my own solution to this problem.
        <br />
        <br />I decided that a effective solution would need to have a few things:
      </p>
      <ul>
        <li>Be more than just a simple button to turn off</li>
        <li>Easy to set to when I need to wake up</li>
        <li>Distance from bed</li>
        <li>Be able to turn off alarm if I am not at home</li>
      </ul>
      <p className="indent-12">
        From this I determined that the optimal solution would be to fully code a alarm clock that I could control from my phone, this way I would have more control over the settings and it would be a
        lot cheaper if I needed to replace or change parts. After doing some bit of reasearch I decided to buy a arduino kit and start by learning the code needed to do basic stuff in that and then
        work my way up to being able to make a full WiFi alarm clock.{" "}
      </p>
      <p className="indent-12">
        ... After a couple weeks I got pretty comfortable moving different motors, lighting LED's, and using resistors to do different stuff using a Arduino Uno. I then decided it was time to start
        actually working on the project. I did a fair bit of research on what type of microcontroller board I would need to be able to handle the connections, be small enough to fit within a smallish
        housing, and to have enough genreal purpose input output pins to fit my needs and I ended up choosing a ESP8266 ESP01 board (I would come to regreat this choice quite soon).
      </p>
      <p className="indent-12">
        After reciving the ESP8266 board I started to work on getting it actually able to be customized since these boards are typically only used for communications at least the ESP01 model so I had
        to download some libraries onto the ArduinoIDE to actually be able to compile code to it. I ran into a lot of issues with actually getting the ESP8266 to be able to recive the code from my
        computer and had to link my Arduino Uno as a middle man device to help the connection go thropuhg.
      </p>
      <img src={img1} className="max-h-96 mx-auto my-0 py-0" />
      <figcaption className="text-center font-bold">Image of first how I originally connected to the ESP8266</figcaption>
    </div>
  );
};

export default Template;
