import { Fragment, useState, useEffect } from "react";
import experience from "../Experience/TimelineEvents";

const Circle = () => {
  return <div className="w-4 h-4 bg-white mx-auto rounded-full"></div>;
};

const Line = () => {
  return <div className="w-1 bg-white rounded-t-full rounded-b-full h-full mx-auto"></div>;
};

const Timeline = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const breakpoint = 640;

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth((prevWidth) => {
        return window.innerWidth;
      });
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={`flex flex-col gap-y-3 ${windowWidth < breakpoint ? "w-max flex-col justify-center items-center" : "w-full"} pt-2 pb-8`}>
      <Circle />
      {experience.map((event, index) => {
        const direction = windowWidth < breakpoint ? "left" : event.direction;
        return (
          <Fragment key={index}>
            <div className={`grid items-center gap-x-2 ${windowWidth < breakpoint ? "" : "mx-auto grid-cols-[1fr_auto_1fr]"}`}>
              {direction === "left" ? <Card heading={event.heading} subheading={event.subheading} date={event.date} description={event.description} /> : <div></div>}
              <Line />
              {direction === "right" ? <Card heading={event.heading} subheading={event.subheading} date={event.date} description={event.description} /> : <div></div>}
            </div>
            {index < experience.length - 1 && <Circle />}
          </Fragment>
        );
      })}
      <Circle />
    </div>
  );
};

const Card = ({ heading, subheading, date, description }) => {
  return (
    <div className="transition duration-300 ease-in-out mx-2 bg-slate-200 transform hover:-translate-y-1 max-w-sm hover:shadow-2xl border shadow-md rounded-xl p-4">
      <div className="text-steel_blue-500 font-ex text-xl leading-tight">{heading}</div>
      <div className="text-raisin_black-500 font-semibold text-md leading-snug">{subheading}</div>
      <div className="text-black font-semibold text-sm leading-relaxed">{date}</div>
      <div className="text-raisin_black-500 font-normal text-md">{description}</div>
    </div>
  );
};

export default Timeline;
