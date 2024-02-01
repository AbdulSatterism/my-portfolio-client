import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import login from '../../../../assest/login/login.png'
import { useContext } from 'react';
import { AuthContext } from '../../../../Provider/AuthProvider';

const Signup = () => {
    const [error, setError] = useState('');
    const { updateUserProfile, createUser } = useContext(AuthContext)
    const navigate = useNavigate();

    const handleSignup = event => {
        setError('')
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, email, password)
        createUser(email, password)
            .then(result => {
                const user = result.user;

                updateUserProfile(name)
                    .then(() => {
                        form.reset()
                        // console.log(user)
                        saveUserDB(name, email)
                    }).catch((err) => {
                        setError(err.message)
                    });

            })
            .catch((err) => {
                const errorMessage = err.message;
                setError(errorMessage)
            });
    }

    //save user in database
    const saveUserDB = (name, email) => {
        const user = { name, email };
        fetch('http://localhost:5000/user', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('User created successfully');
                    navigate('/')
                }

            })
    }

    return (
        <div className="min-h-screen hero bg-base-200">
            <div className="flex-col hero-content md:flex-row-reverse">
                <div className="text-center md:w-1/2 lg:text-left">
                    <h1 className="text-5xl font-bold text-center">Login</h1>
                    <img src={login} alt="" />
                </div>
                <div className="max-w-sm shadow-2xl card md:w-1/2 bg-base-100">
                    <form onSubmit={handleSignup} className="card-body">

                        <div className="">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" required name='name' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" required name='email' placeholder="email" className="input input-bordered" />
                        </div>

                        <div className="">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" required name='password' placeholder="password" className="input input-bordered" />

                        </div>


                        <div className="mt-6 ">
                            <input className="w-full btn btn-primary" type="submit" value="Login" />
                        </div>

                        <p className='mx-auto text-center'><small className='text-red-600'>{error}</small></p>

                        <p className='mx-auto text-center'><small >Have an account? <Link to='/login' className='text-gray-500'>Please Login</Link> </small></p>
                    </form>

                </div>
            </div>
        </div>

    );
};

export default Signup;