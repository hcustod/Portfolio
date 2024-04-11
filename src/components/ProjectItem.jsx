import React from 'react'

const ProjectItem = ({img, title}) => {
    return (

        <div className='relative flex items-center justify-center h-[400px] w-full max-w-[400px] m-auto shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]'>
            <img src={img} alt='' className='rounded-xl group-hover:opacity-10 w-full h-full object-cover'/>
            <div className='hidden group-hover:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <h3 className='text-2xl font-bold text-white tracking-wider text-center'>
                    {title}
                </h3>
                <p className='pb-4 pt-2 text-white text-center'> React Js </p>
                <a href='/'>
                    <p className='text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg'> More Info </p>
                </a>
            </div>
        </div>

    )
}

export default ProjectItem;