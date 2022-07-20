import React from 'react';
import { FaRegLightbulb, FaPaintBrush } from 'react-icons/fa';

function Footer() {
    return (
        <div className='w-full h-20 bg-neutral-100 flex justify-center items-center'>
            <div className='items-center'>
                <div className='flex my-2 justify-center items-center'>
                    <FaRegLightbulb className='text-brown-200 mr-2 w-3 h-3'/>
                    <h1 className='text-sm text-brown-200'>Created & Designed by <a href='#' className='cursor-pointer font-semibold text-brown-300 hover:text-brown-100'>Nicolle</a></h1>
                </div>
                <div className='flex justify-center items-center'>
                    <FaPaintBrush className='text-brown-200 mr-2 w-3 h-3'/>
                    <h1 className='text-sm text-brown-200'>Illustrations by <a href='https://www.instagram.com/artzy.w/' target='_blank' rel='noreferrer' className='cursor-pointer font-semibold text-brown-300 hover:text-brown-100'>@artzy.w</a></h1>
                </div>
            </div>
        </div>
    )
}

export default Footer;