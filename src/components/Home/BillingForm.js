import React from 'react';
import { useForm } from "react-hook-form";

const BillingForm = ({ getData, editBill }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const newBill = {
            name: data.fullName,
            email: data.email,
            phone: data.phone,
            amount: parseFloat(data.amount)
        }
        getData(newBill)
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Full Name</span>
                            </label>
                            <input class="input input-bordered" {...register("fullName",
                                {
                                    required: { value: true, message: "Name is required" },
                                    minLength: { value: 3, message: "Minimum 3 character required" }
                                })}
                                placeholder="Enter Full Name"
                                defaultValue={editBill?.name}
                            />
                        </div>
                        <span className='text-red-600'>{errors.fullName?.message}</span>

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
                                defaultValue={editBill?.email}
                            />
                        </div>
                        <span className='text-red-600'>{errors.email?.message}</span>

                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Phone</span>
                            </label>
                            <input class="input input-bordered" {...register("phone",
                                {
                                    required: { value: true, message: "Phone Number is required" },
                                    pattern: { value: /^\(?[0-9]\d{10}$/, message: "Please provide a valid Phone Number" }
                                })}
                                placeholder="Enter Phone"
                                defaultValue={editBill?.phone}
                            />
                        </div>
                        <span className='text-red-600'>{errors.phone?.message}</span>

                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Paid Ammount</span>
                            </label>
                            <input class="input input-bordered" {...register("amount",
                                {
                                    required: { value: true, message: "Amount is required" },
                                    pattern: { value: /\(?[0-9]/, message: "Please provide a valid Amount" }
                                })}
                                placeholder="Enter Amount"
                                defaultValue={editBill?.amount}
                            />
                        </div>
                        <span className='text-red-600'>{errors.amount?.message}</span>

                        <div class="form-control mt-6">
                            <button type="submit" class="btn">{editBill ? 'Edit Bill' : 'Add Bill'}</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default BillingForm;