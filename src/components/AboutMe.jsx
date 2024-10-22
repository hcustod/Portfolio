import React from 'react';
import { FaJs, FaReact, FaGit, FaDocker, FaJava, FaPython, FaLinux, FaGithub } from 'react-icons/fa';
import { SiPostgresql, SiLaravel, SiGooglecloud } from 'react-icons/si'; // Icons for PostgreSQL, Laravel, GCP

const AboutMe = () => {
    return (
        <div id='aboutMe' className='max-w-[1040px] m-auto mt-16 em-10'>
            {/* About Me Section */}
            <h1 className="text-4xl font-bold text-center mt-8 text-[#001b5e]"> About Me </h1>

            <p className='text-center py-8'>
                As an IT professional with a versatile background, including roles as a Developer Analyst and Systems Technical Specialist, 
                my journey into technology was shaped by a lifelong immersion in the digital world, 
                significantly influenced by my brother, a masterful Systems Architect and Linux aficionado. 
                This familial inspiration fueled my passion and aspiration to excel in the tech industry, 
                constantly pushing me to explore new horizons. With a skill set that spans web development, 
                IT infrastructure, and cloud services, I am committed to continuous growth and innovation in this dynamic field.
            </p>

            {/* Skills Section */}
            <h2 className="text-3xl font-bold text-center text-[#001b5e] mb-8">Some of My Skills</h2>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 text-center">
                {/* First row */}
                <div className="shadow-lg p-4 rounded-lg hover:bg-gray-100 transition duration-300">
                    <FaJs size={40} className="mx-auto text-[#f7df1e]" />
                    <p className="mt-2">JavaScript</p>
                </div>
                <div className="shadow-lg p-4 rounded-lg hover:bg-gray-100 transition duration-300">
                    <FaPython size={40} className="mx-auto text-[#3776ab]" />
                    <p className="mt-2">Python</p>
                </div>
                <div className="shadow-lg p-4 rounded-lg hover:bg-gray-100 transition duration-300">
                    <SiLaravel size={40} className="mx-auto text-[#fb503b]" />
                    <p className="mt-2">Laravel</p>
                </div>
                <div className="shadow-lg p-4 rounded-lg hover:bg-gray-100 transition duration-300">
                    <FaJava size={40} className="mx-auto text-[#f89820]" />
                    <p className="mt-2">Java</p>
                </div>
                <div className="shadow-lg p-4 rounded-lg hover:bg-gray-100 transition duration-300">
                    <FaReact size={40} className="mx-auto text-[#61dbfb]" />
                    <p className="mt-2">React</p>
                </div>

                {/* Second row */}
                <div className="shadow-lg p-4 rounded-lg hover:bg-gray-100 transition duration-300">
                    <FaLinux size={40} className="mx-auto text-[#fbc12a]" />
                    <p className="mt-2">Linux</p>
                </div>
                <div className="shadow-lg p-4 rounded-lg hover:bg-gray-100 transition duration-300">
                    <FaGit size={40} className="mx-auto text-[#f34f29]" />
                    <p className="mt-2">Git</p>
                </div>
                <div className="shadow-lg p-4 rounded-lg hover:bg-gray-100 transition duration-300">
                    <FaDocker size={40} className="mx-auto text-[#0db7ed]" />
                    <p className="mt-2">Docker</p>
                </div>
                <div className="shadow-lg p-4 rounded-lg hover:bg-gray-100 transition duration-300">
                    <SiGooglecloud size={40} className="mx-auto text-[#4285f4]" />
                    <p className="mt-2">GCP</p>
                </div>
                <div className="shadow-lg p-4 rounded-lg hover:bg-gray-100 transition duration-300">
                    <SiPostgresql size={40} className="mx-auto text-[#336791]" />
                    <p className="mt-2">PostgreSQL</p>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
