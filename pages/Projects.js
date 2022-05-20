import { Element } from 'react-scroll';
import Image from 'next/image';
import TutorManagerScreenshot from '../public/images/tutor-manager.png';
import PortfolioScreenshot from '../public/images/portfolio.png';

function Projects() {
    return (
        <Element id='projects' name='projects'>
            <div className='w-full my-36 flex flex-col justify-center items-center'>
                <p className='text-sm uppercase text-gray-400 select-none'>My key projects</p>
                <h1 className='text-indigo-900 text-6xl font-bold text-center select-none'>Projects</h1>
                <div className='md:flex sm:flex-col md:flex-row justify-center items-center gap-10 mt-10'>
                    <div className='rounded w-80 h-60 shadow-xl relative sm:mb-10'>
                        <Image 
                            src={PortfolioScreenshot} 
                            alt='portfolio' 
                            layout='fill'
                            objectFit='cover' 
                            className='p-2 rounded cursor-pointer'
                        />
                    </div>
                    <div className='rounded w-80 h-60 shadow-xl relative sm:mb-10'>
                        <Image 
                            src={TutorManagerScreenshot} 
                            alt='tutor-manager' 
                            layout='fill' 
                            objectFit='cover' 
                            className='p-2 rounded cursor-pointer' 
                        />
                    </div>
                </div>
            </div>
        </Element>
    );
}

export default Projects;