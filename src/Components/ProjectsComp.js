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
    const [ActiveProject, setActiveProject] = useState('')
    const [showInfo, setShowInfo] = useState(false)
    const [projectDetails, setProjectDetails] = useState({})
    const [activeMobile, setActiveMobile] = useState(null)

    const [flipped, setFlipped] = useState(false)
    const mobileProjects = [
        {
            title: "Digital Occurrence Book",
            image: dobIcon,
            description: "A comprehensive React-based security management system for tracking incidents, maintenance logs, key register, and call center performance analytics.",
            details: "Details about the Digital Occurrence Book project."
        },
        {
            title: "C4 VisionDesk",
            image: mapsel,
            description: "A full-featured Flask web application for monitoring, managing, and analyzing camera servers and their status, with interactive mapping, analytics, user management, and real-time updates.",
            details: "Details about the C4 VisionDesk project."
        },
        {
            title: "Visitor Check-In",
            image: visitorsIcon,
            description: "A comprehensive digital visitor management system designed for multiple facilities. This system streamlines visitor registration, tracking, and management across multiple locations with integrated security features and label printing capabilities.",
            details: "Details about the Visitor Check-In project."
        },
        {
            title: "AI CCTV Surveillance",
            image: blackScreen,
            description: "AI-Powered CCTV system for high-risk areas warehouses and perimeter fences. Using advanced computer vision, it detects intrusions and suspicious activity in real time, enhancing control room monitering with smart alerts and analytics. Scalable and reliable.",
            details: "Details about the AI CCTV Surveillance project."
        }
    ]
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

