import React, { useContext } from 'react';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import login from '../../../../assest/login/login.png'
import { AuthContext } from '../../../../Provider/AuthProvider';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const [error, setError] = useState('')
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleLogin = event => {
        setError('')
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signIn(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                navigate(from, { replace: true });
            })
            .catch((err) => {
                const errorMessage = err.message;
                setError(errorMessage)
            });
    }

    return (
        <div className="hero min-h-screen bg-white">
            <div className="hero-content flex-col md:flex-row-reverse">
                <div className="text-center md:w-1/2 lg:text-left">
                    <h1 className="text-5xl text-center font-bold">Login</h1>
                    <img src={login} alt="" />
                </div>
                <div className="card  md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">

                        <div className="">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>

                        <div className="">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>


                        <div className=" mt-6">
                            <input className="btn btn-primary w-full" type="submit" value="Login" />
                        </div>

                        <p className='text-center mx-auto'><small className='text-red-600'>{error}</small></p>

                        <p className='text-center mx-auto'><small >New here? <Link to='/signup' className='text-gray-500'>create an account</Link> </small></p>
                    </form>

                </div>
            </div>
        </div>


    );
};

export default Login;


