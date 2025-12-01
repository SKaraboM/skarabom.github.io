
const SkillsComp = () => {
    const skills = [
        { tech: "JavaScript", rating: 8 },
        { tech: "React.js", rating: 8 },
        { tech: "Node.js", rating: 7 },
        { tech: "CSS", rating: 8 },
        { tech: "Python", rating: 8 },
        { tech: "Flask", rating: 5 },
        { tech: "PostgreSQL", rating: 4 },
        { tech: "AWS Cloud Tools", rating: 6 },
        { tech: "Linux", rating: 4 },
    ];
    return(
        <div className="mt-12 bg-white md:pb-12">
                <div className="hidden md:block">
                    <h4 className="text-[#fca311] font-bold text-xl">SKILLS</h4>
                    <p className="text-sm mb-8">Rated by confidence in each technology for use in projects</p>
                    <div className="w-full mx-auto">
                        {skills.map((skill, index) => (
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
                <div className="md:hidden md:grid-cols-2 md:gap-8">
                    <h4 className="text-[#fca311] font-bold text-lg">SKILLS</h4>
                    <p className="text-sm mb-8">Rated by confidence</p>
                    <div className="px-4">
                        {skills.map((skill, index) => (
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