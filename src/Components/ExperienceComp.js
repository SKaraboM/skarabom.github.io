
const ExperienceComp = () => {
    return(
        <>
            <div className="hidden md:flex md:flex-col">
                <h4 className="bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500 inline-block text-transparent bg-clip-text mb-8">EXPERIENCE</h4>
                {/* Timeline container */}
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-cyan-400 to-pink-500"></div>
                    
                    {/* Timeline items */}
                    <div className="space-y-12">
                        {/* BMW Group SA */}
                        <div className="relative flex items-start w-full">
                            {/* Timeline dot */}
                            <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500 rounded-full border-4 border-white dark:border-black"></div>
                            
                            {/* Content */}
                            <div className="ml-16">
                                <div className="bg-white dark:bg-gray-900 p-6 w-auto rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
                                    <p className="text-2xl font-bold mb-2">Graduate Software Developer</p>
                                    <div className="flex justify-between items-center text-sm text-blue-500 mb-3">
                                        <p>BMW Group South Africa - Pretoria</p>
                                        <p className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">01 February 2024 - Present</p>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-300 text-xl">
                                        Responsible for innovation and digitalization in the security department at BMW Plant Rosslyn.
                                        Worked on computer vision AI development and integration to CCTV surveillance systems.
                                        Various mobile applications and web applications for digitalization within the security department.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* University Of Johannesburg 1 */}
                        <div className="relative flex items-start w-full">
                            {/* Timeline dot */}
                            <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500 rounded-full border-4 border-white dark:border-black"></div>
                            {/* Content */}
                            <div className="ml-16  w-full">
                                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
                                    <p className="text-2xl font-bold mb-2">Development Software A1 Tutor</p>
                                    <div className="flex justify-between items-center text-sm text-blue-500 mb-3">
                                        <p>University Of Johannesburg - Johannesburg</p>
                                        <p className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">01 Jul 2023 - 31 Dec 2023</p>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-300 text-xl">
                                        Teaching and guiding individuals in learning and understanding basic programming concepts, with a
                                        focus on Object-Oriented Programming (OOP) concepts in Python and C#.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* University Of Johannesburg 2 */}
                        <div className="relative flex items-start w-ful">
                            {/* Timeline dot */}
                            <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500 rounded-full border-4 border-white dark:border-black"></div>
                            
                            {/* Content */}
                            <div className="ml-16 w-full">
                                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
                                    <p className="text-2xl font-bold mb-2">Student Front End Developer</p>
                                    <div className="flex justify-between items-center text-sm text-blue-500 mb-3">
                                        <p>University Of Johannesburg - Johannesburg</p>
                                        <p className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">01 Jun 2022 - 31 Nov 2022</p>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-300 text-xl">
                                        I collaborated with a Project Manager and UI/UX designers to transform Figma designs into
                                        functional and user friendly websites. Using JavaScript and ReactJS.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile timeline */}
            <div className="md:hidden flex flex-col">
                <h4 className="text-lg bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500 inline-block text-transparent bg-clip-text mb-6">Experience</h4>
                
                {/* Mobile timeline container */}
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-cyan-400 to-pink-500"></div>
                    
                    {/* Timeline items */}
                    <div className="space-y-8">
                        {/* BMW Group SA */}
                        <div className="relative flex items-start">
                            <div className="absolute left-2.5 w-3 h-3 bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500 rounded-full border-2 border-white dark:border-black"></div>
                            <div className="ml-10">
                                <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow border border-gray-200 dark:border-gray-700">
                                    <p className="text-lg font-bold mb-2">Graduate Software Developer</p>
                                    <p className="text-xs text-blue-500">BMW Group South Africa - Pretoria</p>
                                    <p className="text-xs mb-2 bg-blue-100 dark:bg-blue-900 inline-block px-2 py-1 rounded">01 Feb 2024 - Present</p>
                                    <p className="text-xs text-gray-600 dark:text-gray-300">
                                        Responsible for innovation and digitalization in the security department at BMW Plant Rosslyn.
                                        Worked on computer vision AI development and integration to CCTV surveillance systems.
                                        Various mobile applications and web applications for digitalization within the security department.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* University positions */}
                        <div className="relative flex items-start">
                            <div className="absolute left-2.5 w-3 h-3 bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500 rounded-full border-2 border-white dark:border-black"></div>
                            <div className="ml-10">
                                <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow border border-gray-200 dark:border-gray-700">
                                    <p className="text-lg font-bold mb-2">Development Software A1 Tutor</p>
                                    <p className="text-xs text-blue-500">University Of Johannesburg - Johannesburg</p>
                                    <p className="text-xs mb-2 bg-blue-100 dark:bg-blue-900 inline-block px-2 py-1 rounded">01 Jul 2023 - 31 Dec 2023</p>
                                    <p className="text-xs text-gray-600 dark:text-gray-300">
                                        Teaching and guiding individuals in learning and understanding basic programming concepts, with a
                                        focus on Object-Oriented Programming (OOP) concepts in Python and C#.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative flex items-start">
                            <div className="absolute left-2.5 w-3 h-3 bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500 rounded-full border-2 border-white dark:border-black"></div>
                            <div className="ml-10">
                                <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow border border-gray-200 dark:border-gray-700">
                                    <p className="text-lg font-bold mb-2">Student Front End Developer</p>
                                    <p className="text-xs text-blue-500">University Of Johannesburg - Johannesburg</p>
                                    <p className="text-xs mb-2 bg-blue-100 dark:bg-blue-900 inline-block px-2 py-1 rounded">01 Jun 2022 - 31 Nov 2022</p>
                                    <p className="text-xs text-gray-600 dark:text-gray-300">
                                        I collaborated with a Project Manager and UI/UX designers to transform Figma designs into
                                        functional and user friendly websites. Using JavaScript and ReactJS.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>        
        </>
    )
}

export default ExperienceComp;