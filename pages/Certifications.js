import { Element } from 'react-scroll';
import Loader from '../components/Loader.js';

function Certifications() {    
    return (
        <Element id='certifications' name='certifications'>
            <Loader>
                <div className='mx-auto my-36 flex flex-col justify-center items-center'>
                    <p className='text-md uppercase text-brown-200 select-none'>Verified Skills</p>
                    <h1 className='text-brown-300 text-6xl font-bold text-center select-none'>Certifications</h1>
                    
                    <div className="w-1/2 min-w-fit py-3 justify-center items-center mt-10 rounded-lg shadow bg-white">
                        <ul role="list" className="divide-y px-5 divide-gray-200">
                            <li className="py-3">
                                <div>
                                    <div className="flex justify-between items-center">
                                        <div className="mb-2 text-xl font-semibold text-gray-900">CS50 Web Programming with Python and JavaScript</div>
                                        <a href='https://courses.edx.org/certificates/6e9dd424b4eb4a0295e9153f89af08d4' target='_blank' rel='noreferrer' className='text-sm font-medium text-blue-700 hover:underline'>
                                            View Certificate
                                        </a>
                                    </div>
                                    <p className="font-normal text-gray-500">Harvard University | edX</p>
                                </div>
                            </li>
                            <li className="py-3">
                                <div>
                                    <div className="flex justify-between items-center">
                                        <div className="mb-2 text-xl font-semibold text-gray-900">Fundamentals of C++</div>
                                        <a href='https://courses.edx.org/certificates/51f5186f60a44feca83f18f8d8a45c1d' target='_blank' rel='noreferrer' className='text-sm font-medium text-blue-700 hover:underline'>
                                            View Certificate
                                        </a>
                                    </div>
                                    <p className="font-normal text-gray-500">IBM | edX</p>
                                </div>
                            </li>
                            <li className="py-3">
                                <div>
                                    <div className="flex justify-between items-center">
                                        <div className="mb-2 text-xl font-semibold text-gray-900">HTML5 and CSS Fundamentals</div>
                                        <a href='https://courses.edx.org/certificates/b3b115f978bc4452bd9decb16a80f3d6' target='_blank' rel='noreferrer' className='text-sm font-medium text-blue-700 hover:underline'>
                                            View Certificate
                                        </a>
                                    </div>
                                    <p className="font-normal text-gray-500">W3C | edX</p>
                                </div>
                            </li>
                            <li className="py-3">
                                <div>
                                    <div className="flex justify-between items-center">
                                        <div className="mb-2 text-xl font-semibold text-gray-900">Django Features and Libraries</div>
                                        <a href='https://courses.edx.org/certificates/d1b3021e47e6429fa2287ef7a076053a' target='_blank' rel='noreferrer' className='text-sm font-medium text-blue-700 hover:underline'>
                                            View Certificate
                                        </a>
                                    </div>
                                    <p className="font-normal text-gray-500">University of Michigan | edX</p>
                                </div>
                            </li>
                            <li className="py-3">
                                <div>
                                    <div className="flex justify-between items-center">
                                        <div className="mb-2 text-xl font-semibold text-gray-900">Introduction to Software Testing</div>
                                        <a href='https://coursera.org/share/cb1bd510e2a7005ededfd82c13f426d3' target='_blank' rel='noreferrer' className='text-sm font-medium text-blue-700 hover:underline'>
                                            View Certificate
                                        </a>
                                    </div>
                                    <p className="font-normal text-gray-500">University of Minnesota | Coursera</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </Loader>
        </Element>
    );
}

export default Certifications;