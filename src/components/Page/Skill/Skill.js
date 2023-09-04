import React from 'react';

const Skill = ({ skill }) => {
    const { name, img } = skill;

    return (
        <div className="card w-64 bg-base-100 shadow-md mb-8 shadow-white">
            <figure><img className='p-2 ' src={img} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title justify-center text-justify">
                    {name}
                </h2>
            </div>
        </div>
    );
};

export default Skill;