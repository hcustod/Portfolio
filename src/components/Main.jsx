import React from 'react';
import myImage from '../assets/imgs/crane-background-2.jpg';
import { TypeAnimation } from 'react-type-animation';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import ResumeButton from "./ResumeButton.jsx";

const Main = () => {
    return (
        <div id='main'>
            <img className='w-full h-screen object-cover object-left scale-x-1[-1]  shadow-lg shadow-gray-200' src={myImage} alt='A picture should be here.'></img>
            {/*  A transparent layer to whiten the image above, for the background. */}
            <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>  
            
                <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center items-center lg:items-start'>
                    <h1 className='font-bold text-gray-800 p-0 sm:text-6xl text-center text-5xl '> I'm Henrique Custodio, </h1>
                    <div children='flex sm:text-3xltext-gray-800'> 

                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'I\'m a developer.',
                                1000, // wait 1s before replacing.
                                'I\'m a systems administrator.',
                                1000,
                                'I\'m a fan of cheesy video games.',
                                1000,
                                'And I love cats.',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: '3em', display: 'inline-block', paddingLeft: '1rem'}}
                            repeat={Infinity}
                        />
                    </div>

                    <div className='flex justify-start items-center space-x-4 pt-6 pl-8'>
                        <FaGithub className='cursor-pointer' size={30} />
                        <FaLinkedinIn className="cursor-pointer" size={30} />
                    </div> 

                    <div className='flex justify-start items-center space-x-4 pt-3 pl-8'>  
                        <ResumeButton />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Main

