import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';

const AddSkill = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosSecure = useAxiosSecure();

    const imageHostingToken = process.env.REACT_APP_Image_Token;
    const imageHostingURL = `https://api.imgbb.com/1/upload?key=${imageHostingToken}`;

    const onSubmit = (data) => {
        const formData = new FormData();
        formData.append('image', data.image[0]);
        fetch(imageHostingURL, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imageRes => {
                if (imageRes.success) {
                    const imgURL = imageRes.data.display_url;
                    const newSkill = { name: data.name, img: imgURL }
                    // console.log(newSkill)
                    // post new skill
                    axiosSecure.post(`/skill`, newSkill)
                        .then(data => {
                            if (data.data.insertedId) {
                                // console.log(data.data)
                                reset();
                                Swal.fire({
                                    position: 'top-center',
                                    icon: 'success',
                                    title: 'New skill added successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })
                }

            })
    }
    // img

    return (
        <div className='w-full px-10 my-10 '>
            <h1 className='text-2xl text-center '>Add A new skill</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full mb-4 ">
                    <label className="label">
                        <span className="label-text font-semibold">Skill Name* </span>
                    </label>
                    <input type="text" placeholder="Skill Name"
                        {...register("name", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full  " />

                </div>

                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text">Skill Image*</span>
                    </label>
                    <input type="file"
                        {...register("image", { required: true })}
                        className="file-input file-input-bordered w-full  " />

                </div>
                <input className='btn btn-sm mt-4 btn-primary ' type="submit" value="Add skill" />
            </form>

        </div>
    );
};

export default AddSkill;