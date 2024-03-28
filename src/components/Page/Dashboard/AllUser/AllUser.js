import React from 'react';
import { FaTrashAlt, FaUserShield } from 'react-icons/fa';
import { useQuery } from 'react-query';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import Loading from '../../../Loading/Loading';

const AllUser = () => {
    const axiosSecure = useAxiosSecure();

    const { data: users = [], refetch, isLoading } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/user`);
            return res.data;
        }
    })


    const handleMakeAdmin = (user) => {
        axiosSecure.patch(`/user/admin/${user._id}`)
            .then(data => {
                if (data.data.modifiedCount) {
                    refetch()
                    alert(`Now ${user.name} is admin...`)
                }
            })

    }


    const handleDelete = (user) => {
        const sureMessage = window.confirm('Are you sure want to delete this user')
        if (sureMessage) {
            axiosSecure.delete(`/user/delete/${user._id}`)
                .then(data => {
                    if (data.data.modifiedCount) {
                        refetch()
                        alert(`Now ${user.name} is permanently delete`)
                    }
                })
        }

    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='w-full'>
            <h3 className="text-3xl font-semibold my-4">Total Users: {users?.length}</h3>

            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) => <tr key={user?._id}>
                                <th>{i + 1}</th>
                                <td>{user?.name}</td>
                                <td>{user?.email}</td>
                                <td>{user.role === 'admin' ? 'admin' : <button
                                    onClick={() => handleMakeAdmin(user)}
                                    className="btn  btn-sm btn-primary text-white"><FaUserShield></FaUserShield>  </button>}</td>
                                <td>
                                    <button onClick={() => handleDelete(user)} className="btn btn-danger btn-sm  text-white"><FaTrashAlt></FaTrashAlt> </button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUser;