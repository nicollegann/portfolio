import React from 'react';
import { Element } from 'react-scroll';
import Image from 'next/image';
import heroImage from '../public/images/csgirl.jpg';

function HeroSection() {
    return (
        <Element id='home' name='home'>
            <div className='h-screen'>
                {/* for medium and small screens*/}
                <div className='w-1/2 mx-auto pt-24 lg:hidden'>
                    <div>
                        <Image src={heroImage} alt='heroImage' layout='responsive' />
                    </div>
                </div>

                <div className='flex justify-center items-center text-center pt-8'>
                    <div className='flex flex-col sm:mx-10 md:ml-10 md:mt-7 lg:ml-20 lg:mt-16'>
                        <h1 className='font-bold text-7xl text-left mb-10'>
                            Hi, I'm <span className='text-indigo-900'>Nicolle</span>
                        </h1>
                        <p className='text-left font-normal mb-5 flex-wrap'>
                            Computer Science student from the National University of Singapore. <br/> 
                            Hoping to create an impact on the community - and the world - through technology.
                        </p>
                        <a href='#' className='font-semibold text-white md:mt-10 mt-5 pt-5 bg-indigo-900 rounded-md w-60 h-16'>
                            See My Portfolio!
                        </a>
                    </div>
                    {/* for large and bigger screens*/}
                    <div className='w-1/2 hidden lg:block lg:mt-12'>
                        <Image src={heroImage} alt='heroImage' layout='intrinsic' className='hidden lg:block'/>
                    </div>
                </div>
            </div>
        </Element>
    )
}

export default HeroSection; 