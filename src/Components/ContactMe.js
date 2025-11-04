import React from 'react';
import { FaPhone, FaEnvelope, FaLinkedin } from 'react-icons/fa';

const ContactMe = () => {
    const contactInfo = {
        phone: "+27 65 917 0186",
        email: "makgobask2002@gmail.com",
        linkedin: "https://www.linkedin.com/in/karabo-makgoba-7004491b3/"
    };

    return (
        <div className="mt-12 pb-30">
            <h4 className="bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500 inline-block text-transparent bg-clip-text font-bold mb-8">
                LET'S CONNECT
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <a href={`tel:${contactInfo.phone}`} 
                   className="flex items-center p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all">
                    <FaPhone className="text-2xl text-purple-500 mr-3" />
                    <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                        <p className="font-medium">{contactInfo.phone}</p>
                    </div>
                </a>

                <a href={`mailto:${contactInfo.email}`}
                   className="flex items-center p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all">
                    <FaEnvelope className="text-2xl text-cyan-400 mr-3" />
                    <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                        <p className="font-medium">{contactInfo.email}</p>
                    </div>
                </a>

                <a href={contactInfo.linkedin}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="flex items-center p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all">
                    <FaLinkedin className="text-2xl text-pink-500 mr-3" />
                    <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">LinkedIn</p>
                        <p className="font-medium">Karabo Makgoba</p>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default ContactMe;