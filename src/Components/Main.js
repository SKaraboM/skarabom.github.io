import Logo from "./img/favicon.png"
import React, { useState } from "react";

const Main = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeCompany, setActiveCompany] = useState(0);
    return (
        <div class="bg-white dark:bg-black text-black dark:text-white font-[family-name: Supreme] ">
            <div className="NavBar " class="sticky top-0 z-50 mx-auto flex justify-between h-20 bg-white dark:bg-black text-black dark:text-white min-w-100 w-5/5 md:w-5/6 md:my-auto ">
                <ul class="my-auto">
                    <li>
                        <span class="flex flex-row">
                            <img src={Logo} alt="icon" class="h-10"/>
                            <span class="my-auto ml-5"></span>
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
                    <li className="w-32 text-xs border border-gray-500 dark:border-white text-center my-auto md:mx-4 hover:bg-black hover:text-white dark:hover:text-black dark:hover:bg-white hover:cursor-pointer px-4 py-2 rounded-md">Projects</li>
                    <li className="w-32 text-xs border border-gray-500 dark:border-white text-center my-auto md:mx-4 hover:bg-black hover:text-white dark:hover:text-black dark:hover:bg-white hover:cursor-pointer px-4 py-2 rounded-md">Contact Me</li>
                    <li className="w-32 text-xs border border-gray-500 dark:border-white text-center my-auto md:mx-4 hover:bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500 hover:cursor-pointer hover:text-white px-4 py-2 rounded-md">Download CV</li>
                </ul>
                {menuOpen && (
                    <ul className="flex flex-col bg-white dark:bg-black text-black dark:text-white text-sm absolute right-0 top-20 w-40 shadow-lg md:hidden z-50">
                        <li className="px-4 py-2">Projects</li>
                        <li className="px-4 py-2">Contact Me</li>
                        <li className="px-4 py-2">Download CV</li>
                    </ul>
                )}
            </div>
            <div className="body" class=" text-gray-500 dark:text-white  w-5/6 md:justify-between md:items-center mx-auto text-lg">
                <div class="mb-10 md:mb-20">
                    <p class="mt-5 md:mb-2 md:mt-10 text-xs md:text-xl">Hello, I am</p>
                    <h1 class="text-3xl md:mb-5  md:text-7xl bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500 inline-block text-transparent bg-clip-text py-5">Solomon Makgoba</h1>
                    <p class="text-xs md:text-xl">
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
                
                <div className="hidden md:flex md:flex-col">
                    <h4 class="bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500 inline-block text-transparent bg-clip-text mb-5">EXPERIENCE: </h4>
                    <div class="mb-10 items-start">
                        <ul className="flex-row md:flex md:static md:flex-row hidden ">
                            <li onClick={() => {setActiveCompany(0)}} className={`w-52 text-xs text-center md:mr-2 px-4 py-3 rounded-md cursor-pointer transition-all duration-200 ${
                                activeCompany === 0 
                                    ? 'bg-black dark:bg-white text-white dark:text-black border-transparent' 
                                    : 'border-gray-500 dark:border-white hover:bg-white hover:text-black'
                            }`}>BMW Group SA</li>
                            <li onClick={() => {setActiveCompany(1)}} className={`w-52 text-xs text-center md:mx-2 px-4 py-3 rounded-md cursor-pointer transition-all duration-200 ${
                                activeCompany === 1 
                                    ? 'bg-black dark:bg-white text-white dark:text-black border-transparent' 
                                    : 'border-gray-500 dark:border-white hover:bg-white hover:text-black'
                            }`}>University Of Johannesburg 1</li>
                            <li onClick={() => {setActiveCompany(2)}} className={`w-52 text-xs text-center md:mx-2 px-4 py-3 rounded-md cursor-pointer transition-all duration-200 ${
                                activeCompany === 2 
                                    ? 'bg-black dark:bg-white text-white dark:text-black border-transparent' 
                                    : 'border-gray-500 dark:border-white hover:bg-white hover:text-black'
                            }`}>University Of Johannesburg 2</li>
                        </ul>
                    </div>
                    {activeCompany === 0 ? (
                        <div class="mb-52">
                            <p class="text-4xl mb-3">Graduate Software Developer</p>
                            <span class="flex justify-between text-sm text-blue-500 mb-3">
                                <p>BMW Group South Africa - Pretoria</p>
                                <p>01 Feb 2024 - Present</p>
                            </span>
                            <p>
                                Responsible for innovation and digitalization in the security department at BMW Plant Rosslyn:<br/>
                                Worked on computer vision AI development and integration to
                                CCTV surveillance systems.<br/>
                                Various mobile applications and web applications for digitalization within the security department.
                            </p>
                        </div>
                        ) : activeCompany === 1 ? 
                        (
                            <div class="mb-52">
                                <p class="text-4xl mb-3">Development Software A1 Tutor</p>
                                <span class="flex justify-between  text-sm text-blue-500 mb-3">
                                    <p>University Of Johannesburg - Johannesburg</p>
                                    <p>01 Jul 2023 - 31 Dec 2023</p>
                                </span>
                                <p>Teaching and guiding individuals in learning and understanding basic programming concepts, with a
                                    focus on Object-Oriented Programming (OOP) concepts in Python and
                                    C#.
                                </p>
                            </div>
                        ) : (
                            <div class="mb-52">
                                <p class="text-4xl mb-3">Student Front End Developer</p>
                                <span class="flex justify-between  text-sm text-blue-500 mb-3">
                                    <p>University Of Johannesburg - Johannesburg</p>
                                    <p>01 Jun 2022 - 31 Nov 2022</p>
                                </span>
                                <p>
                                    I collaborated with a Project Manager and UI/UX designers to transform Figma designs into
                                    functional and user friendly websites. Using JavaScript and ReactJS.
                                </p>
                            </div>
                        ) 
                    }
                    
                </div>
                <div class="md:hidden flex flex-col">
                    <h4 class="text-md bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500 inline-block text-transparent bg-clip-text mb-5">Experience</h4>
                     <div class="mb-10 border-r border-b rounded-xl border-gray-300 dark:border-gray-700 p-5">
                        <p class="text-2xl mb-3">Graduate Software Developer</p>
                        <p class="text-xs text-blue-500">BMW Group South Africa - Pretoria</p>
                        <p class="text-xs mb-3">01 Feb 2024 - Present</p>
                        <p class="text-xs mb-3">
                            Responsible for innovation and digitalization in the security department at BMW Plant Rosslyn:<br/>
                            Worked on computer vision AI development and integration to
                            CCTV surveillance systems.<br/>
                            Various mobile applications and web applications for digitalization within the security department.
                        </p>
                    </div>
                    <div class="mb-10 border-r border-b rounded-xl border-gray-300 dark:border-gray-700 p-5">
                        <p class="text-2xl mb-3">Development Software A1 Tutor</p>
                        <p class="text-xs text-blue-500">University Of Johannesburg - Johannesburg</p>
                        <p class="text-xs mb-3">01 Jul 2023 - 31 Dec 2023</p>
                        <p class="text-xs mb-3">
                            Teaching and guiding individuals in learning and understanding basic programming concepts, with a
                            focus on Object-Oriented Programming (OOP) concepts in Python and
                            C#.
                        </p>
                    </div>
                    <div class="mb-10 border-r border-b rounded-xl border-gray-300 dark:border-gray-700 p-5">
                        <p class="text-2xl mb-3">Student Front End Developer</p>
                        <p class="text-xs text-blue-500">University Of Johannesburg - Johannesburg</p>
                        <p class="text-xs mb-3">01 Jun 2022 - 31 Nov 2022</p>
                        <p class="text-xs mb-3">
                            Teaching and guiding individuals in learning and understanding basic programming concepts, with a
                            focus on Object-Oriented Programming (OOP) concepts in Python and
                            C#.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
