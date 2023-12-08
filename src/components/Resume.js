import React from "react";

export default function Resume() {
    return (
        <section id="resume" className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-10 mx-auto">
                <div className="text-center mb-20">
                    <h1 className="sm:text-5xl text-6xl font-bold title-font mb-4 text-slate-600">
                        Resume
                    </h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit
                        ipsa delectus eum quo voluptas aspernatur accusantium distinctio
                        possimus est.
                    </p>
                </div>
                <div className="mx-auto lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded"
                        alt="resume"
                        src="./resume.png"
                    />
                </div>
            </div>
        </section>
    );
}