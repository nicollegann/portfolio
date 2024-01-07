import { Element } from 'react-scroll';
import Loader from '../components/Loader.js';

function Certifications() {    
    return (
        <Element id='certifications' name='certifications'>
            <Loader>
                <div className='mx-auto my-36 flex flex-col justify-center items-center'>
                    <p className='text-md uppercase text-brown-200 select-none'>Verified Skills</p>
                    <h1 className='text-brown-300 text-6xl font-bold text-center select-none'>Certifications</h1>
                    
                    <div class="w-1/2 min-w-fit py-3 justify-center items-center mt-10 rounded-lg shadow bg-white dark:bg-gray-80">
                        <ul role="list" class="divide-y px-5 divide-gray-200 dark:divide-gray-700">
                            <li class="py-3">
                                <div>
                                    <div class="flex justify-between items-center">
                                        <div class="mb-2 text-xl font-semibold text-gray-900 dark:text-white">CS50's Web Programming with Python and JavaScript</div>
                                        <a href='https://courses.edx.org/certificates/6e9dd424b4eb4a0295e9153f89af08d4' target='_blank' rel='noreferrer' class='text-sm font-medium text-blue-700 hover:underline dark:text-blue-500'>
                                            View Certificate
                                        </a>
                                    </div>
                                    <p class="font-normal text-gray-500 dark:text-gray-400">Harvard University | edX</p>
                                </div>
                            </li>
                            <li class="py-3">
                                <div>
                                    <div class="flex justify-between items-center">
                                        <div class="mb-2 text-xl font-semibold text-gray-900 dark:text-white">Fundamentals of C++</div>
                                        <a href='https://courses.edx.org/certificates/51f5186f60a44feca83f18f8d8a45c1d' target='_blank' rel='noreferrer' class='text-sm font-medium text-blue-700 hover:underline dark:text-blue-500'>
                                            View Certificate
                                        </a>
                                    </div>
                                    <p class="font-normal text-gray-500 dark:text-gray-400">IBM | edX</p>
                                </div>
                            </li>
                            <li class="py-3">
                                <div>
                                    <div class="flex justify-between items-center">
                                        <div class="mb-2 text-xl font-semibold text-gray-900 dark:text-white">HTML5 and CSS Fundamentals</div>
                                        <a href='https://courses.edx.org/certificates/b3b115f978bc4452bd9decb16a80f3d6' target='_blank' rel='noreferrer' class='text-sm font-medium text-blue-700 hover:underline dark:text-blue-500'>
                                            View Certificate
                                        </a>
                                    </div>
                                    <p class="font-normal text-gray-500 dark:text-gray-400">W3C | edX</p>
                                </div>
                            </li>
                            <li class="py-3">
                                <div>
                                    <div class="flex justify-between items-center">
                                        <div class="mb-2 text-xl font-semibold text-gray-900 dark:text-white">Django Features and Libraries</div>
                                        <a href='https://courses.edx.org/certificates/d1b3021e47e6429fa2287ef7a076053a' target='_blank' rel='noreferrer' class='text-sm font-medium text-blue-700 hover:underline dark:text-blue-500'>
                                            View Certificate
                                        </a>
                                    </div>
                                    <p class="font-normal text-gray-500 dark:text-gray-400">University of Michigan | edX</p>
                                </div>
                            </li>
                            <li class="py-3">
                                <div>
                                    <div class="flex justify-between items-center">
                                        <div class="mb-2 text-xl font-semibold text-gray-900 dark:text-white">Introduction to Software Testing</div>
                                        <a href='https://coursera.org/share/cb1bd510e2a7005ededfd82c13f426d3' target='_blank' rel='noreferrer' class='text-sm font-medium text-blue-700 hover:underline dark:text-blue-500'>
                                            View Certificate
                                        </a>
                                    </div>
                                    <p class="font-normal text-gray-500 dark:text-gray-400">University of Minnesota | Coursera</p>
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