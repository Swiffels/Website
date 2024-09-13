import About from "../About/About";
import Contact from "../Contact/Contact";
import Experince from "../Experience/Experience";
import Hero from "../Hero/Hero";
import NavBar from "../NavBar/NavBar";
import FeaturedProjects from "../Projects/FeaturedProjects";
import Projects from "../Projects/Projects";
import Logo from "/assets/logo.png";

function App() {
  return (
    <div className="w-screen h-screen transition-colors overflow-x-hidden">
      <link rel="icon" type="image/png" href={Logo} />
      <NavBar />
      <Hero />
      <FeaturedProjects />
      <Projects />
      <Experince />
      <About />
      <Contact />
    </div>
  );
}

export default App;
