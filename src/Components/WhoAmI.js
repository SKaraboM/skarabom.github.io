import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { FaArrowLeft, FaQuoteLeft, FaHeart, FaCode, FaLightbulb, FaRocket, FaFlagCheckered, FaMicrochip } from 'react-icons/fa';

const WhoAmI = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const personalInfo = {
        name: "Solomon Makgoba",
        title: "Full Stack Developer & Sim Racing Enthusiast",
        tagline: "Engineering digital solutions with the precision of a racing line",
        story: `I'm a passionate developer who thrives at the intersection of technology and performance. 
                Much like optimizing lap times in sim racing, I approach coding with the same mindset - 
                continuous improvement, precision, and pushing limits. My journey in tech started with 
                curiosity and has evolved into a career driven by innovation, problem-solving, and the 
                relentless pursuit of perfection. Whether I'm debugging code or fine-tuning car setups, 
                I believe in the power of data, iteration, and passion.`,
        passions: [
            { icon: <FaCode />, title: "Clean Code", desc: "Writing maintainable and elegant solutions with precision" },
            { icon: <FaFlagCheckered />, title: "Sim Racing", desc: "Mastering circuits and pushing performance limits" },
            { icon: <FaMicrochip />, title: "Technology", desc: "Exploring cutting-edge tech and automation" },
            { icon: <FaRocket />, title: "Performance", desc: "Optimizing everything from code to lap times" }
        ],
        values: [
            "Precision and attention to detail",
            "Continuous optimization and improvement",
            "Data-driven decision making",
            "Performance under pressure",
            "Learning from every iteration"
        ],
        funFacts: [
            "🏎️ Sim racer - grinding setups at Spa-Francorchamps",
            "⚡ Performance optimizer - whether it's code or car setups",
            "🎮 Tech enthusiast - always testing new hardware",
            "📊 Data nerd - telemetry and metrics are my fuel",
            "🎵 Racing playlists - code better with eurobeat",
            "☕ Coffee-powered development sessions"
        ],
        philosophy: `I believe that great software, like great racing, is built through precision, 
                     iteration, and understanding the fine details. Every line of code is like a corner 
                     on a track - execute it perfectly, and you'll achieve something remarkable. 
                     Technology should serve a purpose, solve real problems, and push boundaries.`
    };

    // Parallax effect calculation
    const parallaxX = (mousePosition.x / window.innerWidth - 0.5) * 20;
    const parallaxY = (mousePosition.y / window.innerHeight - 0.5) * 20;

    return (
        <div className="min-h-screen bg-white text-black overflow-hidden relative">
            {/* Animated Background Grid */}
            <div className="fixed inset-0 opacity-10">
                <div 
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(252, 163, 17, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(252, 163, 17, 0.1) 1px, transparent 1px)
                        `,
                        backgroundSize: '50px 50px',
                        transform: `translate(${parallaxX}px, ${parallaxY}px)`
                    }}
                />
            </div>

            {/* Floating Orbs */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div 
                    className="absolute w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20 animate-float"
                    style={{ 
                        top: '10%', 
                        left: '10%',
                        transform: `translate(${parallaxX * 2}px, ${parallaxY * 2}px)`
                    }}
                />
                <div 
                    className="absolute w-96 h-96 bg-cyan-400 rounded-full blur-3xl opacity-20 animate-float-delayed"
                    style={{ 
                        top: '50%', 
                        right: '10%',
                        transform: `translate(${-parallaxX * 2}px, ${-parallaxY * 2}px)`
                    }}
                />
                <div 
                    className="absolute w-96 h-96 bg-pink-500 rounded-full blur-3xl opacity-20 animate-float-slow"
                    style={{ 
                        bottom: '10%', 
                        left: '50%',
                        transform: `translate(${parallaxX * 1.5}px, ${parallaxY * 1.5}px)`
                    }}
                />
            </div>

            {/* Mouse Follower - Hidden on mobile */}
            <div 
                className="hidden md:block fixed w-4 h-4 bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500 rounded-full pointer-events-none z-50 mix-blend-screen"
                style={{
                    left: mousePosition.x,
                    top: mousePosition.y,
                    transform: 'translate(-50%, -50%)',
                    transition: 'all 0.1s ease-out'
                }}
            />

            {/* Glassmorphic Header */}
            <div className="sticky top-0 z-40 backdrop-blur-xl bg-black/30 border-b border-white/10">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
                    <Link 
                        to="/" 
                        className="flex items-center gap-2 text-purple-400 hover:text-purple-300 hover:gap-3 transition-all group text-sm sm:text-base"
                    >
                        <FaArrowLeft className="group-hover:animate-pulse" />
                        <span className="font-medium hidden sm:inline">Back to Portfolio</span>
                        <span className="font-medium sm:hidden">Back</span>
                    </Link>
                    <h1 className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500 inline-block text-transparent bg-clip-text animate-gradient">
                        Who Am I?
                    </h1>
                </div>
            </div>

            {/* Hero Section with 3D Effect */}
            <div className="relative max-w-screen-2xl mx-auto  px-4 sm:px-6 py-8 sm:py-12 md:py-16 z-10">
                <div className="text-center mb-12 sm:mb-16 md:mb-24">
                    {/* 3D Avatar with glow */}
                    <div 
                        className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 mx-auto mb-4 sm:mb-6 rounded-full relative group"
                        style={{
                            transform: `perspective(1000px) rotateX(${parallaxY * 0.5}deg) rotateY(${parallaxX * 0.5}deg)`
                        }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity animate-pulse" />
                        <div className="relative w-full h-full rounded-full bg-gradient-to-br from-purple-500 via-cyan-400 to-pink-500 p-1">
                            <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-4xl sm:text-5xl md:text-6xl">
                                👨‍💻
                            </div>
                        </div>
                    </div>
                    
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent animate-shimmer px-4">
                        {personalInfo.name}
                    </h2>
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-2 font-light px-4">{personalInfo.title}</p>
                    <p className="text-base sm:text-lg italic bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 inline-block text-transparent bg-clip-text px-4">
                        {personalInfo.tagline}
                    </p>
                </div>

                {/* Scrolling Content Sections */}
                
                {/* My Story Section */}
                <div className="mb-12 sm:mb-16 md:mb-24">
                    <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 shadow-2xl hover:shadow-purple-500/20 transition-all">
                        <FaQuoteLeft className="text-2xl sm:text-3xl md:text-4xl text-purple-500 mb-3 sm:mb-4 animate-pulse" />
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            My Story
                        </h3>
                        <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 text-gray-300">
                            {personalInfo.story}
                        </p>
                        <div className="border-l-4 border-purple-500 pl-4 sm:pl-6 py-3 sm:py-4 bg-purple-500/10 backdrop-blur-sm rounded-r-2xl">
                            <p className="text-sm sm:text-base md:text-lg italic text-gray-300">
                                {personalInfo.philosophy}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Passions Section */}
                <div className="mb-12 sm:mb-16 md:mb-24">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent">
                        What Drives Me
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        {personalInfo.passions.map((passion, index) => (
                            <div
                                key={index}
                                className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-xl hover:shadow-2xl hover:shadow-purple-500/30 hover:scale-105 hover:bg-white/10 transition-all group perspective-1000"
                                style={{
                                    animationDelay: `${index * 0.1}s`,
                                    transform: 'translateZ(0)'
                                }}
                            >
                                <div className="text-4xl sm:text-5xl mb-3 sm:mb-4 text-purple-500 group-hover:scale-110 group-hover:rotate-12 transition-all">
                                    {passion.icon}
                                </div>
                                <h4 className="text-xl sm:text-2xl font-bold mb-2 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                                    {passion.title}
                                </h4>
                                <p className="text-sm sm:text-base text-gray-400">{passion.desc}</p>
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-cyan-400/0 to-pink-500/0 group-hover:from-purple-500/5 group-hover:via-cyan-400/5 group-hover:to-pink-500/5 rounded-2xl sm:rounded-3xl transition-all" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Values Section */}
                <div className="mb-12 sm:mb-16 md:mb-24">
                    <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 shadow-2xl">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent">
                            Core Values
                        </h3>
                        <div className="space-y-3 sm:space-y-4">
                            {personalInfo.values.map((value, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 backdrop-blur-md bg-gradient-to-r from-purple-500/10 via-cyan-400/10 to-pink-500/10 rounded-xl sm:rounded-2xl border border-white/10 hover:border-purple-500/50 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 transition-all group"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0 rounded-full bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500 flex items-center justify-center text-white text-sm sm:text-base font-bold shadow-lg group-hover:shadow-purple-500/50 group-hover:scale-110 transition-all">
                                        {index + 1}
                                    </div>
                                    <p className="text-base sm:text-lg font-medium text-gray-200">{value}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Fun Facts Section */}
                <div className="mb-12 sm:mb-16 md:mb-24">
                    <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 shadow-2xl">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent">
                            Fun Facts About Me
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                            {personalInfo.funFacts.map((fact, index) => (
                                <div
                                    key={index}
                                    className="p-4 sm:p-5 md:p-6 backdrop-blur-md bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-white/10 rounded-xl sm:rounded-2xl hover:shadow-lg hover:shadow-purple-500/30 hover:scale-105 hover:rotate-1 transition-all group relative overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                                    <p className="text-sm sm:text-base md:text-lg relative z-10">{fact}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CTA with Neon Glow */}
                <div className="text-center pb-8">
                    <div className="relative backdrop-blur-xl bg-gradient-to-r from-purple-500/20 via-cyan-400/20 to-pink-500/20 border border-purple-500/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl shadow-purple-500/50 overflow-hidden group">
                        {/* Animated Border Glow */}
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity" />
                        
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 relative z-10 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                            Let's Build Something Amazing Together
                        </h3>
                        <p className="text-sm sm:text-base md:text-lg mb-5 sm:mb-6 relative z-10 text-gray-300 px-4">
                            I'm always open to new opportunities and collaborations
                        </p>
                        <Link
                            to="/"
                            className="relative inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500 text-white text-sm sm:text-base rounded-full font-bold hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50 transition-all z-10"
                        >
                            <span className="relative z-10">Get In Touch</span>
                            <div className="absolute inset-0 bg-white/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhoAmI;
