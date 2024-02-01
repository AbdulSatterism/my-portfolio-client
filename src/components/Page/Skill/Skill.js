import React from 'react';

const Skill = ({ skill }) => {
    const { name, img } = skill;

    return (
        <div className="w-64 mb-4 shadow-md card bg-base-100 shadow-white">
            <figure><img className='p-2 ' src={img} alt="" /></figure>
            <div className="card-body">
                <h2 className="justify-center text-justify card-title items">
                    {name}
                </h2>
            </div>
        </div>
    );
};

export default Skill;