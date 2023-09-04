import React from 'react';
import profileImage from '../../../assest/images/profile.png'

const HomeInfo = () => {
    return (
        <div className="hero bg-fuchsia-50">
            <div className="flex-col hero-content lg:flex-row-reverse">
                <img src={profileImage} className="rounded-sm p-8 -mt-8 lg:w-1/2" alt='' />
                <div className='px-8'>
                    <h1 className="text-3xl font-bold">Hi, I am <span className='text-orange-600'>MD. Abdul Satter</span></h1>
                    <h2 className='text-2xl font-semibold text-slate-400'>I am full stack web developer</h2>
                    <p className="py-6 text-xl text-slate-500">i am expert as a MERN stack developer.I have the ability to build web applications that deliver exceptional results.I am expert and comfortable in HTML,CSS,Tailwind CSS,Javascript,React js,Mongodb,Node js, Express js.</p>
                    <button className="btn btn-success">See Resume</button>
                </div>
            </div>
        </div>
    );
};

export default HomeInfo;