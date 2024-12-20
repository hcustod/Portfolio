import React, { useEffect, useState } from "react";
import { AiOutlineHome, AiOutlineMenu, AiOutlineProject } from 'react-icons/ai';
import { RiMailSendLine } from "react-icons/ri";
import { VscAccount } from "react-icons/vsc";
import { GrProjects } from "react-icons/gr";

const Sidenav = () => {

    const [nav, setNav] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const nav_item_size = 40;

    const button_class_mobile_base = "bg-opacity-80 text-blue-600 shadow-md w-[75%] flex justify-center items-center rounded-full bg-gray-100 shadow-slate-500 m-2 p-4 cursor-pointer ease-in duration-200";
    const button_class_desktop_base = "bg-opacity-80 text-blue-600 rounded-full shadow-md bg-gray-100 shadow-slate-400 m-2 p-4 cursor-pointer hover:scale=110 ease-in duration-300 border-black border-2";

    // Original class names for the desktop version, with dynamic color changes
    const button_class_desktop_default = `${button_class_desktop_base} bg-opacity-80 shadow-md bg-sky-50 text-blue-600 shadow-slate-400 hover:bg-sky-200 hover:text-white`; // default
    const button_class_desktop_transitionGrey = `${button_class_desktop_base} bg-opacity-80 shadow-md bg-sky-100 text-blue-600 bg-gray-200 shadow-slate-400 hover:bg-sky-200 hover:text-white`;
    const button_class_desktop_darkerGrey = `${button_class_desktop_base} bg-opacity-80 bg-sky-100 shadow-md text-blue-600 bg-gray-300 shadow-slate-400 hover:bg-sky-200 hover:text-white`; // off-grey for white background
  
    const handleNav = () => setNav(!nav);

    
    useEffect(() => {
        const updatePosition = () => {
            setScrollPosition(window.scrollY);
        };
        window.addEventListener("scroll", updatePosition);

        return () => window.removeEventListener("scroll", updatePosition);
    }, []);


    const getDesktopButtonClass = () => {
        if (scrollPosition > 800) {
            return button_class_desktop_darkerGrey;
        } else if (scrollPosition > 400) {
            return button_class_desktop_transitionGrey;
        } else {
            return button_class_desktop_default;
        }
    };

    return (
        <div> 

            <AiOutlineMenu onClick={handleNav} className="absolute top-4 right-4 z-[99] md:hidden size-20" /> 
            {
                nav && (

                    <div className="fixed w-full h-screen bg-white/90 flex  justify-center items-center z-2">

                        <a href="#main" onClick={handleNav} className={button_class_mobile_base}>
                            <AiOutlineHome size={nav_item_size} />
                            <span className="pl-4"> Home </span>
                        </a>

                        <a href="#projects" onClick={handleNav} className={button_class_mobile_base}>
                            <AiOutlineHome size={nav_item_size } />
                            <span className="pl-4"> Projects </span>
                        </a>

                        <a href="#aboutMe" onClick={handleNav} className={button_class_mobile_base}>
                            <VscAccount size={nav_item_size } />
                            <span className="pl-4"> About Me </span>
                        </a>

                        <a href="#contact" onClick={handleNav} className={button_class_mobile_base}>
                            <RiMailSendLine size={nav_item_size } />
                            <span className="pl-4"> Contact </span>
                        </a>

                    </div>
                )}

                <div className="md:block hidden fixed top-1/2 -translate-y-1/2 z-10">
                    <div className="flex flex-col">
                        <a href="#main" className={getDesktopButtonClass()}>
                            <AiOutlineHome size={nav_item_size} />
                        </a>
                        <a href="#projects" className={getDesktopButtonClass()}>
                            <GrProjects size={nav_item_size} />
                        </a>
                        <a href="#aboutMe" className={getDesktopButtonClass()}>
                            <VscAccount size={nav_item_size} />
                        </a>
                        <a href="#contact" className={getDesktopButtonClass()}>
                            <RiMailSendLine size={nav_item_size} />
                        </a>
                    </div>
                </div>

        </div>
    );
};

export default Sidenav;
