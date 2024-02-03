import React from 'react';
import Skill from './Skill';
import useSkill from '../../../hooks/useSkill';

const Skills = () => {
    const [skills] = useSkill();

    return (
        <div className='  '>
            <h1 className='text-center py-4 text-2xl text-slate-700 '>Skills</h1>

            <div className='grid container mx-auto gap-2 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1'>
                {
                    skills.map(skill => <Skill
                        key={skill._id}
                        skill={skill}
                    ></Skill>)
                }
            </div>
        </div>
    );
};

export default Skills;