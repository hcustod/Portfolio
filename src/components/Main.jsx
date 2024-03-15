import React from 'react';
import myImage from '../assets/imgs/crane-background-2.jpg';
import { TypeAnimation } from 'react-type-animation';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Main = () => {
    return (
        <div id='main'>
            <img className='w-full h-screen object-cover object-left scale-x-1[-1]' src={myImage} alt='A picture should be here.'></img>
            {/*  A transparent layer to whiten the image above, for the background. */}
            <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>  
                <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center items-center lg:items-start '>
                    <h1 className='font-bold text-gray-800 p-0 sm:text-6xl text-5xl '> I'm Henrique Custodio, </h1>
                    <h2 children='flex sm:text-3xl text-2xl pt-4 text-gray-800'> 

                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'I\'m a developer.',
                                1000, // wait 1s before replacing.
                                'I\'m a creative thinker.',
                                1000,
                                'I\'m a fan of cheesy video games.',
                                1000,
                                'And I love cats.',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: '2em', display: 'inline-block'}}
                            repeat={Infinity}
                        />
                    </h2>

                    <div className='flex justify-start items-center space-x-4 pt-6'>
                        <FaGithub className='cursor-pointer' size={20} />
                        <FaLinkedinIn className="cursor-pointer" size={20} />
                    </div> 

                </div>
            </div>
        </div>
    )
}

export default Main

