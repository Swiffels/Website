import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

const Contact = () => {
  return (
    <div id="contact" className="w-full pb-8 bg-steel_blue-500">
      <h1 className="text-antiwhite-500 font-custom font-extrabold text-5xl pt-8 pb-10 text-center">Contact</h1>
      <div className="flex justify-center">
        <ContactIcon icon={<FaGithub />} link={"https://github.com/Swiffels"} />
        <ContactIcon icon={<CiMail />} link={"mailto:contact@shawnprather.dev"} />
        <ContactIcon icon={<FaLinkedin />} link={"https://linkedin.com/in/shawn-prather/"} />
      </div>
    </div>
  );
};

const ContactIcon = ({ icon, link }) => {
  return (
    <div className="min-h-8 min-w-8">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block border-2 border-antiwhite-500 rounded-full p-4 mx-5 scale-125 text-antiwhite-500 font-custom font-bold text-lg bg-antiwhite-200 hover:bg-steel_blue-300 shadow-md hover:text-steel_blue-900 hover:shadow-2xl transition-all"
      >
        {icon}
      </a>
    </div>
  );
};

export default Contact;
