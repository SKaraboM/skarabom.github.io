import Logo from "./img/favicon.png"
import React, { useState } from "react";

const Main = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div class="bg-white dark:bg-black">
            <div class="relative bg-white dark:bg-black text-black dark:text-white font-[family-name: Supreme] flex flex-col md:items-center" >
                <div className="NavBar" class="flex justify-between h-20 bg-white dark:bg-black text-black dark:text-white min-w-100 lg:w-4/5 md:my-auto">
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
                        <li className="w-32 text-xs border border-gray-500 dark:border-white text-center my-auto md:mx-4 hover:bg-white hover:text-black px-4 py-2 rounded-md">Projects</li>
                        <li className="w-32 text-xs border border-gray-500 dark:border-white text-center my-auto md:mx-4 hover:bg-white hover:text-black px-4 py-2 rounded-md">Contact Me</li>
                        <li className="w-32 text-xs border border-gray-500 dark:border-white text-center my-auto md:mx-4 hover:bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500 hover:text-white px-4 py-2 rounded-md">Download CV</li>
                    </ul>
                    {menuOpen && (
                        <ul className="flex flex-col bg-white dark:bg-black text-black dark:text-white text-sm absolute right-0 top-20 w-40 shadow-lg md:hidden z-50">
                            <li className="px-4 py-2">Projects</li>
                            <li className="px-4 py-2">Contact Me</li>
                            <li className="px-4 py-2">Download CV</li>
                        </ul>
                    )}
                </div>
                
            </div>
            <div className="body" class=" text-gray-500 dark:text-white w-4/5 md:justify-between md:items-center mx-auto text-lg">
                <div class="mb-10 md:mb-20">
                    <p class="mt-10 md:mt-36 mb-5">Hi, I am</p>
                    <h1 class="mb-5 text-5xl md:text-8xl bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500 inline-block text-transparent bg-clip-text">Solomon Makgoba</h1>
                    <p class="text-sm md:text-xl">
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
                    <h4 class="bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500 inline-block text-transparent bg-clip-text mb-4">EXPERIENCE: </h4>
                    <div class="mb-10">
                        <ul className="flex-row md:flex md:static md:flex-row md:items-center hidden">
                            <li className="w-48 text-xs border border-gray-500 dark:border-white text-center my-auto md:mx-4 hover:bg-white hover:text-black px-4 py-3 rounded-md">BMW Group SA</li>
                            <li className="w-48 text-xs border border-gray-500 dark:border-white text-center my-auto md:mx-4 hover:bg-white hover:text-black px-4 py-3 rounded-md">University Of Johannesburg</li>
                            <li className="w-48 text-xs border border-gray-500 dark:border-white text-center my-auto md:mx-4 hover:bg-white hover:text-black px-4 py-3 rounded-md">University Of Johannesburg</li>
                        </ul>
                    </div>
                    <div class="mb-10 ml-5">
                        <h1>Role</h1>
                        <p>Start Date - End Date</p>
                        <p>Company - location</p>
                        <p>Role and responsibilities</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
