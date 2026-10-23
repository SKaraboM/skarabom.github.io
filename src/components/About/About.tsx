import React from 'react';
import resumeData from '../../data/resume.json'; 
import './About.css'
import Me from '../../assets/Me-image.jpg'

export const About:React.FC = () => {
    return (
        <div className='about-container'>
            <div className='icon'>
                <img src={Me} className='me-image' width='2.5rem'/>
            </div>
            <div className='about'>
                <h2>Welcome</h2>
                <p>{resumeData.professional_summary}</p>

            </div>
            {/* 2. Access the properties safely with autocomplete */}
        </div>
    )
}