import "./App.css";
import { Routes, Route } from "react-router-dom";
import Myrecords from "./Components/Pages/Myrecords";
// import Punchin from "./Components/Pages/Punchin";
import Attconfig from "./Components/Pages/Attconfig";
import Viewattrecord from "./Components/Pages/Viewattrecord";
import Nav from "./Components/Pages/Nav";
// import Punchout from "./Components/Pages/Punchout";
// import { useState } from "react";
// import Leave from "./Components/Pages/Leave";

function App() {
  // const [punch, setpunch] = useState({});
  return (
    <>
      <Nav />
      <div className="main">
        <Routes>
          <Route path="/" element={<Myrecords />} />
          {/* <Route path="/leave" element={<Leave />} /> */}
          {/* <Route path="/punchout" element={<Punchout />} /> */}
          <Route path="/Attconfig" element={<Attconfig />} />
          <Route path="/Viewattrecord" element={<Viewattrecord />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
