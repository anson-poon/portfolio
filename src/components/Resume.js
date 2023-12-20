import React from "react";

export default function Resume() {
    return (
        <section id="resume" className="body-font">
            <div className="container px-5 py-10 mx-auto">
                <div className="mb-20">
                    <h1 className="sm:text-5xl text-6xl font-bold title-font mb-4 dark:text-neutral-50">
                        Resume
                    </h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4">
                        
                    </p>
                </div>
                <div className="mx-auto lg:max-w-2xl lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded"
                        alt="resume"
                        src={require('./assets/resume.png')}
                    />
                </div>
            </div>
        </section>
    );
}