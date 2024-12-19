import React from "react";

const ProjectItem = ({ img, title, githubLink, liveLink, skills = [] }) => {
    return (
        <div className="relative flex items-center justify-center h-[400px] w-full max-w-[400px] m-auto shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]">
        {/* Project Image */}
            <img
                src={img}
                alt={title}
                className="rounded-xl group-hover:opacity-10 w-full h-full object-cover"
            />

            {/* Hover Content */}
            <div className="hidden group-hover:flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                
                {/* Title */}
                <h3 className="text-2xl font-bold text-white tracking-wider text-center mb-4">
                {title}
                </h3>

                {/* Skills Icons */}
                <div className="flex space-x-4 mb-4">
                    {skills.map((SkillIcon, index) => (
                        <SkillIcon key={index} className="text-white w-6 h-6" />
                    ))}
                </div>


                {/* Buttons */}
                <div className="flex space-x-4">
                    {/* GitHub Button */}
                    <a
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-sm hover:bg-gray-300 transition duration-300"
                    >
                        GitHub
                </a>

                {/* Live Instance Button */}
                <a
                    href={liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-sm hover:bg-gray-300 transition duration-300"
                >
                    Live Demo
                </a>

                </div>
            </div>
        </div>
  );
};

export default ProjectItem;
