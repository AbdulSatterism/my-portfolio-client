import React from 'react';
import { Link } from 'react-router-dom';

const Project = ({ project }) => {
    const { projectName, clientSite, serverSite, liveSite, img, description } = project;
    return (

        <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={img} className="max-w-sm rounded-lg shadow-2xl" alt='' />
            <div>
                <h1 className="text-5xl font-bold">{projectName}</h1>
                <p className="py-6">{description}</p>
                <div className='text-center '>
                    <Link className='no-underline  mx-2 ' to={clientSite} target='_black'>client site</Link>
                    <Link className='no-underline  mx-2' to={serverSite} target='_black'>server site</Link>
                    <Link className='no-underline  mx-2' to={liveSite} target='_black'>Live site</Link>
                </div>
            </div>
        </div>

    );
};

export default Project;