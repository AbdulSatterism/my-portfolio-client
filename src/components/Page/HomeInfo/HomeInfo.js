import React from 'react';
import profileImage from '../../../assest/images/profile.png'
import { Link } from 'react-router-dom';

const HomeInfo = () => {
    return (
        <div className="hero bg-gradient-to-b from-blue-950">
            <div className="flex-col hero-content lg:flex-row-reverse">
                <img src={profileImage} className="rounded-full w-1/2 h-1/2  lg:w-1/2 lg:h-1/2" alt='' />
                <div className='px-8'>
                    <h1 className="text-3xl font-bold">Hi, I am <span className='text-orange-600'>MD. Abdul Satter</span></h1>
                    <h2 className='text-2xl font-semibold text-slate-300'>I am full stack web developer</h2>
                    <p className="py-6 text-xl text-white">I am expert as a full stack developer.I have the ability to build web applications that deliver exceptional results.I am expert and comfortable in HTML,CSS,Tailwind CSS,Javascript,React js,Mongodb,Node js, Express js.</p>
                    <Link to='https://drive.google.com/file/d/1fmbjs_tqCe6d9LMvdyEujm8OeswFyHI2/view' target='_blank'>
                        <button className="btn px-4 bg-gradient-to-r from-orange-500 to-blue-950 hover:bg-slate-100 text-white">See Resume</button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default HomeInfo;