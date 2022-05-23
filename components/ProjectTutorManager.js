import React, { useState } from 'react';
import Image from 'next/image';
import TutorManagerScreenshot from '../public/images/tutormanager-screenshot-crop.png';
import TutorManagerScreenshotTwo from '../public/images/tutormanager-attendance.png';
import { SiReact, SiMaterialui, SiFirebase, SiGithub } from 'react-icons/si';
import { FaLaptopCode } from 'react-icons/fa';
import { GrDocument } from 'react-icons/gr';

function ProjectTutorManager() {
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
                            <div className='rounded-t-lg opacity-15 brightness-50 blur-xs'>
                                <Image 
                                    src={TutorManagerScreenshot} 
                                    alt='tutor-manager'
                                    layout='responsive' 
                                    className='rounded-t-lg'
                                />
                            </div>
                            <div className='absolute self-center justify-self-center text-center'>
                                <p className='font-bold text-lg text-indigo-50'>TUTORMANAGER</p>
                                <p className='font-semibold text-sm text-gray-300'>View Project</p>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className='grid grid-cols-1 grid-rows-1'>
                        <div className='rounded-t-lg'>
                            <Image 
                                src={TutorManagerScreenshot} 
                                alt='tutor-manager'
                                layout='responsive' 
                                className='rounded-t-lg'
                            />
                        </div>
                    </div>
                )}    

                <div className='project-card-description'>
                    <p>
                        A tutoring management system that helps simplify administrative tasks for admins and tutors.
                    </p>
                </div>
                <div className='project-card-techstacks'>
                    <div className='project-label'>
                        <SiReact className='project-label-icon' />
                        React
                    </div>
                    <div className='project-label'>
                        <SiMaterialui className='project-label-icon' />
                        Material UI
                    </div>
                    <div className='project-label'>
                        <SiFirebase className='project-label-icon' />
                        Firebase
                    </div>
                </div>
            </div>

            {showModal ? (
                <>
                    <div className='flex justify-center items-center overflow-auto overscroll-contain fixed inset-0 z-50 outline-none focus:outline-none transition-all duration-700 hover:bg-gray-700 hover:bg-opacity-20'>
                        <div className='w-2/3 h-screen'>
                            <div className='project-modal mt-10'>
                                <div className='project-modal-header'>
                                    <h3 className='sm:text-xl md:text-3xl font-semibold text-gray-900'>
                                        TutorManager
                                    </h3>
                                    <button 
                                        type='button' 
                                        class='project-modal-button'
                                        onClick={() => setShowModal(false)}
                                    >
                                        <svg className='w-5 h-5' fill='currentColor' viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path></svg>  
                                    </button>
                                </div>
                                <div className='flex gap-10'>
                                    <div className='w-2/5 mb-4 drop-shadow-md hidden md:block'>
                                        <Image 
                                            src={TutorManagerScreenshot} 
                                            alt='tutor-manager'
                                            layout='responsive' 
                                            className='rounded-md'
                                        />
                                    </div>
                                    <div className='w-2/5 mb-4 drop-shadow-md hidden md:block'>
                                        <Image 
                                            src={TutorManagerScreenshotTwo} 
                                            alt='tutor-manager'
                                            layout='responsive' 
                                            className='rounded-md'
                                        />
                                    </div>
                                </div>
                                <div className='space-y-6 mb-12 leading-relaxed text-gray-700'>
                                    <p className='text-justify'>
                                        <span className='font-bold'>TutorManager</span> aims to simplify administrative processes by providing a common platform for tutors and the admin team to view and update records, as well as to schedule lessons.
                                    </p>
                                    <p className='hidden lg:block text-justify'>
                                        The web application is designed for a volunteer tutoring programme, which aims to mentor underprivileged youths through weekly sessions with them to provide academic help 
                                        and conduct activities to improve well-being. The admin team are the organisers of the tutoring programme, while tutors are student volunteers.
                                    </p>
                                    <p>
                                        <span className='font-semibold'>Main features</span> include attendance taking, recording tutee observations, feedback to admins and lesson scheduling.
                                    </p> 
                                    <p>
                                        This project is part of <a href='https://orbital.comp.nus.edu.sg/' target='_blank' className='font-semibold ml-0.5 hover:text-indigo-700'> Orbital</a>.
                                    </p>
                                </div>
                                <div className='flex flex-wrap gap-5'>
                                    <a href='https://tutor-manager.vercel.app/' target='_blank' className='project-modal-link-button'>
                                        <FaLaptopCode className='mr-2 text-gray-700' />
                                        Website
                                    </a>
                                    <a href='https://github.com/nicollegann/Orbital' target='_blank' className='project-modal-link-button'>
                                        <SiGithub className='mr-2 text-gray-700' />
                                        Github
                                    </a>
                                    <a href='https://drive.google.com/file/d/16-oovXs7tlgv-Ew772iiMdS5yNoerJqV/view?usp=sharing' target='_blank' className='project-modal-link-button'>
                                        <GrDocument className='mr-2 text-gray-700' />
                                        Documentation
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

export default ProjectTutorManager;