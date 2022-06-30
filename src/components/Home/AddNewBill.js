import React from 'react';
import BillingForm from './BillingForm';
import axios from 'axios'

const AddNewBill = () => {
    const addBill = data => {
        console.log(data);
        axios.post('http://localhost:5000/add-billing', data)
            .then(function (response) {
                console.log(response);
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