import React, { useContext } from 'react';
import BillingForm from './BillingForm';
import RefetchContext from '../../context/refetchContext';
import axiosPrivate from '../../api/axiosPrivate';

const AddNewBill = () => {
    const refetch = useContext(RefetchContext)
    const addBill = (data, reset) => {
        axiosPrivate.post('/add-billing', data)
            .then(function (response) {
                if (response?.data?.insertedId) {
                    refetch()
                    reset()
                }
            })
    }
    return (
        <>
            {/* <!-- The button to open modal --> */}
            {/* <label for="new-bill-modal" class="btn modal-button">open modal</label> */}

            {/* <!-- Put this part before </body> tag --> */}
            <input type="checkbox" id="new-bill-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label for="new-bill-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <BillingForm getData={addBill} />
                </div>
            </div>
        </>
    );
};

export default AddNewBill;