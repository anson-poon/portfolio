import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex py-32 md:flex-row flex-col items-center">
        <div className="lg:flex-grow flex flex-col items-center">
          <h1 className="title-font sm:text-5xl text-3xl mb-4 font-semibold">
            Anson Poon
          </h1>
          <p className="mb-8 leading-relaxed text-xl">
            CS Student @ Oregon State | Architecture Graduate @ UCLA | Teaching Assistant
          </p>
          <p className="mb-8 text-lg">
            Hello!👋 My name is Anson, I am a CS student at OSU. I am passionate about solving real-world engineering challenges that yield lasting impact. Throughout the last few years, I have been proactively adding value through academia, club activities, and personal projects, I am determined to put myself out there and learn from the people around me. I believe in software engineering and technology being a driving force for meaningful impact, and I anticipate the opportunity to work with you all in this endeavor!
          </p>
          <div className="flex justify-center">
            <a
              href="#projects"
              className="inline-flex text-white bg-orange-400 border-0 py-2 px-6 focus:outline-none duration-150 hover:bg-orange-600 rounded text-lg">
              Projects
            </a>
            <a
              href="#resume"
              className="ml-4 inline-flex text-white bg-blue-400 border-0 py-2 px-6 focus:outline-none duration-150 hover:bg-blue-600 hover:text-white rounded text-lg">
              Resume
            </a>
            <a
              href="#contact"
              className="ml-4 inline-flex text-white bg-slate-400 border-0 py-2 px-6 focus:outline-none duration-150 hover:bg-slate-500 hover:text-white rounded text-lg">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}