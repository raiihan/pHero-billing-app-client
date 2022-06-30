import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import axiosPrivate from '../../api/axiosPrivate';
import BillingForm from './BillingForm';

const EditBill = () => {
    const { billId } = useParams();
    const [data, setData] = useState({})
    const navigate = useNavigate()
    useEffect(() => {
        (async () => {
            const { data } = await axiosPrivate.get(`/billing-list/${billId}`)
            setData(data);
        })()
    }, [billId])
    const editBill = async editeddata => {
        const { data } = await axiosPrivate.patch(`/update-billing/${billId}`, editeddata);
        if (data.modifiedCount > 0) {
            toast('Bill Updataed', {
                position: "top-center",
                autoClose: 5000,
            });
            navigate('/');
            console.log('data update');
        }
    }
    return (
        <div className='mx-auto w-3/6'>
            <BillingForm editBill={data} getData={editBill} />
        </div>
    );
};

export default EditBill;