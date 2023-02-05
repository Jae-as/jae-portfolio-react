import React from "react";
import AboutMe from "./components/aboutme/aboutme";
import Navbar from "./components/navbar/navbar";
import Resume from "./components/resume/resume";
import Experiences from "./components/experiences/experiences";
import Portfolio from "./components/portfolio/portfolio";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import "./index.css";

function App() {
  return (
    <div>
<Navbar></Navbar>
<AboutMe></AboutMe>
<Experiences></Experiences>
<Resume></Resume>
<Portfolio></Portfolio>
<Contact></Contact>
<Footer></Footer>
    </div>
  );
}

export default App;
