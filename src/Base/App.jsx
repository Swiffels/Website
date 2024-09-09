import Hero from "../Hero/Hero";
import NavBar from "../NavBar/NavBar";
import Projects from "../Projects/Projects";

function App() {
  return (
    <div className="w-screen h-screen transition-colors overflow-x-hidden">
      <NavBar />
      <Hero />
      <Projects />
    </div>
  );
}

export default App;
