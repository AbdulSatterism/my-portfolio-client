import React from 'react';
import Project from './Project';
import useProject from '../../../hooks/useProject';
import Loading from '../../Loading/Loading';

const Projects = () => {
    const [projects, , isLoading] = useProject()

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='my-10'>
            <div className="divider py-10 text-2xl text-center text-slate-900 uppercase">Projects</div>

            <div className='container mx-auto '>
                {
                    projects?.map(project => <Project
                        key={project._id}
                        project={project}
                    ></Project>)
                }
            </div>
        </div>
    );
};

export default Projects;