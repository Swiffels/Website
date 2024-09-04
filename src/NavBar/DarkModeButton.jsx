import { motion } from "framer-motion";
import { useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

const TOGGLE_CLASSES = "text-sm font-medium flex items-center relative z-10";

const DarkModeButton = () => {
  const [selected, setSelected] = useState("light");
  return (
    <div className={`grid h-[200px] place-content-center pr-2 transition-colors`}>
      <SliderToggle selected={selected} setSelected={setSelected} />
    </div>
  );
};

const SliderToggle = ({ selected, setSelected }) => {
  return (
    <div className="relative flex justify-around h-[2rem] w-[4rem] items-center border-2 border-gray-500 rounded-full">
      <button
        onClick={() => {
          setSelected("dark");
        }}
      >
        <FiSun className="relative z-10 text-lg md:text-sm" />
      </button>
      <button
        onClick={() => {
          setSelected("light");
        }}
      >
        <FiMoon className="relative z-10 text-lg md:text-sm" />
      </button>

      <div className={`absolute inset-0 z-0 flex ${selected === "dark" ? "justify-start" : "justify-end"}`}>
        <motion.span layout transition={{ type: "snap", damping: 15, stiffness: 250 }} className="h-full w-1/2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600" />
      </div>
    </div>
  );
};

export default DarkModeButton;
