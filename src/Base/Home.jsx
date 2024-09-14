import About from "../About/About";
import Contact from "../Contact/Contact";
import Experince from "../Experience/Experience";
import Hero from "../Hero/Hero";
import NavBar from "../NavBar/NavBar";
import FeaturedProjects from "../Projects/FeaturedProjects";
import Projects from "../Projects/Projects";

const Home = () => {
  return (
    <div className="w-screen scroll-smooth h-screen transition-colors overflow-x-hidden">
      <NavBar />
      <Hero />
      <FeaturedProjects />
      <Projects />
      <Experince />
      <About />
      <Contact />
    </div>
  );
};

export default Home;
