import { BadgeCheckIcon } from "@heroicons/react/solid";
import React from "react";
import { skillLanguages, skillFrameworks } from "../data";

export default function Skills() {
    return (
        <section id="skills">
            <div className="container mx-auto">
                <div className="text-left mt-12 mb-5">
                    <h1 className="text-3xl sm:text-4xl title-font mb-4 dark:text-neutral-50 font-semibold">
                        SKILLS &amp; TECHNOLOGIES
                    </h1>
                </div>
                <h2 className="text-lg mb-4 dark:text-neutral-50">LANGUAGES</h2>
                <div className="flex flex-wrap sm:mx-auto sm:mb-2 -mx-2">
                    {skillLanguages.map((skills) => (
                        <div key={skillLanguages} className="p-1 w-1/2 sm:w-1/4">
                            <div className="bg-slate-400 dark:bg-slate-700 rounded-2xl flex p-3 h-full items-center shadow-lg">
                                <BadgeCheckIcon className="text-emerald-400 w-6 h-6 flex-shrink-0 mr-2 " />
                                <span className="title-font font-medium text-white">{skills}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <h2 className="text-lg mb-4 mt-8 dark:text-neutral-50">FRAMEWORKS &amp; TOOLS</h2>
                <div className="flex flex-wrap sm:mx-auto sm:mb-2 -mx-2">
                    {skillFrameworks.map((skills) => (
                        <div key={skillFrameworks} className="p-1 w-1/2 sm:w-1/4">
                            <div className="bg-slate-400 dark:bg-slate-700 rounded-2xl flex p-3 h-full items-center shadow-lg">
                                <BadgeCheckIcon className="text-emerald-400 w-6 h-6 flex-shrink-0 mr-2 " />
                                <span className="title-font font-medium text-white">{skills}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
