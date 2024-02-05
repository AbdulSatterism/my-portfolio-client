import React from 'react';
import { FaBars, FaHome, FaUsers } from 'react-icons/fa';
import { GoProjectSymlink } from "react-icons/go";
import { SiSkillshare } from "react-icons/si";
import { MdManageAccounts } from "react-icons/md";
import { Outlet } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';

const DashboardLayout = () => {
    const [isAdmin] = useAdmin();

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-start">
                <label htmlFor="my-drawer-2" className="btn btn-active btn-ghost drawer-button lg:hidden"><FaBars></FaBars> </label>
                {/* Page content here */}
                <Outlet></Outlet>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    {
                        isAdmin && <>
                            <li className='text-whit'><NavLink to='/admin/admin-home' ><FaHome></FaHome>Admin Home</NavLink></li>
                            <li className=' '><NavLink to='/admin/all-user' ><FaUsers></FaUsers>All Member</NavLink></li>
                            <li className=' '><NavLink to='/admin/add-project' ><GoProjectSymlink></GoProjectSymlink> Add Project</NavLink> </li>
                            <li className=' '><NavLink to='/admin/add-skill' > <SiSkillshare></SiSkillshare>Add Skill </NavLink></li>
                            <li className=' '><NavLink to='/admin/manage-project' ><MdManageAccounts></MdManageAccounts>manage project </NavLink></li>
                            <li className=' '><NavLink to='/admin/manage-skill' ><MdManageAccounts></MdManageAccounts> manage skill </NavLink></li>

                            <div className="divider"></div>

                            <li className=' '><NavLink to='/'><FaHome></FaHome>Home</NavLink></li>
                        </>
                    }
                </ul>

            </div>
        </div>
    );
};

export default DashboardLayout;