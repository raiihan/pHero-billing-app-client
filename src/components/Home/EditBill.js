import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import axiosPrivate from '../../api/axiosPrivate';
import RefetchContext from '../../context/refetchContext';
import BillingForm from './BillingForm';

const EditBill = () => {
    const refetch = useContext(RefetchContext)
    const { billId } = useParams();
    const [data, setData] = useState({})
    const navigate = useNavigate()
    useEffect(() => {
        (async () => {
            const { data } = await axiosPrivate.get(`/billing-list/${billId}`)
            setData(data);
        })()
    }, [billId, refetch])
    const editBill = async editeddata => {
        const { data } = await axiosPrivate.patch(`/update-billing/${billId}`, editeddata);
        if (data.modifiedCount > 0) {
            refetch()
            toast('Bill Updataed', {
                position: "top-center",
                autoClose: 5000,
            });
            navigate('/');
        }
    }
    return (
        <div className='mx-auto w-3/6'>
            <BillingForm editBill={data} getData={editBill} />
        </div>
    );
};

export default EditBill;