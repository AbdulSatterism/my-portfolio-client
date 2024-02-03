import React from 'react';
import useSkill from '../../../../hooks/useSkill';
import { FaTrashAlt } from 'react-icons/fa';

const ManageSkill = () => {
    const [skills, refetch] = useSkill();

    const handleUpdate = (skill) => {

    }
    const handleDelete = (skill) => {
        const sureMessage = window.confirm('Are you sure want to delete this skill')
        if (sureMessage) {
            fetch(`http://localhost:5000/skill/delete/${skill._id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount) {
                        refetch()
                        alert(`Now ${skill.name} is permanently delete`)
                    }
                })
        }
    }

    return (
        <div className='w-full'>
            <h3 className="text-3xl font-semibold my-4">Total skills: {skills?.length}</h3>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>skill Image</th>
                            <th>skill Name</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            skills.map((skill, i) => <tr key={skill._id}>
                                <th>{i + 1}</th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-20 h-20">
                                                <img src={skill.img} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="font-bold">{skill.name}</div>
                                </td>
                                <td>
                                    <button onClick={() => handleUpdate(skill)} className="btn btn-primary btn-sm  text-white">update </button>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(skill)} className="btn btn-danger btn-sm  text-white"><FaTrashAlt></FaTrashAlt> </button>
                                </td>
                            </tr>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ManageSkill;