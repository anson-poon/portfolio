import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

export default function App() {
  
  const [darkMode, setDarkMode] = React.useState(true)
  
  function toggleDarkMode() {
    setDarkMode(prevDarkMode => !prevDarkMode)
  }   

  return (
    <main className={`body-font ${darkMode ? "dark" : "light"}`}>
      <div className="container mx-auto max-w-8xl" >
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <About />
        <Projects />
        <Skills />
        <Resume />
        <Contact />
      </div>
    </main>
  );
}