import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = ({ setLoginUser }) => {
    const navigate = useNavigate()
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [error, setError] = useState('')
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async loginData => {
        try {
            const { data } = await axios.post('https://another-app-run.herokuapp.com/api/login', loginData);
            setError('');
            navigate(from, { replace: true })
            setLoginUser(data?.user);
            const accessJWT = data?.accessJWT;
            localStorage.setItem('userInfo', JSON.stringify(data?.user));
            localStorage.setItem('accessJWT', accessJWT);
        } catch (error) {
            setError(error?.response?.data?.message)
        }
        // console.log(data);

    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto">
                    <div class="card-body">
                        <h3 className='text-3xl text-center'>Login Form</h3>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input class="input input-bordered" {...register("email",
                                {
                                    required: { value: true, message: "Email Address is required" },
                                    pattern: { value: /\S+@\S+\.\S+/, message: "Please provide a valid Email" }
                                })}
                                placeholder="Enter Email Address"
                            />
                        </div>
                        <span className='text-red-600'>{errors.email?.message}</span>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input type="password" class="input input-bordered" {...register("password",
                                {
                                    required: { value: true, message: "password is required" },
                                    minLength: { value: 7, message: "Minimum 7 character required" }
                                })}
                                placeholder="Enter Pass"

                            />
                        </div>
                        <span className='text-red-600'>{errors.password?.message}</span>
                        {error && <span className='text-red-600'>{error}</span>}

                        <div class="form-control mt-6">
                            <button type="submit" class="btn">Login</button>
                        </div>
                        <p>Don't have an Account? <Link to={'/register'} className="text-blue-500">Register</Link></p>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;