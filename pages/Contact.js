import React, { useState } from 'react';
import { Element } from 'react-scroll';
import { FiSend } from 'react-icons/fi';

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
            <div>
                <div className='sm:w-3/4 md:w-7/12 mx-auto mt-36 mb-32 flex flex-col justify-center items-center'>
                    <p className='text-sm uppercase text-gray-400 select-none'>Get in Touch</p>
                    <h1 className='text-indigo-900 text-6xl font-bold text-center mb-5 select-none'>Contact</h1>
                    <p className='text-lg mb-5 leading-loose text-gray-600'>
                        I'd love to hear from you! 
                        Let me know your thoughts about my projects or how I can contribute to yours. 
                        Drop me a message and I'll get back to you soon :D 
                    </p>

                    <div className='flex flex-col w-full my-5 justify-center text-center'>
                        <form>
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
                            <button 
                                type='submit'
                                className='font-medium rounded-md mt-5 w-32 h-10 bg-indigo-900 text-white hover:bg-indigo-800'
                                onClick={handleSubmit}
                            >
                                <div className='flex justify-center'>
                                    <FiSend className='w-5 h-5 text-gray-50 mr-2 my-auto' />
                                    {buttonText}
                                </div>
                            </button>
                        </form>
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
                    </div>
                </div>
            </div>
        </Element>
    )
}

export default Contact;
