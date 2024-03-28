import React from 'react';
import Skill from './Skill';
import useSkill from '../../../hooks/useSkill';
import Loading from '../../Loading/Loading';

const Skills = () => {
    const [skills, , isLoading] = useSkill();

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className=' my-10 '>
            <div className="divider py-10 text-2xl text-center text-slate-900 uppercase">Skills</div>

            <div className='grid container mx-auto gap-2 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1'>
                {
                    skills?.map(skill => <Skill
                        key={skill._id}
                        skill={skill}
                    ></Skill>)
                }
            </div>
        </div>
    );
};

export default Skills;