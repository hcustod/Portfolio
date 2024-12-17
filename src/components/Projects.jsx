import React, { useState } from "react";
import ProjectItem from "./ProjectItem";
import img1 from "../assets/imgs/proj1.jpg";
import img2 from "../assets/imgs/proj2.jpg";
import img3 from "../assets/imgs/proj3.jpg";
import img4 from "../assets/imgs/proj4.jpg";

const projects = [
  { title: "Portfolio Website", category: "Web Development", img: img1, link: "/portfolio-website" },
  { title: "Task Management App", category: "Web Applications", img: img2, link: "/task-manager" },
  { title: "Invoice Parser", category: "System Tools", img: img3, link: "/invoice-parser" },
  { title: "NES Mario Clone", category: "Game Development", img: img4, link: "/nes-mario" },
  { title: "E-Commerce Site", category: "Web Development", img: img1, link: "/ecommerce-site" },
  { title: "Beer Rating App", category: "Web Applications", img: img2, link: "/beer-rating" },
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
    <div id="projects" className="max-w-[1200px] mx-auto p-4 py-16">
      {/* Title */}
        <h1 className="text-6xl font-bold text-center text-[#001b5e] mb-8 mt-8">Projects</h1>

        <p className="text-center mb-8"> 
            Below are some of my projects 
            which highlight my work and expertise across a variety of modern programming technologies. 
            Projects can be searched for by name and filtered by their category, with each card including links to its codebase 
            and live application where available. For more of my work, please explore my GitHub.
        </p>

      {/* Search Bar */}
        <div className="flex justify-center mb-6">
            <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border rounded-md px-4 py-2 w-full max-w-[400px] shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
        </div>

      
      {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-8">
        {categories.map((category) => (
            <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 border rounded ${
                selectedCategory === category ? "bg-blue-500 text-white" : "bg-gray-200"
            } transition-all duration-300 hover:bg-blue-300`}
            >
            {category}
            </button>
        ))}
        </div>


      {/* Projects Display */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
                <ProjectItem key={index} img={project.img} title={project.title} link={project.link} />
            ))
            ) : (
            <p className="col-span-3 text-center text-gray-500">No projects found.</p>
            )}
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


