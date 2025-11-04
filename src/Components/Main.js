import Logo from "./img/favicon.png"
import { useState,useRef } from "react";
import ExperienceComp from "./ExperienceComp";
import ProjectsComp from "./ProjectsComp"
import ContactMe from "./ContactMe"
import SkillsComp from "./SkillsComp"
import TechStackComp from "./TechStackComp";

const Main = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const projectsRef = useRef(null);
    const skillsRef = useRef(null);
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
        const headerOffset = 90; // height of sticky header (20rem)
        const elementPosition = projectsRef.current?.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        const rect = projectsRef.current.getBoundingClientRect();
        console.log("Projects: ", rect.top, rect.bottom);
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });

    };
    const scrollToSkills = () => {
        const headerOffset = 95; // height of sticky header (20rem)
        const elementPosition = skillsRef.current?.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        const rect = skillsRef.current.getBoundingClientRect();
        console.log("Skills: ", rect.top, rect.bottom);
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
    const scrollToContacts = () => {
        const headerOffset = 95; // height of sticky header (20rem)
        const elementPosition = contactsRef.current?.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        const rect = contactsRef.current.getBoundingClientRect();
        console.log("Contacts: ", rect.top, rect.bottom);
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });

    };

    return (
        <div className="bg-white dark:bg-black text-black dark:text-white font-[family-name: Supreme] ">
            <div className="sticky top-0 z-50 mx-auto flex justify-between md:h-20 h-12 bg-white dark:bg-black text-black dark:text-white min-w-100 w-5/5 md:w-12/12 md:my-auto shadow-md ">
                <ul className="my-auto">
                    <li>
                        <span className="flex flex-row ml-5">
                            <img src={Logo} alt="icon" className="h-8"/>
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
                    <li onClick={scrollToSkills}
                        className={`w-32 text-xs border text-center my-auto md:mx-4 hover:cursor-pointer px-4 py-2 rounded-md transition-all duration-200 ${
                            activeSection === 'skills'
                                ? 'bg-gradient-to-r  from-cyan-400 via-purple-500 to-pink-500 text-white border-transparent font-bold'
                                : 'border-gray-500 dark:border-white hover:bg-black hover:text-white dark:hover:text-black dark:hover:bg-white'
                            }`}
                    >Skills</li>

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
                    <ul className="flex flex-col bg-white dark:bg-black text-black dark:text-white text-sm absolute right-0 top-12 w-40 shadow-zinc-500 shadow-lg md:hidden z-50">
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
                        <li onClick={() => {
                                scrollToSkills();
                                setMenuOpen(false);
                            }}
                            className={`px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer
                            ${
                            activeSection === 'skills'
                                ? 'bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-white border-transparent font-bold'
                                : 'border-gray-500 dark:border-white hover:bg-black hover:text-white dark:hover:text-black dark:hover:bg-white'
                            }`}
                        >Skills</li>
                        <li onClick={() => {
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
                        <li onClick={() => {
                                setMenuOpen(false);
                                downloadCV()

                            }}
                        className="px-4 py-2 bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500 text-white">Download CV</li>
                    </ul>
                )}
            </div>
            <div className=" text-gray-500 dark:text-white  w-10/12 md:justify-between md:items-center mx-auto text-lg">
                <div className="mb-10 md:mb-20">
                    <p className="mt-5 md:mb-2 md:mt-10 text-xs md:text-xl">Hello, I am</p>
                    <h1 className="text-3xl md:mb-5  md:text-6xl bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500 inline-block text-transparent bg-clip-text py-5">Solomon Karabo Makgoba</h1>
                    <p className="text-xs md:text-xl">
                        an ambitious and detail-oriented Junior Software Developer with hands-on experience in AWS cloud tools, 
                        software development, and AI automation. I have a strong background in Python, C#, and JavaScript with exposure to cloud-based, 
                        full stack software development. Certified AWS Cloud Practitioner with proven ability to support cloud operations and follow corporate coding principles.
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
                <div ref={skillsRef}>
                    <SkillsComp/>
                </div>
                <div ref={contactsRef}>
                    <ContactMe/>
                </div>
                <TechStackComp/>



            </div>
        </div>
    );
}

export default Main;
