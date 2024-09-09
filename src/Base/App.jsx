import Hero from "../Hero/Hero";
import NavBar from "../NavBar/NavBar";
import Projects from "../Projects/Projects";
import Logo from "/assets/logo.png";

function App() {
  return (
    <div className="w-screen h-screen transition-colors overflow-x-hidden">
      <link rel="icon" type="image/png" href={Logo} />
      <NavBar />
      <Hero />
      <Projects />
    </div>
  );
}

export default App;
