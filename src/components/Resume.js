import React from "react";

export default function Resume() {
    return (
        <section id="resume" className="body-font">
            <div className="container px-5 py-10 mx-auto">
                <div className="mb-10">
                    <h1 className="sm:text-4xl text-5xl title-font mb-4 dark:text-neutral-50 font-semibold">
                        RESUME
                    </h1>
                    {/* <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4">
                        Link:
                    </p> */}
                </div>
                <div className="mx-auto lg:max-w-3xl lg:w-full md:w-1/2 w-5/6 drop-shadow-xl">
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