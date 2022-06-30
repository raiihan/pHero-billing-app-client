import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import axiosPrivate from '../../api/axiosPrivate'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const BillingTable = () => {
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0)
    const count = 5;

    useEffect(() => {
        const getTotalBill = async () => {
            const { data } = await axios.get('http://localhost:5000/totalbillcount')
            setPageCount(Math.ceil(data?.count / 5))
        }
        getTotalBill()


    }, [])
    const { isLoading, error, data, refetch } = useQuery(['bills', page], async () =>
        await axiosPrivate.get(`/billing-list?page=${page}&count=${count}`)
    )
    const bills = data?.data;
    if (isLoading) {
        <p>loding.....</p>
    }
    if (error) {
        console.log(error.message);
    }
    const handlePageNumber = number => {
        refetch()
        setPage(number)
    }

    const handleBillDelete = id => {
        (async () => {
            const { data } = await axiosPrivate.delete(`/delete-billing/${id}`)
            if (data.deletedCount > 0) {
                refetch()
                toast.success('Deleted Successfully', {
                    position: "top-center",
                    autoClose: 5000,
                })
            }
        })()
    }

    return (
        <div class="overflow-x-auto mt-16">
            <table class="table table-zebra w-full">

                <thead>
                    <tr>
                        <th>Billing Id</th>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Paid Amount</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bills?.map(bill => <tr key={bill._id}>
                            <th>{bill._id}</th>
                            <td>{bill.name}</td>
                            <td>{bill.email}</td>
                            <td>{bill.phone}</td>
                            <td>{bill.amount}</td>
                            <td>
                                <button
                                    className='btn-xs btn'>
                                    <Link to={`/editbill/${bill._id}`}>Edit</Link>
                                </button> | <button
                                    onClick={() => handleBillDelete(bill._id)}
                                    className='btn-xs btn'>Delete</button></td>
                        </tr>)
                    }
                </tbody>
            </table>
            <div className="btn-group flex justify-center">
                {
                    [...Array(pageCount).keys()].map(number =>
                        <button
                            onClick={() => handlePageNumber(number)}

                            className={`btn ${page === number ? 'btn-active' : ''}`}>{number}</button>

                    )
                }
            </div>
        </div>
    );
};

export default BillingTable;