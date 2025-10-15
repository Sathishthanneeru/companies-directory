// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import "./assets/styles/home.css";
// function App() {
//   return (
//       <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/frontline-media" element={<FrontlineMedia />} />
//     </Routes>
//   );
// }

// export default App;


import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FrontlineMedia from "./pages/FrontlineMedia";
import "./assets/styles/home.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/frontline-media" element={<FrontlineMedia />} />
    </Routes>
  );
}

export default App;


