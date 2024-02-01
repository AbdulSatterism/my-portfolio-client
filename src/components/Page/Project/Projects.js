import React, { useEffect, useState } from 'react';
import Project from './Project';

const Projects = () => {
    const [projectElement, setProjectElement] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/project')
            .then(res => res.json())
            .then(data => setProjectElement(data))
    }, [])

    return (
        <div className=''>
            <h1 className='py-4 text-2xl text-center text-slate-900 '>Projects</h1>

            <div className='container mx-auto '>
                {
                    projectElement.map(project => <Project
                        key={project._id}
                        project={project}
                    ></Project>)
                }
            </div>
        </div>
    );
};

export default Projects;