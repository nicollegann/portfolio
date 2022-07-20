import { Element } from 'react-scroll';
import Loader from '../components/Loader.js'
import ProjectPortfolio from '../components/ProjectPortfolio'
import ProjectTutorManager from '../components/ProjectTutorManager';
import ProjectHarmonia from '../components/ProjectHarmonia';

function Projects() {    
    return (
        <Element id='projects' name='projects'>
            <Loader>
                <div className='w-4/5 mx-auto my-36 flex flex-col justify-center items-center'>
                    <p className='text-md uppercase text-brown-200 select-none'>My key projects</p>
                    <h1 className='text-brown-300 text-6xl font-bold text-center select-none'>Projects</h1>
                    
                    <div className='w-full flex flex-wrap justify-center items-center gap-10 mt-10'>
                        <ProjectPortfolio />
                        <ProjectTutorManager />
                        <ProjectHarmonia />
                    </div>
                </div>
            </Loader>
        </Element>
    );
}

export default Projects;