import React from 'react';
import { FaRegLightbulb, FaPaintBrush } from 'react-icons/fa';

function Footer() {
    return (
        <div className='w-full h-20 bg-gray-50 flex justify-center items-center'>
            <div className='items-center'>
                <div className='flex my-2 justify-center items-center'>
                    <FaRegLightbulb className='text-blue-900 mr-2 w-3 h-3'/>
                    <h1 className='text-sm text-blue-900'>Created & Designed by <a href='#' className='cursor-pointer font-semibold text-indigo-900 hover:text-black'>Nicolle</a></h1>
                </div>
                <div className='flex justify-center items-center'>
                    <FaPaintBrush className='text-blue-900 mr-2 w-3 h-3'/>
                    <h1 className='text-sm text-blue-900'>Illustrations by <a href='https://www.instagram.com/artzy.w/' target='_blank' rel='noreferrer' className='cursor-pointer font-semibold text-indigo-900 hover:text-black'>@artzy.w</a></h1>
                </div>
            </div>
        </div>
    )
}

export default Footer;