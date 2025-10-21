import Logo from "./img/favicon.png"
import React, { useEffect, useState,useRef } from "react";
import ExperienceComp from "./ExperienceComp";
import ProjectsComp from "./ProjectsComp"
import ContactMe from "./ContactMe"

const Main = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const projectsRef = useRef(null);
    const contactsRef = useRef(null);

    // Scroll to projects section
    const downloadCV = () => {
        const link = document.createElement('a');
        link.href = '/assets/resume.pdf';
        link.download = 'Solomon_Makgoba_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    const scrollToProjects = () => {
        projectsRef.current?.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });

        console.log(activeSection)
    };
    const scrollToContacts = () => {
        contactsRef.current?.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });

        console.log(activeSection)
    };

    // Check which section is in view
    useEffect(() => {
        const handleScroll = () => {
            if (projectsRef.current) {
                const rect = projectsRef.current.getBoundingClientRect();
                const isInView = rect.top <=300 && rect.bottom >= 500;
                
                if (isInView) {
                    setActiveSection('projects');
                } else {
                    setActiveSection('');
                }
            }
            if (contactsRef.current) {
                const rect = contactsRef.current.getBoundingClientRect();
                const isInView = rect.top <=300 && rect.bottom >= 500;
                
                if (isInView) {
                    setActiveSection('contact_me');
                } else {
                    setActiveSection('');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    
    return (
        <div className="bg-white dark:bg-black text-black dark:text-white font-[family-name: Supreme] ">
            <div className="sticky top-0 z-50 mx-auto flex justify-between h-20 bg-white dark:bg-black text-black dark:text-white min-w-100 w-5/5 md:w-12/12 md:my-auto rounded-b-2xl shadow-md ">
                <ul className="my-auto">
                    <li>
                        <span className="flex flex-row ml-5">
                            <img src={Logo} alt="icon" className="h-10"/>
                            <span className="my-auto ml-5"></span>
                        </span>
                    </li>
                </ul>
                <div className="flex justify-end items-center md:hidden">
                    <button
                        className="p-2"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className="block w-6 h-0.5 bg-black dark:bg-white mb-1"></span>
                        <span className="block w-6 h-0.5 bg-black dark:bg-white mb-1"></span>
                        <span className="block w-6 h-0.5 bg-black dark:bg-white"></span>
                    </button>
                </div>
                <ul className="flex-row md:flex md:static md:flex-row md:items-center hidden">
                    <li onClick={scrollToProjects}
                        className={`w-32 text-xs border text-center my-auto md:mx-4 hover:cursor-pointer px-4 py-2 rounded-md transition-all duration-200 ${
                            activeSection === 'projects'
                                ? 'bg-gradient-to-r  from-cyan-400 via-purple-500 to-pink-500 text-white border-transparent font-bold'
                                : 'border-gray-500 dark:border-white hover:bg-black hover:text-white dark:hover:text-black dark:hover:bg-white'
                            }`}
                    >Projects</li>

                    <li onClick={scrollToContacts}
                    className={`w-32 text-xs border text-center my-auto md:mx-4 hover:cursor-pointer px-4 py-2 rounded-md transition-all duration-200 ${
                            activeSection === 'contact_me'
                                ? 'bg-gradient-to-r  from-cyan-400 via-purple-500 to-pink-500 text-white border-transparent font-bold'
                                : 'border-gray-500 dark:border-white hover:bg-black hover:text-white dark:hover:text-black dark:hover:bg-white'
                            }`}
                    >Let's Connect</li>
                     
                    <li 
                    onClick={() => downloadCV()}
                     
                    className="w-32 text-xs border border-gray-700 dark:border-white hover:border-2 text-center my-auto md:mx-4 bg-gradient-to-r text-white from-purple-500 via-cyan-400 to-pink-500 hover:cursor-pointer hover:text-white  px-4 py-2 rounded-md">Download CV</li>
                </ul>
                {menuOpen && (
                    <ul className="flex flex-col bg-white dark:bg-black text-black dark:text-white text-sm absolute right-0 top-20 w-40 shadow-lg md:hidden z-50">
                        <li onClick={() => {
                                scrollToProjects();
                                setMenuOpen(false);
                            }}
                            className={`px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer
                            ${
                            activeSection === 'projects'
                                ? 'bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-white border-transparent font-bold'
                                : 'border-gray-500 dark:border-white hover:bg-black hover:text-white dark:hover:text-black dark:hover:bg-white'
                        }`}
                        >Projects</li>
                        <li 
                        onClick={() => {
                            scrollToContacts();
                            setMenuOpen(false);
                        }}
                        className={`px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer
                        ${
                        activeSection === 'projects'
                            ? 'bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-white border-transparent font-bold'
                            : 'border-gray-500 dark:border-white hover:bg-black hover:text-white dark:hover:text-black dark:hover:bg-white'
                        }`}
                        
                        >Let's Connect</li>
                        <li 
                        onClick={() => {
                            setMenuOpen(false);
                            downloadCV()

                        }}
                        className="px-4 py-2 bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500">Download CV</li>
                    </ul>
                )}
            </div>
            <div className=" text-gray-500 dark:text-white  w-10/12 md:justify-between md:items-center mx-auto text-lg">
                <div className="mb-10 md:mb-20">
                    <p className="mt-5 md:mb-2 md:mt-10 text-xs md:text-xl">Hello, I am</p>
                    <h1 className="text-3xl md:mb-5  md:text-6xl bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500 inline-block text-transparent bg-clip-text py-5">Solomon Makgoba</h1>
                    <p className="text-xs md:text-xl">
                        A Junior Software Developer with a passion for building smart, practical, and innovative solutions. 
                        My journey has taken me from transforming Figma designs into interactive web apps to integrating 
                        AI-powered computer vision into security systems at BMW Group SA.           
                        With skills spanning Python, JavaScript, React, AWS, and AI frameworks, 
                        I enjoy creating tools that make life easier, businesses smarter, and systems more secure. 
                        I thrive in collaborative environments, but I’m equally driven when exploring new technologies and pushing myself to grow.
                    <br />
                    <br />
                        What excites me most about tech is its power to shape the future—and I’m here to be part of that future by crafting solutions that are impactful, scalable, and human-centered.
                        I am always eager to learn and adapt, and I believe that my diverse skill set allows me to tackle challenges from multiple angles.
                    </p>
                </div>
                <ExperienceComp/>
                 <div ref={projectsRef}>
                    <ProjectsComp/>
                </div>
                <div ref={contactsRef}>
                    <ContactMe/>
                </div>


            </div>
        </div>
    );
}

export default Main;
