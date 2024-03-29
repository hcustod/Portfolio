import React, { useState } from "react";
import { AiOutlineHome, AiOutlineMenu, AiOutlineProject } from 'react-icons/ai';
import { RiMailSendLine } from "react-icons/ri";
import { VscAccount } from "react-icons/vsc";
import { GrProjects } from "react-icons/gr";

const Sidenav = () => {

    const [nav, setNav] = useState(false);
    const nav_item_size = 40;
    const button_class_name0 = "w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200";
    const button_class_name1 = "rounded-full shadow-lg bg-gray-100 shadow-gray-500 m-2 p-4 cursor-pointer hover:scale=110 ease-in duration-300 border-black border-2";

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div> 
            <AiOutlineMenu onClick={handleNav} className="absolute top-4 right-4 z-[99] md:hidden size-20" /> 
            {
                nav ? (

                    <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">

                        <a href="#main" onClick={handleNav} className={button_class_name0}>
                            <AiOutlineHome size={nav_item_size} />
                            <span className="pl-4"> Home </span>
                        </a>

                        <a href="#projects" onClick={handleNav} className={button_class_name0}>
                            <AiOutlineHome size={nav_item_size } />
                            <span className="pl-4"> Projects </span>
                        </a>

                        <a href="#aboutMe" onClick={handleNav} className={button_class_name0}>
                            <VscAccount size={nav_item_size } />
                            <span className="pl-4"> About Me </span>
                        </a>

                        <a href="#contact" onClick={handleNav} className={button_class_name0}>
                            <RiMailSendLine size={nav_item_size } />
                            <span className="pl-4"> Contact </span>
                        </a>

                    </div>

                ) : (
                    ''
                )}

                <div className="md:block hidden fixed top-1/2 -translate-y-1/2 z-10">
                    <div className="flex flex-col">
                        <a href="#main" className={button_class_name1}>
                            <AiOutlineHome size={nav_item_size} />
                        </a>
                        <a href="#projects" className={button_class_name1}>
                            <GrProjects size={nav_item_size} />
                        </a>
                        <a href="#aboutMe" className={button_class_name1}>
                            <VscAccount size={nav_item_size} />
                        </a>
                        <a href="#contact" className={button_class_name1}>
                            <RiMailSendLine size={nav_item_size} />
                        </a>
                    </div>
                </div>


        </div>
    );
};

export default Sidenav;
