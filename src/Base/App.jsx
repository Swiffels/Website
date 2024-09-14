import Home from "/src/Base/Home.jsx";
import Template from "./Template";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="template" element={<Template />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
