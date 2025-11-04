import React from 'react';

const TechStackComp = () => {
    const techStack = [
        {
            name: 'React.js',
            description: 'Frontend library',
            icon: 'React.js.png'
        },
        {
            name: 'Tailwind CSS',
            description: 'Styling framework',
            icon: 'Tailwind.png'
        },
        {
            name: 'JavaScript',
            description: 'Programming language',
            icon: 'JavaScript.png'
        },
        {
            name: 'GitHub Pages',
            description: 'Hosting platform',
            icon: 'GitHub.png'
        }
    ];

    return (
        <div className="mt-12 pb-12">
            <h4 className="bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500 inline-block text-transparent bg-clip-text font-bold">
                PORTFOLIO TECH STACK
            </h4>
            <p className="text-sm mb-8">Technologies used to build this portfolio</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {techStack.map((tech, index) => (
                    <div key={index} className="flex flex-col items-center p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all">
                        <img 
                            src={`${process.env.PUBLIC_URL}/icons/${tech.icon}`}
                            alt={tech.name}
                            width={48}
                            className='m-2'
                        />
                        <h5 className="font-medium text-sm mb-2">{tech.name}</h5>
                        <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                            {tech.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechStackComp;