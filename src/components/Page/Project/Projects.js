import React, { useEffect, useState } from 'react';
import Project from './Project';

const Projects = () => {
    const [projectElement, setProjectElement] = useState([]);

    useEffect(() => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => setProjectElement(data))
    }, [])

    return (
        <div className=''>
            <h1 className='text-center py-4 text-2xl text-slate-900 '>Projects</h1>

            <div className='  container mx-auto '>
                {
                    projectElement.map(project => <Project
                        key={project.id}
                        project={project}
                    ></Project>)
                }
            </div>
        </div>
    );
};

export default Projects;