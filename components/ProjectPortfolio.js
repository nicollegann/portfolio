import React, { useState } from 'react';
import Image from 'next/image';
import PortfolioScreenshot from '../public/images/portfolio-resized.png';
import { SiNextdotjs, SiTailwindcss, SiGithub } from 'react-icons/si';

function ProjectPortfolio() {
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
                                    src={PortfolioScreenshot} 
                                    alt='portfolio' 
                                    layout='responsive'
                                    className='rounded-t-lg'
                                />
                            </div>
                            <div className='absolute self-center justify-self-center text-center hidden sm:block'>
                                <p className='font-bold text-lg text-brown-300 bg-cream-100'>PORTFOLIO</p>
                                <p className='font-semibold text-sm text-neutral-300 bg-brown-100'>View Project</p>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className='grid grid-cols-1 grid-rows-1'>
                        <div className='rounded-t-lg'>
                            <Image 
                                src={PortfolioScreenshot} 
                                alt='portfolio' 
                                layout='responsive'
                                className='rounded-t-lg'
                            />
                        </div>
                    </div>
                )}

                <div className='project-card-description'>
                    <p>
                        You are viewing this now!
                    </p>
                    <p className='mt-4'>
                        A personal portfolio to learn more about me and my works.
                    </p>
                </div>
                <div className='project-card-techstacks'>
                    <div className='project-label'>
                        <SiNextdotjs className='project-label-icon' />
                        NextJS
                    </div>
                    <div className='project-label'>
                        <SiTailwindcss className='project-label-icon' />
                        Tailwind CSS
                    </div>
                </div>
            </div>     

            {showModal ? (
                <>
                    <div className='flex justify-center items-center overflow-y-auto fixed inset-0 z-50 transition-all duration-700 hover:bg-gray-700 hover:bg-opacity-20'>
                        <div className='w-5/6 md:w-2/3 h-full'>
                            <div className='project-modal my-32'>
                                <div className='project-modal-header'>
                                    <h3 className='xs:text-xl md:text-3xl font-semibold text-gray-900'>
                                        Portfolio
                                    </h3>
                                    <button 
                                        type='button' 
                                        className='project-modal-button'
                                        onClick={() => setShowModal(false)}
                                    >
                                        <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20' xmlns="http://www.w3.org/2000/svg"><path fillRule='evenodd' d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'></path></svg>  
                                    </button>
                                </div>
                                <div className='space-y-6 mb-12'>
                                    <p className='text-base leading-relaxed text-gray-700'>
                                        A personal website built from scratch using NextJS and styled with Tailwind CSS. This site aims to showcase the projects I have worked on, as well as for you to learn more about me as a web developer! 
                                    </p>
                                </div>
                                <div className='flex flex-wrap gap-5'>
                                    <a href='https://github.com/nicollegann/portfolio' target='_blank' rel='noreferrer' className='project-modal-link-button'>
                                        <SiGithub className='mr-2 text-gray-700' />
                                        Github
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

export default ProjectPortfolio;