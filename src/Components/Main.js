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
                <p class="mt-10 md:mt-40 mb-5">Hi, I am</p>
                <h1 class="mb-5 text-6xl md:text-8xl bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500 inline-block text-transparent bg-clip-text">Solomon Makgoba</h1>
                    <p>
                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </p>
            </div>
        </div>
    );
}

export default Main;
