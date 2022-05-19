import { Element } from 'react-scroll';
import Image from 'next/image';
import profilePic from '../public/images/profilepic.png';
import { DiJava, DiJavascript1, DiPython, DiReact, DiPostgresql } from 'react-icons/di';
import { SiNextdotjs, SiHtml5, SiCss3 } from 'react-icons/si';

function AboutMe() {
    return (
        <Element id='about' name='about'>
            <div className='h-screen w-full my-20 flex flex-col justify-center items-center'>
                <p className='text-sm uppercase text-gray-400'>values and passion</p>
                <h1 className='text-indigo-900 text-6xl font-bold text-center'>About Me</h1>
            
                <div>
                    {/* for medium and small screens*/}
                    <div className='w-1/2 mx-auto pt-14 lg:hidden'>
                        <div className='w-3/4 mx-auto'>
                            <Image src={profilePic} alt='profileImage' layout='responsive' className='rounded-full' />
                        </div>
                    </div>

                    <div className='flex justify-center items-center text-left pt-2'>
                        {/* for large and bigger screens*/}
                        <div className='w-1/5 hidden lg:block lg:mt-12'>
                            <Image src={profilePic} alt='profileImage' layout='intrinsic' className='rounded-full hidden lg:block'/>
                        </div>
                        <div className='flex flex-col sm:mx-10 md:ml-10 md:mt-7 lg:ml-20 lg:mt-14'>
                            <h1 className='mb-10'>
                                Hey there! My name is <span className='text-indigo-900'>Nicolle Gan</span> (that's right, with double Ls!)
                            </h1>
                            <p className='text-left font-normal mb-5 flex-wrap sm:max-w-xl xl:max-w-2xl'>
                                I'm passionate about building things for the web and have an interest in exploring various technologies. 
                                I'm always keen on learning new things and like to remain adaptable in my work.    
                                I hope to be able to use technology to create meaning applications for the community and the world.
                            </p>
                        </div>
                    </div>
                    <div className='w-full h-auto mt-4 flex flex-col justify-center items-center'>
                        <h1 className='text-indigo-900 text-xl font-bold text-center'>Technologies I have worked with</h1>
                    </div>

                    {/* First Section */}
                    <div className='flex mt-8'>
                        <div className='flex justify-items-start items-center gap-10 mx-auto'>
                            <div className='flex flex-col justify-center items-center'>
                                <div className='icon-label-set'>
                                    <DiJava className='icon' />
                                    <h2 className='icon-label'>Java</h2>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <div className='icon-label-set'>
                                    <DiJavascript1 className='icon' />
                                    <h2 className='icon-label'>JavaScript</h2>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <div className='icon-label-set'>
                                    <DiPython className='icon' />
                                    <h2 className='icon-label'>Python</h2>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <div className='icon-label-set'>
                                    <DiPostgresql className='icon' />
                                    <h2 className='icon-label'>SQL</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Second Section */}                
                    <div className='flex mt-8'>
                        <div className='flex justify-items-start items-center gap-10 mx-auto'>
                            <div className='flex flex-col justify-center items-center'>
                                <div className='icon-label-set'>
                                    <DiReact className='icon' />
                                    <h2 className='icon-label'>React</h2>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <div className='icon-label-set'>
                                    <SiNextdotjs className='icon' />
                                    <h2 className='icon-label'>NextJS</h2>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <div className='icon-label-set'>
                                    <SiHtml5 className='icon' />
                                    <h2 className='icon-label'>HTML</h2>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <div className='icon-label-set'>
                                    <SiCss3 className='icon' />
                                    <h2 className='icon-label'>CSS</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    )
}

export default AboutMe;