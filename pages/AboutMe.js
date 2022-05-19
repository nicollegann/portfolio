import { Element } from 'react-scroll';
import Image from 'next/image';
import profilePic from '../public/images/profilepic.png';
import { DiJava, DiJavascript1, DiPython, DiReact, DiPostgresql } from 'react-icons/di';
import { SiNextdotjs, SiHtml5, SiCss3 } from 'react-icons/si';

function AboutMe() {
    return (
        <Element id='about' name='about'>
            <div className='w-full mt-40 h-auto flex flex-col justify-center items-center'>
                <p className='text-sm uppercase text-gray-400'>values and passion</p>
                <h1 className='text-indigo-900 text-6xl font-bold text-center'>About Me</h1>
            </div>

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
                            <div className='flex justify-center items-center cursor pointer'>
                                <DiJava className='w-10 h-10 bg-gray-100 m-3 p-1 shadow-xl rounded-md' />
                                <h2 className='text-md text-slate-600 font-semibold'>Java</h2>
                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <div className='flex justify-center items-center cursor pointer'>
                                <DiJavascript1 className='w-10 h-10 bg-gray-100 m-3 p-1 shadow-xl rounded-md' />
                                <h2 className='text-md text-slate-600 font-semibold'>JavaScript</h2>
                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <div className='flex justify-center items-center cursor pointer'>
                                <DiPython className='w-10 h-10 bg-gray-100 m-3 p-1 shadow-xl rounded-md' />
                                <h2 className='text-md text-slate-600 font-semibold'>Python</h2>
                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <div className='flex justify-center items-center cursor pointer'>
                                <DiPostgresql className='w-10 h-10 bg-gray-100 m-3 p-1 shadow-xl rounded-md' />
                                <h2 className='text-md text-slate-600 font-semibold'>SQL</h2>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Second Section */}
                <div className='flex mt-8'>
                    <div className='flex justify-items-start items-center gap-10 mx-auto'>
                        <div className='flex flex-col justify-center items-center'>
                            <div className='flex justify-center items-center cursor pointer'>
                                <DiReact className='w-10 h-10 bg-gray-100 m-3 p-1 shadow-xl rounded-md' />
                                <h2 className='text-md text-slate-600 font-semibold'>React</h2>
                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <div className='flex justify-center items-center cursor pointer'>
                                <SiNextdotjs className='w-10 h-10 bg-gray-100 m-3 p-1 shadow-xl rounded-md' />
                                <h2 className='text-md text-slate-600 font-semibold'>NextJS</h2>
                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <div className='flex justify-center items-center cursor pointer'>
                                <SiHtml5 className='w-10 h-10 bg-gray-100 m-3 p-1 shadow-xl rounded-md' />
                                <h2 className='text-md text-slate-600 font-semibold'>HTML</h2>
                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <div className='flex justify-center items-center cursor pointer'>
                                <SiCss3 className='w-10 h-10 bg-gray-100 m-3 p-1 shadow-xl rounded-md' />
                                <h2 className='text-md text-slate-600 font-semibold'>CSS</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    )
}

export default AboutMe;