
const ExperienceComp = () => {
    return(
        <>
            <div className="hidden md:flex md:flex-col">
                <h4 className="text-[#fca311] mb-8 font-bold text-xl">EXPERIENCE</h4>
                {/* Timeline container */}
                <div className="relative mb-10">
                    {/* Vertical line */}
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#fca311]"></div>
                    
                    {/* Timeline items */}
                    <div className="space-y-12">
                        {/* BMW Group SA */}
                        <div className="relative flex items-start w-full">
                            {/* Timeline dot */}
                            <div className="absolute left-6 w-4 h-4 bg-[#fca311] rounded-full border-4 border-white"></div>
                            
                            {/* Content */}
                            <div className="ml-16 w-full">
                                <div className="bg-white p-6 w-auto rounded-lg shadow-lg border border-gray-200">
                                    <p className="text-2xl font-bold mb-2">Graduate Software Developer</p>
                                    <div className="flex justify-between items-center text-sm text-[#14213d] mb-3">
                                        <p>BMW Group South Africa - Pretoria</p>
                                        <p className="text-white bg-[#fca311] px-2 py-1 rounded">01 February 2024 - Current</p>
                                    </div>
                                    <p className="text-gray-600 text-md">
                                        • Drive innovation and digitalization initiatives within the security department at BMW Plant Rosslyn. <br/>
                                        • Contribute to AI integration within CCTV surveillance systems to enhance operational efficiency.<br/>
                                        • Develop mobile and web-based applications using modern frameworks and AWS services.<br/>
                                        • Collaborate cross-functionally with engineers to optimize software solutions and data workflows.<br/>
                                        • Support Security Department in digitization and innovation initiatives.<br/>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* University Of Johannesburg 1 */}
                        <div className="relative flex items-start w-full">
                            {/* Timeline dot */}
                            <div className="absolute left-6 w-4 h-4 bg-[#fca311] rounded-full border-4 border-white"></div>
                            {/* Content */}
                            <div className="ml-16  w-full">
                                <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                                    <p className="text-2xl font-bold mb-2">Development Software A1 Tutor</p>
                                    <div className="flex justify-between items-center text-sm text-[#14213d] mb-3">
                                        <p>University Of Johannesburg - Johannesburg</p>
                                        <p className="text-white bg-[#fca311] px-2 py-1 rounded">01 Jul 2023 - 31 Dec 2023</p>
                                    </div>
                                    <p className="text-gray-600 text-md">
                                        • Taught Object-Oriented Programming (OOP) concepts using Python and C#.<br/>
                                        • Assisted students with debugging, code optimization, and understanding key programming principles. <br/>
                                        • Promoted software development best practices and effective problem-solving approaches.<br/>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* University Of Johannesburg 2 */}
                        <div className="relative flex items-start w-full">
                            {/* Timeline dot */}
                            <div className="absolute left-6 w-4 h-4 bg-[#fca311] rounded-full border-4 border-white"></div>
                            
                            {/* Content */}
                            <div className="ml-16 w-full">
                                <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                                    <p className="text-2xl font-bold mb-2">Student Front End Developer</p>
                                    <div className="flex justify-between items-center text-sm text-[#14213d] mb-3">
                                        <p>University Of Johannesburg - Johannesburg</p>
                                        <p className="text-white bg-[#fca311] px-2 py-1 rounded">01 Jun 2022 - 31 Nov 2022</p>
                                    </div>
                                    <p className="text-gray-600 text-md">
                                        • Translated Figma UI/UX designs into responsive, functional web applications using JavaScript and ReactJS. <br/>
                                        • Worked closely with project managers to ensure timely delivery of user-friendly web interfaces.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile timeline */}
            <div className="md:hidden flex flex-col">
                <h4 className="text-lg text-[#fca311] mb-6 font-bold">Experience</h4>
                
                {/* Mobile timeline container */}
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[#fca311]"></div>
                    
                    {/* Timeline items */}
                    <div className="space-y-8">
                        {/* BMW Group SA */}
                        <div className="relative flex items-start">
                            <div className="absolute left-2.5 w-3 h-3 bg-[#fca311] rounded-full border-2 border-white"></div>
                            <div className="ml-10">
                                <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
                                    <p className="text-lg font-bold mb-2">Graduate Software Developer</p>
                                    <p className="text-xs text-[#14213d]">BMW Group South Africa - Pretoria</p>
                                    <p className="text-xs mb-2 bg-[#fca311] text-white inline-block px-2 py-1 rounded">01 Feb 2024 - Present</p>
                                    <p className="text-xs text-gray-600 mt-2">
                                        Drive innovation and digitalization initiatives within the security department at BMW Plant Rosslyn. <br/>  <br/>
                                        Contribute to AI integration within CCTV surveillance systems to enhance operational efficiency.<br/><br/>
                                        Develop mobile and web-based applications using modern frameworks and AWS services.<br/><br/>
                                        Collaborate cross-functionally with engineers to optimize software solutions and data workflows.<br/><br/>
                                        Support Security Department in digitization and innovation initiatives.<br/><br/>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* University positions */}
                        <div className="relative flex items-start">
                            <div className="absolute left-2.5 w-3 h-3 bg-[#fca311] rounded-full border-2 border-white"></div>
                            <div className="ml-10">
                                <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
                                    <p className="text-lg font-bold mb-2">Development Software A1 Tutor</p>
                                    <p className="text-xs text-[#14213d]">University Of Johannesburg - Johannesburg</p>
                                    <p className="text-xs mb-2 bg-[#fca311] text-white inline-block px-2 py-1 rounded">01 Jul 2023 - 31 Dec 2023</p>
                                    <p className="text-xs text-gray-600 mt-2">
                                        Taught Object-Oriented Programming (OOP) concepts using Python and C#.<br/><br/>
                                        Assisted students with debugging, code optimization, and understanding key programming principles. <br/><br/>
                                        Promoted software development best practices and effective problem-solving approaches.<br/><br/>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative flex items-start">
                            <div className="absolute left-2.5 w-3 h-3 bg-[#fca311] rounded-full border-2 border-white"></div>
                            <div className="ml-10">
                                <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
                                    <p className="text-lg font-bold mb-2">Student Front End Developer</p>
                                    <p className="text-xs text-[#14213d]">University Of Johannesburg - Johannesburg</p>
                                    <p className="text-xs mb-2 bg-[#fca311] text-white inline-block px-2 py-1 rounded">01 Jun 2022 - 31 Nov 2022</p>
                                    <p className="text-xs text-gray-600 mt-2">
                                        Translated Figma UI/UX designs into responsive, functional web applications using JavaScript and ReactJS. <br/><br/>
                                        Worked closely with project managers to ensure timely delivery of user-friendly web interfaces.
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