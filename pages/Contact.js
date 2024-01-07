import React, { useState } from 'react';
import { Element } from 'react-scroll';
import Loader from '../components/Loader.js'
import { FiSend } from 'react-icons/fi';
import Image from 'next/image';
import contactImage from '../public/images/girl-front-with-full-bg.png';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const [errors, setErrors] = useState({});

    const [buttonText, setButtonText] = useState('Send');

    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showFailureMessage, setShowFailureMessage] = useState(false);
    
    const handleValidation = () => {
        let tempErrors = {};
        let isValid = true;

        if (name.length <= 0) {
            tempErrors['name'] = true;
            isValid = false;
        }
        if (email.length <= 0) {
            tempErrors['email'] = true;
            isValid = false;
        }
        if (subject.length <= 0) {
            tempErrors['subject'] = true;
            isValid = false;
        }
        if (message.length <= 0) {
            tempErrors['message'] = true;
            isValid = false;
        }

        setErrors({...tempErrors});
        console.log('errors', errors);
        return isValid;
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setShowSuccessMessage(false);
        setShowFailureMessage(false);

        let isValidForm = handleValidation();

        if (isValidForm) {
            setButtonText('Sending...')
            const res = await fetch('/api/sendgrid', {
                body: JSON.stringify({
                name: name,
                email: email,
                subject: subject,
                message: message,
                }),
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            
            const { error } = await res.json();
            if (error) {
                console.log(error);
                setShowSuccessMessage(false);
                setShowFailureMessage(true);
                setButtonText('Send');
                return;
            }
            setShowSuccessMessage(true);
            setShowFailureMessage(false);
            setButtonText('Send');
        }   
        console.log(name, email, subject, message);
    };

    return (
        <Element id='contact' name='contact'>
            <Loader>
                <div>
                    <div className='sm:w-3/4 md:w-3/4 mx-auto mt-36 mb-32 flex flex-col justify-center items-center'>
                        <p className='text-sm uppercase text-brown-200 select-none'>Get in Touch</p>
                        <h1 className='text-brown-300 text-6xl font-bold text-center mb-5 select-none'>Contact</h1>
                        <p className='text-lg mb-5 mx-5 leading-loose text-center'>
                            I&apos;d love to hear from you! 
                            Let me know your thoughts about my projects or how I can contribute to yours.<br /> 
                            Drop me a message and I&apos;ll get back to you soon :D 
                        </p>

                        <div className='w-11/12 flex flex-row'>
                            <div className='w-1/4 my-auto hidden lg:block'>
                                <Image src={contactImage} alt='contactImage' layout='intrinsic' className='hidden lg:block' />
                            </div>
                            <form className='sm:w-11/12 lg:w-3/5 flex flex-col my-5 mx-auto justify-center text-start lg:ml-16'>                                    
                                <div className='w-full mb-6'>
                                    <label htmlFor='name' className='block'>
                                        <span className='contact-label'>Name</span>
                                    </label>
                                    <input 
                                        type='text' 
                                        name='name' 
                                        id='name' 
                                        autoComplete='name' 
                                        className='contact-field'
                                        onChange={(e) => {setName(e.target.value)}}
                                    />
                                    {errors.name && (
                                    <p className="contact-error">Name cannot be empty.</p>
                                    )}
                                </div>
                                
                                <div className='w-full mb-6'>
                                    <label htmlFor='email' className='block'>
                                        <span className='contact-label'>Email</span>
                                    </label>
                                    <input 
                                        type='text' 
                                        name='email' 
                                        id='email' 
                                        autoComplete='email'  
                                        className='contact-field'
                                        onChange={(e) => {setEmail(e.target.value)}}
                                    />
                                    {errors.email && (
                                        <p className="contact-error">Email cannot be empty.</p>
                                    )} 
                                </div>
                                
                                <div className='w-full mb-6'>
                                    <label htmlFor='subject' className='block'>
                                        <span className='contact-label'>Subject</span>
                                    </label>
                                    <input 
                                        type='text' 
                                        name='subject' 
                                        id='subject' 
                                        className='contact-field'
                                        onChange={(e) => {setSubject(e.target.value)}}
                                    />
                                    {errors.subject && (
                                        <p className="contact-error">Subject cannot be empty.</p>
                                    )}
                                </div>
                                
                                <div className='w-full mb-6'>
                                    <label htmlFor='message' className='block'>
                                        <span className='contact-label'>Message</span>
                                    </label>
                                    <textarea 
                                        name='message' 
                                        id='email' 
                                        className='contact-field pt-1.5'
                                        onChange={(e) => {setMessage(e.target.value)}}
                                    />
                                    {errors.message && (
                                        <p className="contact-error">Message body cannot be empty.</p>
                                    )}
                                </div>

                                <div>
                                    <button 
                                        type='submit'
                                        className='font-medium rounded-md mt-5 w-28 h-10 bg-brown-200 text-white hover:bg-brown-100'
                                        onClick={handleSubmit}
                                    >
                                        <div className='flex justify-center'>
                                            <FiSend className='w-5 h-5 text-gray-50 mr-2 my-auto' />
                                            {buttonText}
                                        </div>
                                    </button>
                                </div>

                                {showSuccessMessage  && 
                                    <div className='p-2 mt-4 text-teal-800 bg-teal-100 rounded-lg'>
                                        Message sent successfully!
                                    </div> 
                                }
                                {showFailureMessage && 
                                    <div className='p-2 mt-4 text-red-800 bg-red-100 rounded-lg'>
                                        Error sending message. Please try again in a while!
                                    </div>
                                }
                            </form>
                        </div>    
                    </div>
                </div>
            </Loader>
        </Element>
    )
}

export default Contact;
