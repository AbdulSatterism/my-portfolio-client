import React, { } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';


const Header = () => {
    const { logOut, user } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(() => { })
    }

    const menuItems = <>
        <li className='font-semibold text-white  items '><Link to='/'>Home</Link> </li>
        <li className='font-semibold  text-white items '><Link to='/skill'>Skill</Link> </li>
        <li className='font-semibold text-white  items '><Link to='/project'>Project</Link> </li>
        <li className='font-semibold  text-white items '><Link to='/'>Contact</Link> </li>
        <li className='font-semibold text-white  items '><Link to='/admin'>Admin</Link> </li>

        {
            user &&
            <button onClick={handleLogOut} className="btn btn-ghost">Logout</button>
        }

    </>

    return (
        <div>
            <div data-theme="cupcake" className="h-20 pt-12 navbar bg-gradient-to-t from-blue-950 to-black">
                <div className="navbar-start">
                    <div className="dropdown lg:hidden">
                        <label tabIndex={0} className="btn btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="p-2 mt-3 shadow menu menu-compact dropdown-content  rounded-box w-52 ">

                            {menuItems}
                        </ul>
                    </div>
                    <button className='text-3xl font-semibold text-justify align-middle p-2 text-white '>
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