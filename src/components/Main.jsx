import React from 'react';
import myImage from '../assets/imgs/tommaso-teloni-Ti5BtG1NSpQ-unsplash.jpg';
import { TypeAnimation } from 'react-type-animation';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
    return (
        <div id='main'>
            <img className='w-full h-screen object-cover object-left scale-x-1[-1]' src={myImage} alt='A picture should be here?'></img>
            {/*  This is a transparent layer to whiten the image above, for the background. */}
            <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>  
                <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
                    <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'> I'm Henrique Custodio, </h1>
                    <h2 children='flex sm:text-3xl text-2xl pt-4 text-gray-800'> 
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'I\'m a developer.',
                                1000, // wait 1s before replacing.
                                'I\'m a man.',
                                1000,
                                'I\'m a son.',
                                1000,
                                'I\'m not a chicken.',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: '2em', display: 'inline-block', paddingLeft: '5px'}}
                            repeat={Infinity}
                        />
                    </h2>

                    <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                        <FaTwitter className="cursor-pointer" size={20} />
                        <FaFacebookF className="cursor-pointer" size={20} />
                        <FaInstagram className="cursor-pointer" size={20} />
                        <FaLinkedinIn className="cursor-pointer" size={20} />
                    </div> 

                </div>


            </div>


        </div>
    )
}

export default Main

