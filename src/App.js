import React from "react";
import FadeIn from "react-fade-in";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

export default function App() {
    const [darkMode, setDarkMode] = React.useState(true);

    function toggleDarkMode() {
        setDarkMode((prevDarkMode) => !prevDarkMode);
    }

    return (
        <main className={`body-font ${darkMode ? "dark" : "light"}`}>
            <div
                className={`w-full h-full bg-gradient-to-r ${
                    darkMode ? "from-pink-400 via-blue-400 to-emerald-400" : "from-pink-200 via-blue-200 to-emerald-200"
                } background-animate`}
            >
                <div className="container mx-auto max-w-8xl">
                    <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                    <div className="p-4">
                        <FadeIn delay="350">
                            <About darkMode={darkMode} />
                            <Projects />
                            <Skills />
                            <Resume />
                            <Contact darkMode={darkMode} />
                        </FadeIn>
                    </div>
                </div>
            </div>
        </main>
    );
}
