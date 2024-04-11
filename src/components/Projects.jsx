import React from "react";
import ProjectItem from "./ProjectItem";
import img1 from '../assets/imgs/proj1.jpg';
import img2 from '../assets/imgs/proj2.jpg';
import img3 from '../assets/imgs/proj3.jpg';
import img5 from '../assets/imgs/proj5.jpg';


const Projects = () => {
    return (
        <div id='projects' className="max-w-[1040px] mx-auto p-4 py-16">
            <h1 className="text-4xl font-bold text-center text-[#001b5e]">
                Projects
            </h1>
            <p className='text-center py-8'>
                Do magna tempor ea sint eiusmod voluptate laboris fugiat id consequat. 
                Sit pariatur irure aliquip est. Tempor commodo ex adipisicing ea voluptate velit exercitation tempor.
                Exercitation commodo non dolor minim. Dolore ad sint reprehenderit tempor ipsum labore exercitation exercitation. 
                Excepteur aute commodo qui amet exercitation elit non. Ut sunt sunt ex pariatur quis ipsum occaecat.
            </p>
            <div className="grid sm:grid-cols-2 gap-12">
                <ProjectItem img={img1} />
                <ProjectItem img={img2} />
                <ProjectItem img={img3} />
                <ProjectItem img={img5} />
             </div>
        </div>
        
    )
}

export default Projects;