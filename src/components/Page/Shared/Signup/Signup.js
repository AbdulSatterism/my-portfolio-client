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
                        console.log(user)
                        navigate('/')
                    }).catch((err) => {
                        setError(err.message)
                    });

            })
            .catch((err) => {
                const errorMessage = err.message;
                setError(errorMessage)
            });
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col md:flex-row-reverse">
                <div className="text-center md:w-1/2 lg:text-left">
                    <h1 className="text-5xl text-center font-bold">Login</h1>
                    <img src={login} alt="" />
                </div>
                <div className="card  md:w-1/2 max-w-sm shadow-2xl bg-base-100">
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


                        <div className=" mt-6">
                            <input className="btn btn-primary w-full" type="submit" value="Login" />
                        </div>

                        <p className='text-center mx-auto'><small className='text-red-600'>{error}</small></p>

                        <p className='text-center mx-auto'><small >Have an account? <Link to='/login' className='text-gray-500'>Please Login</Link> </small></p>
                    </form>

                </div>
            </div>
        </div>

    );
};

export default Signup;