// ...existing code...

    useEffect(() => {},[flipped])

    return (
        <div className="mt-12 bg-white dark:bg-black md:pb-28">
            <div className="hidden md:block ">
                <h4 className="bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500 inline-block text-transparent bg-clip-text mb-8">PROJECTS</h4>
                <div className="grid grid-cols-4 gap-4">
                    <div onClick={() => {setFlipped(prev => prev === 1 ? 0 : 1)}}
                        className={`flip-card ${flipped === 1 ? "flipped" : ""} rounded-lg inline-block`}>
                        <div className="flip-card-inner h-full rounded-lg bg-white dark:bg-gray-900 p-5 shadow-lg border border-gray-200 dark:border-gray-700">
                            <div className='flip-card-front'>
                                <div className='h-72 w-auto rounded-t-lg bg-cover flex items-center justify-center relative overflow-hidden'>
                                    <div
                                        className='absolute inset-0 bg-cover'
                                        style={{
                                            backgroundImage: `url(${dobIcon})`,
                                            filter: `brightness(0.7) blur(2px)`,
                                            width: `100%`,
                                            cursor: `pointer`,

                                        }}>
                                    </div>
                                    <h2 className="relative z-10 text-white text-center font-mono bg-white/30 backdrop-brightness-100 ps-10 pe-10"
                                    style={{textShadow: '2px 2px 4px rgba(0,0,0,2)'}}>Digital Occurrence Book</h2>
                                </div>
                                <div className="text-sm mt-5">
                                    A comprehensive React-based security management 
                                    system for tracking incidents, maintenance logs, 
                                    key register, and call center performance analytics.
                                </div>
                            </div>
                            <div className='flip-card-back w-full h-full'>
                                <h2 className="text-center py-2 text-sm">Digital Occurrence Book</h2>
                                <div>Details about the Digital Occurrence Book project.</div>
                            </div>
                        </div>
                    </div>
                    <div onClick={() => setFlipped(prev => prev === 2 ? 0 : 2)}
                        className={`flip-card ${flipped === 2 ? "flipped" : ""} rounded-lg inline-block`}>
                        <div className='flip-card-inner h-full rounded-lg bg-white dark:bg-gray-900 p-5 shadow-lg border border-gray-200 dark:border-gray-700'>
                            <div className='flip-card-front'>
                                <div className='h-72 w-auto rounded-t-lg bg-cover flex items-center justify-center relative overflow-hidden'>
                                    <div 
                                        className='absolute inset-0 bg-cover'
                                        style={{
                                            backgroundImage: `url(${mapsel})`,
                                            filter: `brightness(0.7) blur(2px)`,
                                            cursor: `pointer`


                                        }}>
                                    </div>
                                    <h2 className="relative z-10 text-white text-center font-mono bg-white/20 backdrop-brightness-100 ps-10 pe-10"
                                    style={{textShadow: '2px 2px 4px rgba(0,0,0,2)'}}>C4 VisionDesk</h2>
                                </div>
                                <div className="text-sm mt-5">A full-featured 
                                    Flask web application for monitoring, managing, 
                                    and analyzing camera servers and their status, with 
                                    interactive mapping, analytics, user management, 
                                    and real-time updates.

                                </div>
                            </div>
                            <div className="flip-card-back w-full h-full">
                                <h2 className="text-center py-2 text-sm">C4 VisionDesk</h2>
                                <div>Details about the C4 VisionDesk project.</div>
                            </div>
                        </div>

                    </div>
                     <div 
                        onClick={() => {setFlipped(prev => prev === 3 ? 0 : 3)}}
                        className={`flip-card ${flipped === 3 ? "flipped" : ""} rounded-lg inline-block `}>
                        <div className='flip-card-inner h-full rounded-lg bg-white dark:bg-gray-900 p-5 shadow-lg border border-gray-200 dark:border-gray-700'>
                            <div className='flip-card-front'>
                                <div className='h-72 w-auto rounded-t-lg bg-cover flex items-center justify-center relative overflow-hidden'>
                                    <div 
                                        className='absolute inset-0 bg-cover'
                                        style={{
                                            backgroundImage: `url(${visitorsIcon})`,
                                            filter: `brightness(0.7) blur(2px)`,
                                            cursor: `pointer`
                                        }}>
                                    </div>
                                    <h2 className="relative z-10 text-white text-center font-mono bg-white/20 backdrop-brightness-80 ps-10 pe-10"
                                    style={{textShadow: '2px 2px 4px rgba(0,0,0,2)'}}>Visitor Check-In</h2>
                                </div>
                                <div className="text-sm mt-5">
                                    A comprehensive digital visitor management 
                                    system designed for multiple facilities. 
                                    This system streamlines visitor registration, 
                                    tracking, and management across multiple locations 
                                    with integrated security features and label printing capabilities.

                                </div>
                            </div>
                            <div className='flip-card-back w-full h-full'>
                                <h2 className="text-center py-2 text-sm">Visitor Check-In</h2>
                                <div>Details about the Visitor Check-In project.</div>
                            </div>
                        </div>
                    </div>
                    <div onClick={() => {setFlipped(prev => prev === 4 ? 0 : 4)}}
                        className={`flip-card ${flipped === 4 ? "flipped" : ""} rounded-lg inline-block`}>
                        <div className='flip-card-inner h-full rounded-lg  bg-white dark:bg-gray-900 p-5 shadow-lg border border-gray-200 dark:border-gray-700'>
                            <div className='flip-card-front'>
                                <div className='h-72 w-auto rounded-t-lg bg-cover flex items-center justify-center relative overflow-hidden'>
                                    <div 
                                        className='absolute inset-0 bg-cover'
                                        style={{
                                            backgroundImage: `url(${blackScreen})`,
                                            filter: `brightness(0.7) blur(2px)`
                                        }}>
                                    </div>
                                    <h2 className="relative z-10 text-white text-center font-mono bg-white/20 backdrop-brightness-80 ps-10 pe-10"
                                    style={{textShadow: '2px 2px 4px rgba(0,0,0,2)'}}>AI CCTV Surveillance</h2>
                                </div>
                                <div className="text-sm mt-5">
                                    AI-Powered CCTV system for high-risk areas warehouses and perimeter fences. Using advanced
                                    computer vision, it detects intrusions and suspicious activity in real time,
                                    enhancing control room monitering with smart alerts and analytics. Scalable and reliable.
                                </div>
                            </div>
                            <div className='flip-card-back w-full h-full'>
                                <h2 className="text-center py-2 text-sm">AI CCTV Surveillance</h2>
                                <div>
                                    Details about the AI CCTV Surveillance project.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:hidden block">
                <Slider {...settings}>
                    {mobileProjects.map((proj, idx) => (
                    <div key={proj.title} className="px-0">
                        <div
                        className="rounded-lg shadow-lg bg-white dark:bg-gray-900 overflow-hidden cursor-pointer"
                        onClick={() => {setActiveMobile(activeMobile === idx ? null : idx); setFlipped(prev => prev === true ? false : true)}}
                        >
                            <div className={`flip-card ${flipped === true ? "flipped" : ""} rounded-lg inline-block`}>
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <h2 className="relative z-10 -top-3/4 left-0 right-0 text-white text-center font-mono bg-white/30 backdrop-brightness-100 px-4 py-2"
                                            style={{textShadow: '2px 2px 4px rgba(0,0,0,2)'}}>
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
                                    </div>
                                    <div className="flip-card-back">
                                        <div className="p-4 text-sm">
                                            {proj.details}
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

