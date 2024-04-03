import React, { useEffect, useState, useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import ResumeButton from "./ResumeButton.jsx";

// These should always remain the same - unsure if local env variables therefore necessary. 
const LinkedIn_link = 'www.linkedin.com/in/henrique-custodio-71954a1a6';
const Github_link = 'https://github.com/hcustod';

import background0 from '../assets/imgs/crane-background-0.jpg';
import background1 from '../assets/imgs/crane-background-1.jpg';
import background2 from '../assets/imgs/crane-background-2.jpg';
import background3 from '../assets/imgs/crane-background-3.jpg';
import background4 from '../assets/imgs/crane-background-4.jpg';
import background5 from '../assets/imgs/crane-background-5.jpg';


const backgrounds = [
    background0,
    background1,
    background2,
    background3,
    background4,
    background5
];

function preloadImages(images) {
    images.forEach((image) => {
        const img = new Image();
        img.src = image;
    });
}

function getRandomIndex(exclude, length) {
    let randomIndex = Math.floor(Math.random() * length);
    while (randomIndex === exclude) {
        randomIndex = Math.floor(Math.random() * length);
    }
    return randomIndex;
}

const Main = () => {

    const [ opacity, setOpacity ] = useState(1);
    const currentBackgroundIndex =useRef(0);

    useEffect(() => {
        preloadImages(backgrounds);

        const changeBackground = setInterval(() => {
            const nextIndex = getRandomIndex(currentBackgroundIndex.current, backgrounds.length);
            setOpacity(0);

            setTimeout(() => {
                currentBackgroundIndex.current = nextIndex;
                setTimeout(() => {
                    setOpacity(1);
                }, 500); // Delay before starting to fade in the next image
            }, 2500); // Wait for the current image to fully fade out
        }, 8000); // Interval for changing the background

        return () => clearInterval(changeBackground);
    },[]);

    return (
        <div id='main' style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden'}}>

            {/* Background Image */}
            <img className='w-full h-full object-cover absolute top-0 left-0' src={backgrounds[currentBackgroundIndex.current]} style={{ opacity, transition: 'opacity 3s ease-in-out' }} alt='A picture should be here.'></img>

            {/*  A transparent layer to whiten the image above, for the background. */}
            <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>  
            
                <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center items-center lg:items-start'>
                    <h1 className='font-bold text-gray-800 p-0 sm:text-6xl text-center text-5xl '> I'm Henrique Custodio, </h1>
                    
                    <div children='flex sm:text-3xltext-gray-800'> 

                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'I\'m a developer,',
                                1000, // wait 1s before replacing.
                                'I\'m a systems admin,',
                                1000,
                                'I\'m a gamer,',
                                1000,
                                'I\'m a big fan of cranes,',
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

export default Main;

