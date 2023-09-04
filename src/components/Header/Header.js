import React, { } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {

    const menuItems = <>
        <li className='font-semibold text-orange-950 items '><Link to='/'>Home</Link> </li>
        <li className='font-semibold text-orange-950 items '><Link to='/skill'>Skill</Link> </li>
        <li className='font-semibold text-orange-950 items '><Link to='/project'>Project</Link> </li>
        <li className='font-semibold text-orange-950 items '><Link to='/contact'>Contact</Link> </li>

    </>

    return (
        <div>
            <div data-theme="cupcake" className="h-20 pt-12 navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown lg:hidden">
                        <label tabIndex={0} className="btn btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">

                            {menuItems}
                        </ul>
                    </div>
                    <button className='text-3xl text-orange-500 font-bold '>
                        Abdul Satter
                    </button>
                </div>
                <div className="hidden navbar-center lg:flex">
                    <ul className="px-1 menu menu-horizontal">
                        {menuItems}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;