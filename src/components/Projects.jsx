import React from "react";
import ProjectItem from "./ProjectItem";
import { Carousel  } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/imgs/proj1.jpg';
import img2 from '../assets/imgs/proj2.jpg';
import img3 from '../assets/imgs/proj3.jpg';
import img5 from '../assets/imgs/proj5.jpg';


const projectCategories = {
    school: [
        { title: "school project 1", img: img1, link: "/school-project-1" },
        { title: "school project 2", img: img1, link: "/school-project-2" },
        { title: "school project 3", img: img1, link: "/school-project-3" },
        { title: "school project 4", img: img1, link: "/school-project-4" },
    ],
    games: [
        { title: "school project 1", img: img1, link: "/school-project-1" },
        { title: "school project 2", img: img1, link: "/school-project-2" },
        { title: "school project 3", img: img1, link: "/school-project-3" },
        { title: "school project 4", img: img1, link: "/school-project-4" },
    ],
    websites: [
        { title: "school project 1", img: img1, link: "/school-project-1" },
        { title: "school project 2", img: img1, link: "/school-project-2" },
        { title: "school project 3", img: img1, link: "/school-project-3" },
        { title: "school project 4", img: img1, link: "/school-project-4" },
    ],
    webApps: [
        { title: "school project 1", img: img1, link: "/school-project-1" },
        { title: "school project 2", img: img1, link: "/school-project-2" },
        { title: "school project 3", img: img1, link: "/school-project-3" },
        { title: "school project 4", img: img1, link: "/school-project-4" },
    ],
    Apps: [
        { title: "school project 1", img: img1, link: "/school-project-1" },
        { title: "school project 2", img: img1, link: "/school-project-2" },
        { title: "school project 3", img: img1, link: "/school-project-3" },
        { title: "school project 4", img: img1, link: "/school-project-4" },
    ]
}

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

const Projects = () => {
    const categories = Object.keys(projectCategories);  // Array of category keys (above).

    return (
        <div id='projects' className="max-w-[1200px] mx-auto p-4 py-16">
            <h1 className="text-4xl font-bold text-center text-[#001b5e]">
                Projects
            </h1>
            <p className='text-center py-8'>
                Do magna tempor ea sint eiusmod voluptate laboris fugiat id consequat. 
                Sit pariatur irure aliquip est. Tempor commodo ex adipisicing ea voluptate velit exercitation tempor.
                Exercitation commodo non dolor minim. Dolore ad sint reprehenderit tempor ipsum labore exercitation exercitation. 
                Excepteur aute commodo qui amet exercitation elit non. Ut sunt sunt ex pariatur quis ipsum occaecat.
            </p>
            <div className="bg-gray-100 p-8 rounded-lg w-full"> 
                <Carousel
                    showThumbs={false}
                    showStatus={false}
                    infiniteLoop={true}
                    autoPlay={false}
                    interval={6000}
                    showIndicators={true}
                    swipable={true}
                    renderArrowPrev={(onClickHandler, hasPrev) => 
                        hasPrev && <LeftArrow onClick={onClickHandler} />
                    }
                    renderArrowNext={(onClickHandler, hasNext) => 
                        hasNext && <RightArrow onClick={onClickHandler} />
                    }
                >
                    {categories.map((category, index) => {
                        const projectChunks = chunckProjects(projectCategories[category], 4);

                        return projectChunks.map((chunk, chunkIndex) => (
                            <div key={`${index}-${chunkIndex}`}>
                                <h2 className="text-3xl font-bold text-center text-[#001b5e mb-10">
                                    {category.charAt(0).toUpperCase() + category.slice(1)} Projects
                                </h2>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12 w-full">
                                    {chunk.map((project, idx) => (
                                        <ProjectItem key={idx} img={project.img} title={project.title} link={project.link} />
                                    ))}
                                </div>
                            </div>
                        ))
                    })}
                </Carousel>
            </div>
            <style jsx>{`
            .carousel .control-dots {
                position: absolute;
                bottom: -12px;
            }

            .carousel .control-dots .dot {
                background-color: #a0aec0;
            }

            .carousel .control-dots .dot.selected {
                background-color: #001b5e;
            }

        `}</style>
        </div>

    )
}

export default Projects;