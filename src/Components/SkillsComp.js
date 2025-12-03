import { useState } from "react"

const SkillsComp = () => {
    const [activeTab, setActiveTab] = useState('tech') // 'tech' or 'soft'

    const techSkills = [
        { tech: "JavaScript", rating: 8 },
        { tech: "Python", rating: 8 },
        { tech: "React.js", rating: 8 },
        { tech: "Node.js", rating: 7 },
        { tech: "Flask", rating: 5 },
        { tech: "CSS", rating: 8 },
        { tech: "PostgreSQL", rating: 5 },
        { tech: "AWS Cloud Tools", rating: 6 },
        { tech: "Linux", rating: 4 },
        { tech: "Docker", rating: 4 },
    ];

    const softSkills = [
        { 
            name: "Problem Solving",
            description: "Analytical thinking and creative solution development"
        },
        { 
            name: "Team Collaboration",
            description: "Cross-functional teamwork and effective communication"
        },
        { 
            name: "Adaptability",
            description: "Quick learning and flexibility in dynamic environments"
        },
        { 
            name: "Time Management",
            description: "Efficient prioritization and deadline management"
        },
        { 
            name: "Critical Thinking",
            description: "Data-driven decision making and strategic analysis"
        },
        { 
            name: "Continuous Learning",
            description: "Self-motivated improvement and skill development"
        }
    ];

    return(
        <div className="mt-12 bg-white md:pb-12">
            {/* Desktop Layout */}
            <div className="hidden md:block">
                <h4 className="text-[#fca311] mb-6 font-bold text-xl">SKILLS</h4>
                
                {/* Tab Buttons */}
                <div className="flex gap-4 mb-8">
                    <button
                        onClick={() => setActiveTab('tech')}
                        className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                            activeTab === 'tech'
                                ? 'bg-[#fca311] text-white shadow-lg'
                                : 'bg-white border-2 border-[#14213d] text-[#14213d] hover:bg-[#e5e5e5]'
                        }`}
                    >
                        Technical Skills
                    </button>
                    <button
                        onClick={() => setActiveTab('soft')}
                        className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                            activeTab === 'soft'
                                ? 'bg-[#fca311] text-white shadow-lg'
                                : 'bg-white border-2 border-[#14213d] text-[#14213d] hover:bg-[#e5e5e5]'
                        }`}
                    >
                        Soft Skills
                    </button>
                </div>

                {/* Technical Skills Content */}
                {activeTab === 'tech' && (
                    <div>
                        <p className="text-sm mb-8 text-gray-600">Rated by confidence in each technology for use in projects</p>
                        <div className="w-full mx-auto">
                            {techSkills.map((skill, index) => (
                                <div key={index} className="grid grid-cols-12 items-center gap-4 mb-5 mt-5">
                                    <div className="col-span-1">
                                        <img 
                                            src={`${process.env.PUBLIC_URL}/icons/${skill.tech}.png`} 
                                            alt={skill.tech} 
                                            className=""
                                            width="50"
                                        />
                                    </div>
                                    <div className="w-full col-span-11">
                                        <SkillBar 
                                            tech={skill.tech}
                                            rating={skill.rating}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Soft Skills Content */}
                {activeTab === 'soft' && (
                    <div>
                        <p className="text-sm mb-8 text-gray-600">Professional and interpersonal competencies</p>
                        <div className="grid grid-cols-2 gap-6">
                            {softSkills.map((skill, index) => (
                                <div 
                                    key={index} 
                                    className="p-5 rounded-lg border-2 border-[#e5e5e5] hover:border-[#fca311] transition-all duration-300 hover:shadow-lg"
                                >
                                    <h5 className="text-lg font-bold text-[#14213d] mb-2">{skill.name}</h5>
                                    <p className="text-sm text-gray-600">{skill.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden">
                <h4 className="text-[#fca311] font-bold text-lg mb-4">SKILLS</h4>
                
                {/* Tab Buttons - Mobile */}
                <div className="flex gap-2 mb-6">
                    <button
                        onClick={() => setActiveTab('tech')}
                        className={`flex-1 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                            activeTab === 'tech'
                                ? 'bg-[#fca311] text-white shadow-lg'
                                : 'bg-white border-2 border-[#14213d] text-[#14213d]'
                        }`}
                    >
                        Technical
                    </button>
                    <button
                        onClick={() => setActiveTab('soft')}
                        className={`flex-1 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                            activeTab === 'soft'
                                ? 'bg-[#fca311] text-white shadow-lg'
                                : 'bg-white border-2 border-[#14213d] text-[#14213d]'
                        }`}
                    >
                        Soft Skills
                    </button>
                </div>

                {/* Technical Skills Content - Mobile */}
                {activeTab === 'tech' && (
                    <div>
                        <p className="text-xs mb-6 text-gray-600">Rated by confidence</p>
                        <div className="px-4">
                            {techSkills.map((skill, index) => (
                                <div key={index} className="grid grid-cols-12 items-center gap-4 mb-5 mt-5">
                                    <div className="col-span-2">
                                        <img 
                                            src={`${process.env.PUBLIC_URL}/icons/${skill.tech}.png`} 
                                            alt={skill.tech} 
                                            className=""
                                            width="50"
                                        />
                                    </div>
                                    <div className="w-full col-span-10">
                                        <SkillBar 
                                            tech={skill.tech}
                                            rating={skill.rating}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Soft Skills Content - Mobile */}
                {activeTab === 'soft' && (
                    <div>
                        <p className="text-xs mb-6 text-gray-600 px-4">Professional competencies</p>
                        <div className="px-4 space-y-4">
                            {softSkills.map((skill, index) => (
                                <div 
                                    key={index} 
                                    className="p-4 rounded-lg border-2 border-[#e5e5e5] hover:border-[#fca311] transition-all duration-300"
                                >
                                    <h5 className="text-sm font-bold text-[#14213d] mb-1">{skill.name}</h5>
                                    <p className="text-xs text-gray-600">{skill.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

const SkillBar = ({ tech, rating }) => {
    const percentage = (rating / 10) * 100;
    
    return(
        <div>
            <p className="text-sm font-bold text-[#14213d] mb-2">{tech}</p>
            <div className="w-full bg-[#e5e5e5] rounded-full h-2.5">
                <div 
                    className="bg-[#fca311] h-2.5 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
        </div>
    );
};

export default SkillsComp;