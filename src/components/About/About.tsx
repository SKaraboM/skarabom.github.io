import React from 'react';
import resumeData from '../../data/resume.json'; 
import './About.css'
import Me from '../../assets/hero.png'

export const About:React.FC = () => {
    return (
        <div className='about-container'>
            <div className='icon'>
                <img src={Me}/>
            </div>
            <div className='about'>
                <h2>About Me</h2>
                <p>{resumeData.professional_summary}</p>

            </div>
            {/* 2. Access the properties safely with autocomplete */}
        </div>
    )
}