import React, { useEffect, useState } from 'react';
import Skill from './Skill';

const Skills = () => {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        fetch('skills.json')
            .then(res => res.json())
            .then(data => setSkills(data))
    }, [])

    return (
        <div className='  '>
            <h1 className='text-center py-4 text-2xl text-slate-700 '>Skills</h1>

            <div className='grid container mx-auto gap-2 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1'>
                {
                    skills.map(skill => <Skill
                        key={skill.id}
                        skill={skill}
                    ></Skill>)
                }
            </div>
        </div>
    );
};

export default Skills;