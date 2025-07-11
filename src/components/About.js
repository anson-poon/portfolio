import React from "react";

export default function About({ darkMode }) {
    return (
        <section id="about">
            <div className="container mx-auto flex md:flex-row flex-col items-center">
                <div
                    className={`lg:flex-grow flex flex-col items-center px-14 py-14 rounded-3xl drop-shadow-2xl ${
                        darkMode ? "bg-neutral-500/50" : "bg-neutral-100/50"
                    }`}
                >
                    <h1 className="title-font sm:text-5xl text-3xl mb-4 font-semibold py-5">Anson Poon</h1>
                    <p className="mb-8 leading-relaxed text-xl">
                        Software Developer | CS Graduate @ Oregon State | Architecture Graduate @ UCLA
                    </p>
                    <p className="mb-8 text-lg">
                        Welcome to my portfolio page!👋 My name is Anson, I am a Software Developer. I am passionate
                        about solving real-world engineering challenges that yield lasting impact. Throughout the last
                        few years, I have been proactively adding value through work, academia, freelancing and personal
                        projects, I am determined to put myself out there and learn from the people around me. I believe
                        in software engineering and technology being a driving force for meaningful changes, and I
                        anticipate the opportunity to work with you all in this endeavor!
                    </p>
                    <img
                        src="https://media.tenor.com/dblb_XKGVC4AAAAe/pepe-the-frog-sad.png"
                        alt="Pepe The Frog Sad Sticker"
                        className="mb-8"
                    />
                    <div className="flex justify-center">
                        <a
                            href="#projects"
                            className="inline-flex text-white bg-red-400 hover:bg-red-500 border-0 py-2 px-6 focus:outline-none duration-150 rounded-xl text-lg drop-shadow-xl"
                        >
                            Projects
                        </a>
                        <a
                            href="#resume"
                            className="ml-4 inline-flex text-white bg-blue-400 hover:bg-blue-500 border-0 py-2 px-6 focus:outline-none duration-150 hover:text-white rounded-xl text-lg drop-shadow-xl"
                        >
                            Resume
                        </a>
                        <a
                            href="#contact"
                            className="ml-4 inline-flex text-white bg-emerald-400/80 hover:bg-emerald-500 border-0 py-2 px-6 focus:outline-none duration-150 hover:text-white rounded-xl text-lg drop-shadow-xl"
                        >
                            Contact Me
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
