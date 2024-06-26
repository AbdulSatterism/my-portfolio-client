import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';

const UpdateProject = () => {
    const project = useLoaderData();
    const axiosSecure = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate();

    const imageHostingToken = process.env.REACT_APP_Image_Token;
    const imageHostingURL = `https://api.imgbb.com/1/upload?key=${imageHostingToken}`;

    const handleUpdate = data => {
        const formData = new FormData();
        formData.append('image', data.image[0])
        fetch(imageHostingURL, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imageRes => {
                if (imageRes.success) {
                    const imgURL = imageRes.data.display_url;
                    const { projectName, description, clientSite, serverSite, liveSite } = data;
                    const updateProject = { projectName, description, img: imgURL, clientSite, serverSite, liveSite }

                    axiosSecure.put(`/update/${project?._id}`, updateProject)

                        .then(data => {
                            reset();
                            if (data.data.modifiedCount > 0) {

                                Swal.fire({
                                    position: 'top-center',
                                    icon: 'success',
                                    title: 'project updated successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                            navigate('/admin/manage-project');
                        })
                }
            })
    };

    return (
        <div className='w-full px-10 my-10 '>
            <h1 className='text-2xl text-center '>update your{project?.projectName} project</h1>

            <form onSubmit={handleSubmit(handleUpdate)}>
                <div className="form-control w-full mb-4 ">
                    <label className="label">
                        <span className="label-text font-semibold">Project Name* </span>
                    </label>
                    <input type="text" placeholder="Project Name"
                        defaultValue={project?.projectName}
                        {...register("projectName", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full  " />

                </div>

                <div className='flex my-4'>

                    <div className="form-control w-full ml-4 ">
                        <label className="label">
                            <span className="label-text font-semibold">client site link* </span>
                        </label>
                        <input type="url" placeholder="url"
                            defaultValue={project?.clientSite}
                            {...register("clientSite", { required: true })}
                            className="input input-bordered w-full  " />

                    </div>
                    <div className="form-control w-full ml-4 ">
                        <label className="label">
                            <span className="label-text font-semibold">Server site link* </span>
                        </label>
                        <input type="url" placeholder="url"
                            defaultValue={project?.serverSite}
                            {...register("serverSite", { required: true })}
                            className="input input-bordered w-full  " />

                    </div>
                    <div className="form-control w-full ml-4 ">
                        <label className="label">
                            <span className="label-text font-semibold">LIve site link* </span>
                        </label>
                        <input type="url" placeholder="url"
                            defaultValue={project?.liveSite}
                            {...register("liveSite", { required: true })}
                            className="input input-bordered w-full  " />

                    </div>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Project Description*</span>
                    </label>
                    <textarea
                        defaultValue={project?.description}
                        {...register("description", { required: true })}
                        className="textarea textarea-bordered w-full" placeholder="Project details"></textarea>
                </div>

                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text">Project Image*</span>
                    </label>
                    <input type="file"

                        {...register("image", { required: true })}
                        className="file-input file-input-bordered w-full  " />

                </div>
                <input className='btn btn-sm mt-4 px-2  mx-2 btn-primary ' type="submit" value="Update" />
            </form>

        </div>
    );
};

export default UpdateProject;