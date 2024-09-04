import Hero from "./Hero/Hero";
import NavBar from "./NavBar/NavBar";

function App() {
  return (
    <div className="w-screen h-screen overflow-hidden transition-colors">
      <NavBar />
      <Hero />
    </div>
  );
}

export default App;
