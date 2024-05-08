import { BadgeCheckIcon, } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container mx-auto">
        <div className="text-left mt-20 mb-5">
          <h1 className="sm:text-4xl text-5xl title-font mb-4 dark:text-neutral-50 font-semibold">
            SKILLS &amp; TECHNOLOGIES
          </h1>
        </div>
        <div className="flex flex-wrap sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-1 sm:w-1/4 w-full">
              <div className="bg-gray-700 rounded-2xl flex p-4 h-full items-center">
                <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4 " />
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}