import React from "react";

const Projects = () => {
    return (
        <div id='projects' className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl font-bold text-center text-[#001b5e]">
                Projects
            </h1>
            <p className='text-4xl font-bold text-center text-[#001b5e]'>
                Do magna tempor ea sint eiusmod voluptate laboris fugiat id consequat. 
                Sit pariatur irure aliquip est. Tempor commodo ex adipisicing ea voluptate velit exercitation tempor.
                Exercitation commodo non dolor minim. Dolore ad sint reprehenderit tempor ipsum labore exercitation exercitation. 
                Excepteur aute commodo qui amet exercitation elit non. Ut sunt sunt ex pariatur quis ipsum occaecat.
            </p>
            <div className="grid sm:grid-cols-2 gap-12">
                <ProjectItem />
                <ProjectItem />
                <ProjectItem />
                <ProjectItem />
             </div>
        </div>
        
    )
}

export default Projects;