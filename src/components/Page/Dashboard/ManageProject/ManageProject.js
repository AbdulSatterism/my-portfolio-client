import React from 'react';
import useProject from '../../../../hooks/useProject';
import { FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';

const ManageProject = () => {
    const [projects, refetch] = useProject();
    const axiosSecure = useAxiosSecure();

    const handleDelete = (project) => {
        const sureMessage = window.confirm('Are you sure want to delete this project')
        if (sureMessage) {
            axiosSecure.delete(`/project/delete/${project._id}`)
                .then(data => {
                    if (data.data.modifiedCount) {
                        refetch()
                        alert(`Now ${project.name} is permanently delete`)
                    }
                })
        }
    }

    return (
        <div className='w-full'>
            <h3 className="text-3xl font-semibold my-4">Total Projects: {projects?.length}</h3>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Project Image</th>
                            <th>Project Name</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            projects.map((project, i) => <tr key={project._id}>
                                <th>{i + 1}</th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-20 h-20">
                                                <img src={project.img} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="font-bold">{project.projectName}</div>
                                </td>
                                <td>
                                    <Link to={`/admin/update/${project?._id}`}>
                                        <button className="btn btn-primary btn-sm  text-white">update </button>
                                    </Link>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(project)} className="btn btn-danger btn-sm  text-white"><FaTrashAlt></FaTrashAlt> </button>
                                </td>
                            </tr>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ManageProject;