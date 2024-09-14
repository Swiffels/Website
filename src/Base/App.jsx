import Home from "/src/Base/Home.jsx";
import AlarmClockPost from "/src/Posts/AlarmClockPost.jsx";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="AlarmClock" element={<AlarmClockPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
