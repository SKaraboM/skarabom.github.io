import { useEffect, useState } from "react"
import mapsel from "./img/Projects/mapselected.jpeg"
import dobIcon from "./img/Projects/DigitalOB.jpeg"
import visitorsIcon from "./img/Projects/visiterReg.jpeg"
import blackScreen from "./img/Projects/cvBlackScreen.jpeg"
const ProjectsComp = () => {
    const [ActiveProject, setActiveProject] = useState('')
    const [showInfo, setShowInfo] = useState(false)
    const [projectDetails, setProjectDetails] = useState({})

    const configurePopup = (ActiveProject) => {
        switch (ActiveProject){
            case "pj-1":
                setProjectDetails({
                    title: "Digital Occurrence Book",
                    description: `A comprehensive React-based 
                                security management system for tracking incidents, 
                                maintenance logs, key register, and call center 
                                performance analytics.`     
                })
                break;
            default:
                setProjectDetails({})
                setShowInfo(false)
                break
        }

    }


    useEffect(() => {
        configurePopup(ActiveProject)

    }, [ActiveProject])

    useEffect(() => { // this hook will get called every time myArr has changed
        if (projectDetails.length !== 0){
            setShowInfo(true)
        }
        else{
            setShowInfo(false)
        }
    }, [projectDetails])
    return (
        <div className="mt-12 bg-white dark:bg-black">
            <div className="hidden md:block ">
                <h4 className="bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500 inline-block text-transparent bg-clip-text mb-8">PROJECTS</h4>
                <div className="grid grid-cols-4 gap-4">
                     <div 
                        onClick={() => setActiveProject('pj-1')}
                        id='project1' className={`${ActiveProject === 'pj-1' ? 'rounded-t-lg border-b-0' : 'rounded-lg mb-12' } inline-block  bg-white dark:bg-gray-900 p-5 shadow-lg border border-gray-200 dark:border-gray-700 `}>
                        <div className='h-72 w-auto rounded-t-lg bg-cover flex items-center justify-center relative overflow-hidden'>
                            <div 
                                className='absolute inset-0 bg-cover '
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
                    <div onClick={() => setActiveProject('pj-2')}
                        className={`${ActiveProject === 'pj-2' ? 'rounded-t-lg border-b-0' : 'rounded-lg mb-12' } inline-block bg-white dark:bg-gray-900 p-5  shadow-lg border border-gray-200 dark:border-gray-700`}>
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
                    
                     <div 
                        onClick={() => setActiveProject('pj-3')}
                        className={`${ActiveProject === 'pj-3' ? 'rounded-t-lg border-b-0' : 'rounded-lg mb-12' } inline-block bg-white dark:bg-gray-900 p-5  shadow-lg border border-gray-200 dark:border-gray-700`}>
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
                    <div onClick={() => setActiveProject('pj-4')}
                        className={`${ActiveProject === 'pj-4' ?'rounded-t-lg border-b-0' : 'rounded-lg mb-12' } inline-block bg-white dark:bg-gray-900 p-5  shadow-lg border border-gray-200 dark:border-gray-700`}>
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
                </div>
            </div>
            <div className={`${showInfo ? 'inline-block mb-20 bg-white dark:bg-gray-900 p-5 rounded-b-lg shadow-lg border border-gray-200 dark:border-gray-700 border-t-0' : 'md:hidden hidden' } w-full mx-auto`}>
                <h2>{projectDetails.title}</h2>
                <p>{projectDetails.description}</p>
                <button className='bg-red-600 px-4 text-white rounded-lg ml-auto mr-0 mt-5' onClick= {() => {
                    setActiveProject('');
                    setProjectDetails({});
                    setShowInfo(false);
                }}>Close</button>
            </div>
            <div className="md:hidden block">
                <h4 className="text-lg bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500 inline-block text-transparent bg-clip-text mb-6">Projects (mobile)</h4>
            </div>
        </div>
    )
}

export default ProjectsComp;