import Img from "/assets/Images/Posts/AlarmClock/alarmclock.jpg";
import img1 from "/assets/Images/Posts/AlarmClock/alarmclock1.jpg";
import img2 from "/assets/Images/Posts/AlarmClock/alarmclock2.jpg";
import img3 from "/assets/Images/Posts/AlarmClock/alarmclock3.jpg";
import img4 from "/assets/Images/Posts/AlarmClock/alarmclock4.jpg";
import img5 from "/assets/Images/Posts/AlarmClock/alarmclock5.jpg";
import img6 from "/assets/Images/Posts/AlarmClock/alarmclock6.jpg";
import img7 from "/assets/Images/Posts/AlarmClock/alarmClockLogo.png";
import Contact from "/src/Contact/Contact";
import NavBarPosts from "/src/NavBar/NavBarPosts";

const AlarmClockPost = () => {
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
      <p className="indent-12">
        From this, I determined that the optimal solution would be to fully code an alarm clock that I could control from my phone, giving me more control over the settings and making it cheaper to
        replace or change parts. After doing some research, I decided to buy an Arduino kit and start by learning the basic code needed, then work my way up to being able to create a full WiFi alarm
        clock.
      </p>
      <p className="indent-12">
        After a couple of weeks, I got pretty comfortable with moving different motors, lighting LEDs, and using resistors for various tasks using an Arduino Uno. I then decided it was time to start
        working on the project. I did a fair bit of research on what type of microcontroller board I would need to handle the connections, be small enough to fit within a smallish housing, and have
        enough general-purpose input/output pins to fit my needs. I ended up choosing an ESP8266 ESP01 board (a choice I would soon regret).
      </p>
      <p className="indent-12">
        After receiving the ESP8266 board, I started to work on getting it customizable, as these boards are typically only used for communications, at least the ESP01 model. I had to download some
        libraries onto the ArduinoIDE to compile code to it. I encountered many issues with getting the ESP8266 to receive the code from my computer and had to use my Arduino Uno as a middle-man
        device to help the connection go through.
      </p>
      <img src={img1} className="max-h-96 mx-auto !leading-tight !my-0 !py-0" />
      <figcaption className="text-center font-bold !pt-0">Image of how I originally connected to the ESP8266</figcaption>
      <p className="indent-12">
        After many hours of trying, I finally got the ESP8266 to receive the code. I then began coding the basic time functions as well as the alarm functions for storing, handling, and activating the
        alarm. After verifying all was working, I started coding the HTTPS side, where I had GET requests to send and receive info from the alarm clock to test everything. After getting that done, I
        created its own WiFi network via AP mode, which allows someone to connect to it with another device and add their WiFi details through POST requests. I also added region data to handle time
        changes and other information, as well as code to play different songs and music. After all of this, I decided it was finally time to work on the webserver, after using just command line
        statements for many weeks to communicate with it.
      </p>
      <img src={img2} className="max-h-96 mx-auto !my-0 !py-0 !leading-tight" />
      <figcaption className="text-center font-bold !pt-0">Final setup before soldering the board</figcaption>
      <p className="indent-12">
        I then decided it would be really cool to learn how to make a PCB and then design one for the alarm clock, so I chose Altium Designer and got to work. After a week or so of learning how to use
        it, I was able to make a decent PCB and ordered it along with all the needed components for soldering the board.
      </p>
      <img src={img3} className="max-h-96 mx-auto !my-0 !py-0 !leading-tight" />
      <figcaption className="text-center font-bold !pt-0">Here is one of the PCBs I received</figcaption>
      <p className="indent-12">
        I then had to learn how to solder, so I spent some time practicing on test boards and even decided to make a through-hole alarm clock board before attempting to solder the final PCB. I became
        proficient at soldering and then attempted to solder the PCB. Thankfully, I bought 10 of them, and after messing up on the first one due to the pads coming off, I successfully completed it.
      </p>
      <img src={img4} className="max-h-96 mx-auto !my-0 !py-0 !leading-tight" />
      <figcaption className="text-center font-bold !pt-0">Here is my failed PCB that I broke</figcaption>
      <p className="indent-12">
        After all of this, I more or less finished the electrical side of things and quickly worked on designing an alarm clock housing for all of the parts, which after a few designs was in a good
        enough spot to work with everything. At this point, I have now finished my alarm clock and plan to develop a 2.0 in the future, as there are a few issues that are annoying, like how the ESP01
        is annoying to work with and some bugs with various things.
        <br />
        <br />I also didn't at the time have the intention of posting this anywhere so I don't have many images and stuff from me making it as I made it about a year before making this site, here are
        some of the other photos I have of it, hope you enjoy:
      </p>
      <img src={img5} className="max-h-96 mx-auto !my-2 !py-0 !leading-tight" />
      <img src={img6} className="max-h-96 mx-auto !my-2 !py-0 !leading-tight" />
      <img src={img7} className="max-h-96 max-w-md mx-auto !my-2 !py-0 !leading-tight" />
    </div>
  );
};

export default AlarmClockPost;
