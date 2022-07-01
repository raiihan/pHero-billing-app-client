import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate()
    const [error, setError] = useState('')
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async registerData => {
        try {
            const { data } = await axios.post('https://another-app-run.herokuapp.com/api/registration', registerData);
            if (data.insertedId) {
                setError('')
                navigate('/login')
            }

            console.log(data);
        } catch (error) {
            setError(error?.response?.data?.message)
        }

        console.log(registerData);

    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto">
                <div class="card-body">
                    <h3 className='text-3xl text-center'>Registration Form</h3>
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
                        <button type="submit" class="btn">Register</button>
                    </div>
                    <p>Already have an Account? <Link to={'/login'} className="text-blue-500">Login</Link></p>
                </div>
            </div>
        </form>
    );
};

export default Register;