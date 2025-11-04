
const SkillsComp = () => {
    const skills = [
        { tech: "JavaScript", rating: 8 },
        { tech: "React.js", rating: 8 },
        { tech: "Node.js", rating: 7 },
        { tech: "CSS", rating: 8 },
        { tech: "AWS Cloud Tools", rating: 6 },
        { tech: "Python", rating: 8 },
        { tech: "Flask", rating: 5 },
        { tech: "PostgreSQL", rating: 4 },
    ];
    return(
        <div className="mt-12 bg-white dark:bg-black md:pb-12">
            <div className="hidden md:block ">
                <h4 className="bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500 inline-block text-transparent bg-clip-text font-bold">SKILLS</h4>
                <p className="text-sm mb-8">Rated by confidence</p>
                <div className="w-full mx-auto ">
                    {skills.map((skill, index) => (
                        <div key={index} className="grid grid-cols-12 items-center gap-4 mb-5 mt-5">
                            <div className="col-span-1">
                                <img 
                                    src={`${process.env.PUBLIC_URL}/icons/${skill.tech}.png`} 
                                    alt={`${skill.tech}`} 
                                    className={skill.tech === "Flask" ? `dark:invert dark:brightness-0 dark:transition-all` : ""}
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
            <div className="md:hidden md:grid-cols-2 md:gap-8">
                <h4 className="bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500 inline-block text-transparent bg-clip-text font-bold">SKILLS</h4>
                <p className="text-sm mb-8">Rated by confidence</p>
                <div className="px-4">
                    {skills.map((skill, index) => (
                        <SkillBar 
                            key={index}
                            tech={skill.tech}
                            rating={skill.rating}
                        />
                    ))}
                </div>
            </div>
        </div>

    )
}

export default SkillsComp;


const SkillBar = ({ tech, rating }) => {
    const percentage = (rating / 10) * 100;
    
    return (
        <div className="mb-4">
            <div className="flex justify-between mb-1">
                <span className="md:text-md text-sm font-medium text-gray-700 dark:text-gray-300">{tech}</span>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{rating}/10</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div 
                    className="bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500 h-2.5 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
        </div>
    );
};
