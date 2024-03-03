import React from 'react'

const ProjectItem = ({img, title}) => {
    return (
        <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r'>
            <img src={img} alt='' />
        </div>
    )
}

export default ProjectItem