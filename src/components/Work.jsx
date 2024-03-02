import React from "react";
import WorkItem from "./WorkItem";

const PortData = {
    jobs: [
        {
            year: 2015,
            duration: "1 year",
            title: "Frontend Developer",
            company: "Tech Innovations Inc.",
            details: "Developed and maintained the front-end functionality of client websites."
        },
        {
            year: 2017,
            duration: "2 years",
            title: "UI/UX Designer",
            company: "Creative Solutions LLC",
            details: "Designed user interfaces and experiences for mobile and web applications."
        },
        {
            year: 2019,
            duration: "6 months",
            title: "Freelance Web Developer",
            company: "Self-employed",
            details: "Provided web development services for small businesses, focusing on responsive design."
        },
        {
            year: 2020,
            duration: "1.5 years",
            title: "Full Stack Developer",
            company: "Innovative Startups Inc.",
            details: "Worked on full-stack web development projects, from database management to front-end development."
        },
        {
            year: 2022,
            duration: "Present",
            title: "Lead Developer",
            company: "Global Tech Solutions",
            details: "Leading a team of developers in creating cutting-edge enterprise solutions."
        }
    ],
};

const Work = () => {
    return (
        <div id="work_comp" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className='text-4xl font-bold text-center text-[#001b5e]'> Work </h1>
            {PortData.jobs.map((item, idx) => (
                <WorkItem 
                    key={idx}
                    year={item.year}
                    title={item.title}
                    company={item.company}
                    duration={item.duration}
                    details={item.details}
                />
            ))}
        </div>
    );
};

export default Work;

