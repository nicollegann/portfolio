import React, { useState } from 'react';
import Image from 'next/image';
import HarmoniaScreenshotCropped from '../public/images/harmonia-screenshot-crop.png'
import HarmoniaScreenshot from '../public/images/harmonia-screenshot.png';
import { SiGithub } from 'react-icons/si';
import { FaLaptopCode } from 'react-icons/fa';
import { GrDocument } from 'react-icons/gr';

function ProjectHarmonia() {
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
                                    src={HarmoniaScreenshotCropped} 
                                    alt='harmonia'
                                    layout='responsive' 
                                    className='rounded-t-lg'
                                />
                            </div>
                            <div className='absolute self-center justify-self-center text-center'>
                                <p className='font-bold text-lg text-indigo-50'>HARMONIA</p>
                                <p className='font-semibold text-sm text-gray-300'>View Project</p>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className='grid grid-cols-1 grid-rows-1'>
                        <div className='rounded-t-lg'>
                            <Image 
                                src={HarmoniaScreenshotCropped} 
                                alt='harmonia'
                                layout='responsive' 
                                className='rounded-t-lg'
                            />
                        </div>
                    </div>
                )}    
                <div className='project-card-description'>
                    <p>
                        A desktop application for students to manage their academic and non-academic tasks and events.
                    </p>
                </div>
                <div className='project-card-techstacks'>
                    <div className='project-label'>Java</div>
                    <div className='project-label'>JavaFX</div>
                </div>
            </div>

            {showModal ? (
                <>
                    <div className='flex justify-center items-center overflow-auto overscroll-contain fixed inset-0 z-50 outline-none focus:outline-none transition-all duration-700 hover:bg-gray-700 hover:bg-opacity-20'>
                        <div className='w-5/6 md:w-2/3 h-screen'>
                            <div className='project-modal my-10'>
                                <div className='project-modal-header'>
                                    <h3 className='xs:text-xl md:text-3xl font-semibold text-gray-900'>
                                        Harmonia
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
                                            src={HarmoniaScreenshot} 
                                            alt='tutor-manager'
                                            layout='responsive' 
                                            className='rounded-md'
                                        />
                                    </div>
                                </div>
                                <div className='space-y-6 mb-12 leading-relaxed text-gray-700 text-justify'>
                                    <p>
                                        <span className='font-bold'>Harmonia</span> is a desktop application for managing tasks related to students&apos; academic life, optimized for use via a Command Line Interface (CLI) 
                                        while still having the benefits of a Graphical User Interface (GUI). The application is designed for users who prefer typing. If you can type fast, Harmonia can get your task 
                                        management done faster than traditional GUI-based task managers.
                                    </p>
                                    <p>
                                        This project is a brown-field team project.
                                    </p>
                                </div>
                                <div className='flex flex-wrap gap-5'>
                                    <a href='https://github.com/AY2122S2-CS2103T-T09-1/tp/releases' target='_blank' rel='noreferrer' className='project-modal-link-button'>
                                        <FaLaptopCode className='mr-2 text-gray-700' />
                                        Download JAR
                                    </a>
                                    <a href='https://github.com/AY2122S2-CS2103T-T09-1/tp' target='_blank' rel='noreferrer' className='project-modal-link-button'>
                                        <SiGithub className='mr-2 text-gray-700' />
                                        Github
                                    </a>
                                    <a href='https://ay2122s2-cs2103t-t09-1.github.io/tp/UserGuide.html' target='_blank' rel='noreferrer' className='project-modal-link-button'>
                                        <GrDocument className='mr-2 text-gray-700' />
                                        User Guide
                                    </a>
                                    <a href='https://ay2122s2-cs2103t-t09-1.github.io/tp/DeveloperGuide.html' target='_blank' rel='noreferrer' className='project-modal-link-button'>
                                        <GrDocument className='mr-2 text-gray-700' />
                                        Developer Guide
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

export default ProjectHarmonia;