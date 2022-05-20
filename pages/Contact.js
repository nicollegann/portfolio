import React, { useState } from 'react';
import { Element } from 'react-scroll';

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
                <div className='w-1/2 mx-auto my-36 flex flex-col justify-center items-center'>
                    <p className='text-sm uppercase text-gray-400'>Get in Touch</p>
                    <h1 className='text-indigo-900 text-6xl font-bold text-center'>Contact</h1>

                    <div className='flex flex-col w-full my-5 justify-center text-center'>
                        <form>
                            <div className='w-full mb-6'>
                                <label htmlFor='name' className='block'>
                                    <span className='block text-left pl-8 text-md font-medium text-slate-700'>Name</span>
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
                                <p className="text-red-500 text-left text-sm">Name cannot be empty.</p>
                                )}
                            </div>
                            
                            <div className='w-full mb-6'>
                                <label htmlFor='email' className='block'>
                                    <span className='block text-left pl-8 text-md font-medium text-slate-700'>Email</span>
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
                                    <p className="text-red-500 text-left text-sm">Email cannot be empty.</p>
                                )} 
                            </div>
                            
                            <div className='w-full mb-6'>
                                <label htmlFor='subject' className='block'>
                                    <span className='block text-left pl-8 text-md font-medium text-slate-700'>Subject</span>
                                </label>
                                <input 
                                    type='text' 
                                    name='subject' 
                                    id='subject' 
                                    className='contact-field'
                                    onChange={(e) => {setSubject(e.target.value)}}
                                />
                                {errors.subject && (
                                    <p className="text-red-500 text-left text-sm">Subject cannot be empty.</p>
                                )}
                            </div>
                            
                            <div className='w-full mb-6'>
                                <label htmlFor='message' className='block'>
                                    <span className='block text-left pl-8 text-md font-medium text-slate-700'>Message</span>
                                </label>
                                <textarea 
                                    name='message' 
                                    id='email' 
                                    className='contact-field pt-1.5'
                                    onChange={(e) => {setMessage(e.target.value)}}
                                />
                                {errors.message && (
                                    <p className="text-red-500 text-left text-sm">Message body cannot be empty.</p>
                                )}
                            </div>
                            <button 
                                type='submit'
                                className='rounded-md mt-5 text-lg w-36 h-10 bg-indigo-900 text-white'
                                onClick={handleSubmit}
                            >
                                {buttonText}
                            </button>
                        </form>
                        {showSuccessMessage  && 
                            <div className='p-4 mt-4 text-sm text-green-700 bg-green-100 rounded-lg'>
                                Message sent successfully!
                            </div> 
                        }
                        {showFailureMessage && 
                            <div className='p-4 mt-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200'>
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
