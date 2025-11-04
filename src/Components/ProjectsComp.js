import { useEffect, useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import mapsel from "./img/Projects/mapselected.jpeg"
import dobIcon from "./img/Projects/DigitalOB.jpeg"
import visitorsIcon from "./img/Projects/visiterReg.jpeg"
import blackScreen from "./img/Projects/cvBlackScreen.jpeg"
import "./ProjectsComp.css" // Add this for styles

const ProjectsComp = () => {
    const [activeMobile, setActiveMobile] = useState(null)

    const [flipped, setFlipped] = useState(false)
    const mobileProjects = [
        {
            title: "Digital Occurrence Book",
            image: dobIcon,
            description: "A comprehensive React-based security management system for tracking incidents, maintenance logs, key register, and call center performance analytics.",
            details: "Details about the Digital Occurrence Book project.",
            features: [
                "Track and manage security incidents across multiple categories",
                "Monitor and track equipment maintenance. (Requests and status)",
                "Manage requests and returns of access keys for restricted areas with digital signatures",
                "Major Security Incident reporting and tracking"
            ],
            Technologies: [
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
            title: "C4 VisionDesk",
            image: mapsel,
            description: "A full-featured Flask web application for monitoring, managing, and analyzing CCTV servers and cameras along with their live status, with interactive mapping, analytics, user management, and real-time updates.",
            details: "Details about the C4 VisionDesk project.",
            features: [
                "Central PostgreSQL database of CCTV camera details, across multiple company managed sites",
                "Interactive map of CCTV camera locations",
                "User management with role-based access control",
                "Real-time CCTV infrastructure analytics and reporting (Online status and downtime tracking)",
                "Easy access to camera details, which include IP Addresses, Login Passwords, Name, Make and Location",

            ],
            Technologies: [
                "Python (Flask)",
                "HTML, CSS",
                "Javascript (Leaflet, Chart.js)",
                "PostgreSQL with SQLAlchemy",
                "Flask-SocketIO",
                "Nginx",
                "Ubuntu Server",
                "On-Premise Hosting"
            ]
        },
        {
            title: "Visitor Check-In",
            image: visitorsIcon,
            description: "A comprehensive digital visitor management system designed for multiple facilities. This system streamlines visitor registration, tracking, and management across multiple locations with integrated security features and label printing capabilities.",
            details: "Details about the Visitor Check-In project.",
            features: [
                "Manage visitor check-in across multiple locations.",
                "Live dashboard showing current visitors and their status.",
                "Firearm declaration and security clearance tracking.",
                "Track visitor laptops with make and serial number logging.",
                "Assign and track visitor cards with unique identification.",
                "Link visitors to their internal hosts for accountability."
            ],
            Technologies: [
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
            title: "AI CCTV Surveillance",
            image: blackScreen,
            description: "AI-Powered CCTV system for high-risk areas, warehouses and perimeter fences. Using advanced computer vision, it detects intrusions and suspicious activity in real time, enhancing control room monitering with smart alerts and analytics. Scalable and reliable.",
            details: "Details about the AI CCTV Surveillance project.",
            features: [
                "YOLO Object detection models reliably detects objects and movement in a scene",
                "Real-time alerting and monitoring capabilities",
                "Scalable architecture for high-demand environments",
                "Seamless integration with existing CCTV security systems",
                "Advanced analytics and reporting features",
                "Customizable alerting and notification system"
            ],
            Technologies: [
                "Python", 
                "OpenCV", 
                "TensorFlow",
                "Ultralytics YOLO",
                "Roboflow",
                "Axis Communications Infrastructure",

                

            ]
        }
    ]
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }


    useEffect(() => {},[flipped])

    return (
        <div className="mt-12 bg-white dark:bg-black md:pb-12">
            <div className="hidden md:block ">
                <h4 className="bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500 inline-block text-transparent bg-clip-text mb-8 font-bold">PROJECTS</h4>
                <div className="grid grid-cols-4 gap-4">
                    {mobileProjects && mobileProjects.map((proj, idx) => {
                        return (
                        <div onClick={() => {setFlipped(prev => prev === idx+1 ? 0 : idx+1)}}
                            className={`flip-card ${flipped === idx+1 ? "flipped" : ""} rounded-lg inline-block`}>
                            <div className="flip-card-inner h-full rounded-lg bg-white dark:bg-gray-900 p-5 shadow-lg border border-gray-200 dark:border-gray-700">
                                <div className='flip-card-front'>
                                    <div className='h-72 w-auto rounded-t-lg bg-cover flex items-center justify-center relative overflow-hidden'>
                                        <div
                                            className='absolute inset-0 bg-cover'
                                            style={{
                                                backgroundImage: `url(${proj.image})`,
                                                filter: `brightness(0.7) blur(2px)`,
                                                width: `100%`,
                                                cursor: `pointer`,
                                            }}>
                                        </div>
                                        <h2 className="relative z-10 text-white text-center bg-white/30 backdrop-brightness-100 ps-10 pe-10"
                                        style={{textShadow: '2px 2px 4px rgba(0,0,0,2)'}}>{proj.title}</h2>
                                    </div>
                                    <div className="text-sm mt-5">
                                        {proj.description}
                                    </div>
                                </div>
                                <div className='flip-card-back w-full h-full'>
                                    <h2 className="text-center py-2 text-gray-400">{proj.title}</h2>
                                    <div className="ml-4">
                                        <p className=' text-sm -ml-1 mb-2'><b>Features:</b></p>
                                        <ul className="text-xs list-disc ml-2">
                                            {proj.features && proj.features.map((element, id) => {
                                                return (<><li className="mb-2 dark:text-gray-400 text-gray-600 list-none" key={id}>{element}</li></>)
                                            })}
                                        </ul>
                                        <p className='mt-5 mb-1 text-sm -ml-1'><b>Technologies Used:</b></p>
                                        <ul className="text-xs list-disc ml-2">
                                            {proj.Technologies && proj.Technologies.map((element, id) => {
                                                return (<li className="dark:text-gray-400 text-gray-600 list-none mb-1" key={id}>{element}</li>)
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                    )})}
                </div>
            </div>
            <div className="md:hidden block">
                <h4 className="bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500 inline-block text-transparent bg-clip-text mb-8 font-bold">PROJECTS</h4>

                <Slider {...settings}>
                    {mobileProjects.map((proj, idx) => (
                    <div key={proj.title} className="px-0">
                        <div
                        className="rounded-lg shadow-lg bg-white dark:bg-gray-900 overflow-hidden cursor-pointer"
                        onClick={() => {setActiveMobile(activeMobile === idx ? null : idx); }}
                        >
                            <div className={`flip-card ${flipped === idx ? "flipped" : ""} rounded-lg inline-block`}>
                                <div className="flip-card-inner h-full">
                                    <div className="flip-card-front h-full">
                                        <h2 className="text-grey-800 dark:text-white text-center px-4 py-2"
                                            >
                                            {proj.title}
                                        </h2>
                                        <div className="h-56 w-full inset-0 bg-cover relative"
                                            style={{
                                            backgroundImage: `url(${proj.image})`,
                                            filter: "brightness(0.7) blur(2px)"
                                            }}>
                                        </div>
                                        <div className="p-4 text-sm">
                                            {proj.description}
                                        </div>
                                        <button 
                                            onClick={() => setFlipped(prev => prev === idx ? '' : idx)}
                                            className='text-xs bg-white text-blue-500 p-2 float-end mx-2 mb-4 rounded-md border border-blue-500'>Read More...
                                        </button>
                                    </div>
                                    <div className="flip-card-back h-full">
                                        <button 
                                            onClick={() => setFlipped(prev => prev === idx ? '' : idx)}
                                            className='align-bottom text-sm bg-blue-500 text-white p-2 mx-2 mt-2 rounded-md'>Back
                                        </button>
                                        <div className="p-4 text-sm text-white h-full overflow-auto">
                                            <p className='-ml-2 mb-2 text-gray-400'><b>Features:</b></p>
                                            <ul className="text-xs list-disc ml-2 ">
                                                {proj.features && proj.features.map((element, id) => {
                                                    return (<li className="dark:text-gray-400 text-gray-600 list-none mb-1" key={id}>{element}</li>)
                                                })}
                                            </ul>
                                            <br/>
                                            <p className='-ml-2 mt-2 mb-2 text-gray-400'><b>Technologies Used:</b></p>
                                            <ul className="text-xs list-disc ml-2">
                                                {proj.Technologies && proj.Technologies.map((element, id) => {
                                                    return (<li className="dark:text-gray-400 text-gray-600 list-none mb-1" key={id}>{element}</li>)
                                                })}
                                            </ul>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default ProjectsComp;

