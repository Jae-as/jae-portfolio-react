import React from "react";
import AboutMe from "./components/aboutme/aboutme";
import Navbar from "./components/navbar/navbar";
import Resume from "./components/resume/resume";
import "./index.css";

function App() {
  return (
    <div>
<Navbar></Navbar>
<AboutMe></AboutMe>
<Resume></Resume>
    </div>
  );
}

export default App;
