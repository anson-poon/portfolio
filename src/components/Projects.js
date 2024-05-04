import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="body-font">
        <div className="container mx-auto">
          <div className="flex flex-col w-full mt-20 mb-5">
            <h1 className="sm:text-5xl text-6xl font-bold title-font mb-4 dark:text-neutral-50">
              PROJECTS
            </h1>
          </div>
          {/* <div className="flex flex-wrap -m-4"> */}
          <div className="grid grid-cols-2 gap-x-10 gap-y-16"> 
            {projects.map((project) => (
              <a
                href={project.link} 
                key={project.image}
                className=""
                target="_blank" rel="noreferrer">
                <div className="flex relative h-[28rem]">
                  <img
                    alt="gallery"
                    className="absolute inset-0 rounded-xl w-full h-full object-cover object-center drop-shadow-xl"
                    src={require(`./assets/${project.image}`)}
                  />
                  <div className="px-20 py-20 relative z-10 rounded-xl w-full h-full bg-slate-500 opacity-0 transition-opacity ease-in duration-100 hover:opacity-90">
                    <h2 className="tracking-widest text-sm title-font font-medium text-blue-300 mb-1">
                      {project.subtitle}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-slate-50 mb-3">
                      {project.title}
                    </h1>
                    <p className="leading-relaxed text-slate-300">{project.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
    </section>
  );
}