import React from 'react';
import { Element } from 'react-scroll';
import Loader from '../components/Loader.js'
import Image from 'next/image';
import heroImage from '../public/images/csgirl-with-full-bg.png';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

function HeroSection() {
    return (
        <Element id='home' name='home'>
            <Loader>
                <div>
                    {/* for medium and small screens*/}
                    <div className='w-1/2 mx-auto pt-24 lg:hidden'>
                        <div>
                            <Image src={heroImage} alt='heroImage' layout='responsive' />
                        </div>
                    </div>

                    <div className='w-5/6 mx-auto justify-center items-center text-center pt-10 lg:pt-20'>
                        <div className='flex'>
                            <div className='flex flex-col md:mt-7 lg:mt-16 justify-center'>
                                <h1 className='font-bold text-7xl text-left mb-10'>
                                    Hi, I&apos;m <span className='text-brown-200'>Nicolle</span>
                                </h1>
                                <p className='text-left text-xl mb-3 flex-wrap leading-relaxed'>
                                    Computer Science student from the National University of Singapore. <br/> 
                                </p>
                                <p className='text-left text-xl mb-10 flex-wrap leading-relaxed'>
                                    Hoping to create an impact on the community - and the world - through technology.
                                </p>
                                <div className='flex justify-left'>
                                    <a href='https://github.com/nicollegann' target='_blank' rel='noreferrer'>
                                        <AiFillGithub className='hero-icons'/>
                                    </a>
                                    <a href='https://www.linkedin.com/in/nicolle-gan/' target='_blank' rel='noreferrer'>
                                        <AiFillLinkedin className='hero-icons'/>
                                    </a>
                                </div>
                            </div>
                            {/*for large and bigger screens*/}
                            <div className='w-1/2 hidden lg:block lg:mt-14'>
                                <Image src={heroImage} alt='heroImage' layout='intrinsic' className='hidden lg:block'/>
                            </div>
                        </div>
                    </div>
                </div>
            </Loader>
        </Element>
    )
}

export default HeroSection; 