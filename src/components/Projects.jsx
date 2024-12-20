import React, { useState } from "react";
import ProjectItem from "./ProjectItem";
import { FaReact, FaJsSquare, FaDatabase } from "react-icons/fa";
import img1 from "../assets/imgs/proj1.jpg";
import img2 from "../assets/imgs/proj2.jpg";
import img3 from "../assets/imgs/proj3.jpg";
import img4 from "../assets/imgs/proj4.jpg";

const projects = [
  { 
    title: "Portfolio Website",
    category: "Web Application", 
    img: img1, 
    githubLink: "/portfolio-website",
    liveLink: "",
    skills: [FaReact, FaJsSquare, FaDatabase]
  },
  { 
    title: "Task Management App",
    category: "Web Application", 
    img: img1, 
    githubLink: "/portfolio-website",
    liveLink: "",
    skills: [FaReact, FaJsSquare, FaDatabase]
  },
  { 
    title: "Invoice Parser",
    category: "System Tools", 
    img: img1, 
    githubLink: "/portfolio-website",
    liveLink: "",
    skills: [FaReact, FaJsSquare, FaDatabase]
  },
  { 
    title: "E-Commerce Site",
    category: "Web Applications", 
    img: img1, 
    githubLink: "/portfolio-website",
    liveLink: "",
    skills: [FaReact, FaJsSquare, FaDatabase]
  },
  { 
    title: "Beer Rating App",
    category: "Web Application", 
    img: img1, 
    githubLink: "/portfolio-website",
    liveLink: "",
    skills: [FaReact, FaJsSquare, FaDatabase]
  },
  { 
    title: "NES Mario Clone",
    category: "Game Development", 
    img: img1, 
    githubLink: "/portfolio-website",
    liveLink: "",
    skills: [FaReact, FaJsSquare, FaDatabase]
  },
];

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState(""); // Search term state
  const [selectedCategory, setSelectedCategory] = useState("All"); // Category filter state

  const categories = ["All", "Web Development", "Web Applications", "System Tools", "Game Development"];

  // Filter projects by category and search term
  const filteredProjects = projects.filter((project) =>
    (selectedCategory === "All" || project.category === selectedCategory) &&
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div id="projects" className="max-w-[1400px] mx-auto p-4 py-16">
      {/* Title */}
        <h1 className="text-6xl font-bold text-center text-[#001b5e] mb-8 mt-8">Projects</h1>

        <p className="text-center max-w-[1200px] mx-auto mb-8 "> 
            Below are some of my projects 
            which highlight my work and expertise across a variety of modern programming technologies. 
            Projects can be searched for by name and filtered by their category, with each card including links to its codebase 
            and live application where available. For more of my work, please explore my GitHub.
        </p>
    
    <div className="border-2 border-gray-200 p-4 rounded-lg shadow-inner bg-slate-50">
      {/* Search Bar */}
      <div className="flex justify-center mb-6">
            <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border rounded-md px-4 py-2 w-full max-w-[400px] shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-300"
            />
        </div>

      
      {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-8">
        {categories.map((category) => (
            <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 border rounded ${
                selectedCategory === category ? "bg-sky-200 text-white" : "bg-sky-50 text-blue-600"
            } transition-all duration-300 hover:bg-sky-200 hover:text-white`}
            >
            {category}
            </button>
        ))}
        </div>


      {/* Projects Display */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
                <ProjectItem 
                  key={index} 
                  img={project.img} 
                  title={project.title} 
                  githubLink={project.githubLink}
                  liveLink={project.liveLink}
                  skills={project.skills} />
            ))
            ) : (
            <p className="col-span-3 text-center text-gray-500">No projects found.</p>
            )}
        </div>

    </div>

    </div>
  );
};

export default Projects;

/*
// The two arrows are components; thus must be capitalized. 
const LeftArrow = ({ onClick }) => (
    <button 
        onClick={onClick}
        className="hidden md:block absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white h-16 w-10 z-10 shadow-lg rounded hover:bg-gray-600">
        &#8592;
    </button>
);

const RightArrow = ({ onClick }) => (
    <button 
        onClick={onClick}
        className="hidden md:block absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white h-16 w-10 z-10 shadow-lg rounded hover:bg-gray-600">
        &#8594;
    </button>
);

const chunckProjects = (project, size) => {
    const chunks = [];
    for (let i  = 0; i < project.length; i += size) {
        chunks.push(project.slice(i, i + size));
    }
    return chunks;
}

*/


