import React from 'react';
import Project from './Project';
import useProject from '../../../hooks/useProject';

const Projects = () => {
    const [projects] = useProject()

    return (
        <div className=''>
            <h1 className='py-4 text-2xl text-center text-slate-900 '>Projects</h1>

            <div className='container mx-auto '>
                {
                    projects.map(project => <Project
                        key={project._id}
                        project={project}
                    ></Project>)
                }
            </div>
        </div>
    );
};

export default Projects;