import { useState, useRef } from "react"
import "./ProjectsComp.css"

const ProjectsComp = () => {
    const [activeProject, setActiveProject] = useState(0)
    const mobileCardRef = useRef(null)

    const handleProjectChange = (newIndex) => {
        setActiveProject(newIndex)
        // Scroll to top of card on mobile with header offset
        if (mobileCardRef.current && window.innerWidth < 768) {
            setTimeout(() => {
                const elementPosition = mobileCardRef.current.getBoundingClientRect().top
                const offsetPosition = elementPosition + window.pageYOffset - 65
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                })
            }, 100)
        }
    }

    const projects = [
        {
            id: 3,
            title: "Visitor Check-In",
            image: require("./img/Projects/visiterReg.jpeg"),
            description: "A comprehensive digital visitor management system designed for multiple facilities. This system streamlines visitor registration, tracking, and management across multiple locations with integrated security features and label printing capabilities.",
            year: "2024",
            features: [
                "Manage visitor check-in across multiple locations.",
                "Live dashboard showing current visitors and their status.",
                "Firearm declaration and security clearance tracking.",
                "Track visitor laptops with make and serial number logging.",
                "Assign and track visitor cards with unique identification.",
                "Link visitors to their internal hosts for accountability.",
            ],
            technologies: [
                "React.js",
                "CSS",
                "Axios",
                "Node.js",
                "AWS API Gateway",
                "AWS Lambda",
                "DynamoDB"
            ]
        },
        {
            id: 1,
            title: "eOccurrence Book",
            image: require("./img/Projects/DigitalOB.jpeg"),
            description: "A comprehensive React-based security management system for tracking incidents, maintenance logs, key register, and call center performance analytics.",
            year: "2024",
            features: [
                "Track and manage security incidents across multiple categories",
                "Monitor and track equipment maintenance. (Requests and status)",
                "Manage requests and returns of access keys for restricted areas with digital signatures",
                "Major Security Incident reporting and tracking",
                "Includes internal chatbot for user assistance, FAQs and data aggregation"
            ],
            technologies: [
                "React.js",
                "CSS",
                "Axios",
                "Node.js",
                "AWS API Gateway",
                "AWS Lambda",
                "DynamoDB"
            ]
        },
        {
            id: 2,
            title: "C4 VisionDesk",
            image: require("./img/Projects/mapselected.jpeg"),
            description: "A Flask web application for monitoring, managing, and analyzing CCTV servers and cameras along with their live status, with interactive mapping, analytics, user management, and real-time updates.",
            year: "2025",
            features: [
                "Central PostgreSQL database of CCTV camera details, across multiple company managed sites",
                "Interactive map of CCTV camera locations",
                "User management with role-based access control",
                "Real-time CCTV infrastructure analytics and reporting (Online status and downtime tracking)",
                "Easy access to camera details, which include IP Addresses, Login Passwords, Name, Make and Location",
            ],
            technologies: [
                "Python (Flask)",
                "HTML, CSS",
                "Javascript",
                "PostgreSQL",
                "Flask-SocketIO",
                "Nginx",
                "Ubuntu Server",
            ]
        },
        {
            id: 4,
            title: "AI CCTV Surveillance",
            image: require("./img/Projects/cvBlackScreen.jpeg"),
            description: "AI-Powered CCTV system for high-risk areas, warehouses and perimeter fences. Using advanced computer vision, it detects intrusions and suspicious activity in real time, enhancing control room monitering with smart alerts and analytics. Scalable and reliable.",
            year: "2025",
            features: [
                "YOLO Object detection models reliably detects objects and movement in a scene",
                "Real-time alerting and monitoring capabilities",
                "Scalable architecture for high-demand environments",
                "Seamless integration with existing CCTV security systems",
                "Advanced analytics and reporting features",
                "Customizable alerting and notification system"
            ],
            technologies: [
                "Python", 
                "OpenCV", 
                "TensorFlow",
                "Ultralytics YOLO",
                "Roboflow",
                "Axis Communications Infrastructure",
            ]
        }
    ]

    return (
        <div className="mt-12 md:pb-12 bg-white relative">
            {/* Decorative Accent Blob */}
                <svg className="absolute left-[-40px] top-[-40px] w-24 h-24 opacity-30 z-0" viewBox="0 0 100 100" fill="#fca311" aria-hidden="true">
                    <ellipse cx="50" cy="50" rx="50" ry="40" />
                </svg>
                <h4 className="text-[#fca311] mb-8 font-bold text-xl md:text-2xl relative z-10">PROJECTS</h4>
            
            {/* Desktop Layout */}
            <div className="hidden md:block relative">
                <div className="flex gap-6 min-h-[600px] ">
                    {/* Left Side - Project Tabs */}
                    <div className="w-1/3 space-y-3">
                        {projects.map((project, idx) => (
                            <div
                                key={project.id}
                                onClick={() => setActiveProject(idx)}
                                className={`cursor-pointer rounded-lg overflow-hidden transition-all duration-300 border-2 h-55 flex flex-col ${
                                    activeProject === idx
                                        ? 'border-[#fca311] shadow-lg scale-105'
                                        : 'border-[#e5e5e5] hover:border-[#14213d] hover:shadow-md'
                                } relative`}
                            >
                                {/* Accent blob in card corner */}
                                <svg className="absolute right-[-18px] top-[-18px] w-10 h-10 opacity-20 z-0" viewBox="0 0 40 40" fill="#14213d" aria-hidden="true">
                                    <circle cx="20" cy="20" r="20" />
                                </svg>
                                <div className="relative h-32 flex-shrink-0 overflow-hidden bg-[#14213d]">
                                    <img 
                                        src={project.image} 
                                        alt={project.title}
                                        className="w-full h-full object-cover opacity-80"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#14213d] to-transparent"></div>
                                    {/* Year Badge */}
                                    <div className="absolute top-2 right-2 bg-[#fca311] text-white px-2 py-1 rounded-full text-xs font-bold">
                                        {project.year}
                                    </div>
                                </div>
                                <div className={`p-4 flex-1 flex flex-col transition-colors duration-300 ${
                                    activeProject === idx ? 'bg-[#fca311]' : 'bg-white'
                                }`}>
                                    <h3 className={`font-bold text-base mb-1 ${
                                        activeProject === idx ? 'text-white' : 'text-[#14213d]'
                                    }`}>
                                        {project.title}
                                    </h3>
                                    <p className={`text-xs line-clamp-2 ${
                                        activeProject === idx ? 'text-white/90' : 'text-gray-600'
                                    }`}>
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Side - Active Project Details */}
                    <div className="w-2/3">
                        <div className="bg-white border-2 border-[#e5e5e5] rounded-lg overflow-hidden shadow-xl">
                            {/* Large Project Image */}
                            <div className="relative h-80 overflow-hidden bg-[#14213d]">
                                <img 
                                    src={projects[activeProject].image} 
                                    alt={projects[activeProject].title}
                                    className="w-full h-full object-cover transition-all duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#14213d]/80 to-transparent"></div>
                                
                                {/* Title Overlay */}
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <div className="flex items-center gap-3 mb-2">
                                        <h2 className="text-3xl font-bold text-white">
                                            {projects[activeProject].title}
                                        </h2>
                                        <span className="bg-[#fca311] text-white px-3 py-1 rounded-full text-sm font-bold">
                                            {projects[activeProject].year}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Project Details */}
                            <div className="p-6">
                                {/* Description */}
                                <div className="mb-6">
                                    <h4 className="text-sm font-bold text-[#14213d] mb-2 uppercase">About</h4>
                                    <p className="text-gray-700 leading-relaxed">
                                        {projects[activeProject].description}
                                    </p>
                                </div>

                                {/* Technologies */}
                                <div className="mb-6">
                                    <h4 className="text-sm font-bold text-[#14213d] mb-3 uppercase">Technologies</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {projects[activeProject].technologies.map((tech, techIdx) => (
                                            <span 
                                                key={techIdx}
                                                className="bg-[#fca311] text-white px-3 py-1.5 rounded-full text-sm font-medium hover:bg-[#14213d] transition-colors duration-300"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Key Features */}
                                <div>
                                    <h4 className="text-sm font-bold text-[#14213d] mb-3 uppercase">Key Features</h4>
                                    <ul className="space-y-2">
                                        {projects[activeProject].features.map((feature, featIdx) => (
                                            <li key={featIdx} className="flex items-start">
                                                <span className="text-[#fca311] font-bold mr-3 mt-0.5">•</span>
                                                <span className="text-gray-700">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden relative">
                {/* Project Selector - Horizontal Scroll with Better Visibility */}
                <div className="mb-4">
                    <p className="text-[10px] text-gray-500 mb-2 px-1">Swipe to browse →</p>
                    <div className="overflow-x-auto pb-3 -mx-4 px-4 scrollbar-thin">
                        <div className="flex gap-2.5 min-w-max">
                            {projects.map((project, idx) => (
                                <div
                                    key={project.id}
                                    onClick={() => handleProjectChange(idx)}
                                    className={`flex-shrink-0 w-28 h-32 cursor-pointer rounded-lg overflow-hidden transition-all duration-300 border-2 flex flex-col ${
                                        activeProject === idx
                                            ? 'border-[#fca311] shadow-lg scale-105'
                                            : 'border-[#e5e5e5] opacity-70'
                                    } relative`}
                                >
                                    {/* Accent blob in card corner */}
                                    <svg className="absolute right-[-10px] top-[-10px] w-6 h-6 opacity-20 z-0" viewBox="0 0 24 24" fill="#14213d" aria-hidden="true">
                                        <circle cx="12" cy="12" r="12" />
                                    </svg>
                                    <div className="relative h-16 flex-shrink-0 overflow-hidden">
                                        <img 
                                            src={project.image} 
                                            alt={project.title}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className={`absolute inset-0 transition-opacity ${
                                            activeProject === idx 
                                                ? 'bg-gradient-to-t from-[#fca311]/60 to-transparent' 
                                                : 'bg-gradient-to-t from-black/60 to-transparent'
                                        }`}></div>
                                    </div>
                                    <div className={`p-2 flex-1 flex flex-col justify-between transition-colors duration-300 ${
                                        activeProject === idx ? 'bg-[#fca311]' : 'bg-white'
                                    }`}>
                                        <p className={`text-[10px] font-bold line-clamp-2 leading-tight ${
                                            activeProject === idx ? 'text-white' : 'text-[#14213d]'
                                        }`}>
                                            {project.title}
                                        </p>
                                        <p className={`text-[9px] mt-0.5 ${
                                            activeProject === idx ? 'text-white/90' : 'text-gray-500'
                                        }`}>
                                            {project.year}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Active Project Details - Mobile Optimized */}
                <div ref={mobileCardRef} className="bg-white border-2 border-[#fca311] rounded-xl overflow-hidden shadow-xl -mx-4 sm:mx-0">
                    {/* Large Project Image */}
                    <div className="relative h-48 overflow-hidden bg-[#14213d]">
                        <img 
                            src={projects[activeProject].image} 
                            alt={projects[activeProject].title}
                            className="w-full h-full object-cover transition-all duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#14213d] via-[#14213d]/50 to-transparent"></div>
                        
                        {/* Title and Year Badge */}
                        <div className="absolute bottom-0 left-0 right-0 p-3">
                            <span className="inline-block bg-[#fca311] text-white px-2 py-0.5 rounded-full text-[10px] font-bold mb-1.5">
                                {projects[activeProject].year}
                            </span>
                            <h2 className="text-lg font-bold text-white leading-tight">
                                {projects[activeProject].title}
                            </h2>
                        </div>
                    </div>

                    {/* Project Content with Better Spacing */}
                    <div className="p-3.5">
                        {/* Description */}
                        <div className="mb-3.5">
                            <h4 className="text-[10px] font-bold text-[#fca311] mb-1.5 uppercase tracking-wide">About</h4>
                            <p className="text-xs text-gray-700 leading-relaxed">
                                {projects[activeProject].description}
                            </p>
                        </div>

                        {/* Technologies - More Compact */}
                        <div className="mb-3.5">
                            <h4 className="text-[10px] font-bold text-[#fca311] mb-1.5 uppercase tracking-wide">Tech Stack</h4>
                            <div className="flex flex-wrap gap-1.5">
                                {projects[activeProject].technologies.map((tech, techIdx) => (
                                    <span 
                                        key={techIdx}
                                        className="bg-[#14213d] text-white px-2 py-1 rounded-full text-[10px] font-medium"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Key Features - Better Readability */}
                        <div className="mb-1">
                            <h4 className="text-[10px] font-bold text-[#fca311] mb-2 uppercase tracking-wide">Key Features</h4>
                            <ul className="space-y-2">
                                {projects[activeProject].features.map((feature, featIdx) => (
                                    <li key={featIdx} className="flex items-start">
                                        <div className="flex-shrink-0 w-4 h-4 rounded-full bg-[#fca311] flex items-center justify-center mr-2 mt-0.5">
                                            <span className="text-white text-[9px] font-bold">✓</span>
                                        </div>
                                        <span className="text-[11px] text-gray-700 leading-relaxed flex-1">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Navigation Arrows */}
                <div className="flex justify-between items-center mt-4 px-1 relative">
                    {/* Decorative Accent Dot */}
                    <svg className="absolute left-[-18px] bottom-[-18px] w-8 h-8 opacity-20 z-0" viewBox="0 0 16 16" fill="#fca311" aria-hidden="true">
                        <circle cx="8" cy="8" r="8" />
                    </svg>
                    <button
                        onClick={() => handleProjectChange(activeProject > 0 ? activeProject - 1 : projects.length - 1)}
                        className="flex items-center gap-1.5 bg-[#14213d] text-white px-3 py-2 rounded-lg font-medium text-xs hover:bg-[#fca311] transition-colors active:scale-95"
                    >
                        <span>←</span>
                        <span>Prev</span>
                    </button>
                    
                    <div className="text-center">
                        <p className="text-[10px] text-gray-500 font-medium">
                            {activeProject + 1} / {projects.length}
                        </p>
                        </div>
                        <button
                            onClick={() => handleProjectChange(activeProject < projects.length - 1 ? activeProject + 1 : 0)}
                            className="flex items-center gap-1.5 bg-[#14213d] text-white px-3 py-2 rounded-lg font-medium text-xs hover:bg-[#fca311] transition-colors active:scale-95"
                        >
                            <span>Next</span>
                            <span>→</span>
                        </button>
                    </div>
                </div>
            </div>
    )
}

export default ProjectsComp;

