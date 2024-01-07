import React, { useState } from 'react';
import Image from 'next/image';
import TutorManagerV2Screenshot from '../public/images/tutormanagerV2-screenshot.png';
import { SiGithub, SiDjango } from 'react-icons/si';
import { BsBootstrapFill } from "react-icons/bs";
import { IoLogoJavascript } from "react-icons/io";
import { FaVideo } from "react-icons/fa";

function ProjectTutorManagerV2() {
    const [showModal, setShowModal] = useState(false);
    const [mouseOver, setMouseOver] = useState(false);

    return (
        <>
            <div 
                className='project-card' 
                onClick={() => setShowModal(true)}
                onMouseEnter={() => setMouseOver(true)}
                onMouseLeave={() => setMouseOver(false)}
            >
                {mouseOver ? (
                    <>
                        <div className='grid grid-cols-1 grid-rows-1'>
                            <div className='rounded-t-lg opacity-15 grayscale contrast-50 blur-xs'>
                                <Image 
                                    src={TutorManagerV2Screenshot} 
                                    alt='tutor-manager'
                                    layout='responsive' 
                                    className='rounded-t-lg'
                                />
                            </div>
                            <div className='absolute self-center justify-self-center text-center'>
                                <p className='font-bold text-lg text-brown-300 bg-cream-100'>TUTORMANAGER 2.0</p>
                                <p className='font-semibold text-sm text-neutral-300 bg-brown-100'>View Project</p>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className='grid grid-cols-1 grid-rows-1'>
                        <div className='rounded-t-lg'>
                            <Image 
                                src={TutorManagerV2Screenshot} 
                                alt='tutor-manager'
                                layout='responsive' 
                                className='rounded-t-lg'
                            />
                        </div>
                    </div>
                )}    

                <div className='project-card-description'>
                    <p>
                        A tutoring management system that provides a common and convenient platform for tutors and students to manage administrative tasks.
                    </p>
                </div>
                <div className='project-card-techstacks'>
                    <div className='project-label'>
                        <SiDjango className='project-label-icon' />
                        Django
                    </div>
                    <div className='project-label'>
                        <IoLogoJavascript className='project-label-icon' />
                        JavaScript
                    </div>
                    <div className='project-label'>
                        <BsBootstrapFill className='project-label-icon' />
                        Bootstrap
                    </div>
                </div>
            </div>

            {showModal ? (
                <>
                    <div className='flex justify-center items-center overflow-auto overscroll-contain fixed inset-0 z-50 outline-none focus:outline-none transition-all duration-700 hover:bg-gray-700 hover:bg-opacity-20'>
                        <div className='w-5/6 md:w-2/3 h-screen'>
                            <div className='project-modal mt-10'>
                                <div className='project-modal-header'>
                                    <h3 className='sm:text-xl md:text-3xl font-semibold text-gray-900'>
                                        TutorManager 2.0
                                    </h3>
                                    <button 
                                        type='button' 
                                        className='project-modal-button'
                                        onClick={() => setShowModal(false)}
                                    >
                                        <svg className='w-5 h-5' fill='currentColor' viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path></svg>  
                                    </button>
                                </div>
                                <div className='flex gap-10'>
                                    <div className='w-2/5 mb-4 drop-shadow-md hidden md:block'>
                                        <Image 
                                            src={TutorManagerV2Screenshot} 
                                            alt='tutor-manager'
                                            layout='responsive' 
                                            className='rounded-md'
                                        />
                                    </div>
                                </div>
                                <div className='space-y-6 mb-12 leading-relaxed text-gray-700'>
                                    <p className='text-justify'>
                                        <span className='font-bold'>TutorManager 2.0</span> is a tutoring management system which aims to provide a common and convenient platform for tutors and students to keep track of lesson records and simplify lesson scheduling processes. This web application utilizes Django on the back-end and Javascript on the front-end.
                                    </p>
                                    <p>
                                        <span className='font-semibold'>Main features</span> include tutor search, dashboard, lesson scheduling, tutor rating and feedback.
                                    </p> 
                                    <p>
                                        You may refer to the README for a more detailed project overview.
                                    </p>
                                </div>
                                <div className='flex flex-wrap gap-5'>
                                    <a href='https://github.com/nicollegann/cs50-capstone' target='_blank' rel='noreferrer' className='project-modal-link-button'>
                                        <SiGithub className='mr-2 text-gray-700' />
                                        Github
                                    </a>
                                    <a href='https://www.youtube.com/watch?v=_fq8m7gZAbU&ab_channel=NicolleGan' target='_blank' rel='noreferrer' className='project-modal-link-button'>
                                        <FaVideo className='mr-2 text-gray-700' />
                                        Video Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
                ) : null
            }
        </>
    )
}

export default ProjectTutorManagerV2;