import { Element } from 'react-scroll';
import Image from 'next/image';
import profilePic from '../public/images/profilepic.png';
import { DiJava, DiJavascript1, DiPython, DiReact, DiPostgresql } from 'react-icons/di';
import { SiNextdotjs, SiHtml5, SiCss3 } from 'react-icons/si';

function AboutMe() {
    return (
        <Element id='about' name='about'>
            <div className='w-3/4 mx-auto my-36 flex flex-col justify-center items-center'>
                <p className='text-sm uppercase text-gray-400 select-none'>values and passion</p>
                <h1 className='text-indigo-900 text-6xl font-bold text-center select-none'>About Me</h1>
            
                <div className='w-full'>
                    {/* for medium and small screens*/}
                    <div className='w-1/2 mx-auto mt-14 mb-10 lg:hidden'>
                        <div className='mx-auto'>
                            <Image src={profilePic} alt='profileImage' layout='responsive' className='rounded-full' />
                        </div>
                    </div>

                    <div className='flex justify-center items-center text-left'>
                        {/* for large and bigger screens*/}
                        <div className='w-1/4 mr-16 hidden lg:block'>
                            <Image src={profilePic} alt='profileImage' layout='intrinsic' className='rounded-full hidden lg:block'/>
                        </div>
                        <div className='flex flex-col lg:mt-28 lg:mb-20'>
                            <h1 className='mb-10 text-xl font-semibold'>
                                Hey there! My name is <span className='text-indigo-900'>Nicolle Gan</span> (that&apos;s right, with double Ls!)
                            </h1>
                            <p className='text-left text-lg mb-5 flex-wrap sm:max-w-xl xl:max-w-2xl leading-loose'>
                                I&apos;m passionate about building things for the web and have an interest in exploring various technologies. 
                                I&apos;m always keen on learning new things and like to remain adaptable in my work.    
                                I hope to be able to use technology to create meaning applications for the community and the world.
                            </p>
                        </div>
                    </div>

                    <div className='w-full h-auto mt-4 flex flex-col justify-center items-center'>
                        <h1 className='text-indigo-900 text-xl font-bold text-center'>Technologies I have worked with</h1>
                    </div>
                    <div className='sm:w-11/12 lg:w-2/3 flex flex-wrap justify-center items-center gap-10 mx-auto mt-10'>
                        <div className='icon-label-set'>
                            <DiJava className='icon' />
                            <h2 className='icon-label'>Java</h2>
                        </div>
                        <div className='icon-label-set'>
                            <DiJavascript1 className='icon' />
                            <h2 className='icon-label'>JavaScript</h2>
                        </div>
                        <div className='icon-label-set'>
                            <DiPython className='icon' />
                            <h2 className='icon-label'>Python</h2>
                        </div>
                        <div className='icon-label-set'>
                            <DiPostgresql className='icon' />
                            <h2 className='icon-label'>SQL</h2>
                        </div>
                        <div className='icon-label-set'>
                            <DiReact className='icon' />
                            <h2 className='icon-label'>React</h2>
                        </div>
                        <div className='icon-label-set'>
                            <SiNextdotjs className='icon' />
                            <h2 className='icon-label'>NextJS</h2>
                        </div>
                        <div className='icon-label-set'>
                            <SiHtml5 className='icon' />
                            <h2 className='icon-label'>HTML</h2>
                        </div>
                        <div className='icon-label-set'>
                            <SiCss3 className='icon' />
                            <h2 className='icon-label'>CSS</h2>
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    )
}

export default AboutMe;