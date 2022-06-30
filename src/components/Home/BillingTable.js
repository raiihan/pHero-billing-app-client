import React from 'react';

const BillingTable = () => {
    return (
        <div class="overflow-x-auto mt-16">
            <table class="table table-zebra w-full">
                {/* <!-- head --> */}
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
                    {/* <!-- row 1 --> */}
                    <tr>
                        <th>1</th>
                        <td>Cy Ganderton</td>
                        <td>Cy@Ganderton.com</td>
                        <td>Quality Control Specialist</td>
                        <td>Blue</td>
                        <td>Edit / Delete</td>
                    </tr>
                    {/* <!-- row 2 --> */}
                    <tr>
                        <th>2</th>
                        <td>Hart Hagerty</td>
                        <td>Cy@Ganderton.com</td>
                        <td>Desktop Support Technician</td>
                        <td>Purple</td>
                        <td>Edit / Delete</td>
                    </tr>
                    {/* <!-- row 3 --> */}
                    <tr>
                        <th>3</th>
                        <td>Brice Swyre</td>
                        <td>Cy@Ganderton.com</td>
                        <td>Tax Accountant</td>
                        <td>Red</td>
                        <td>Edit / Delete</td>
                    </tr>
                    <tr>
                        <th>3</th>
                        <td>Brice Swyre</td>
                        <td>Cy@Ganderton.com</td>
                        <td>Tax Accountant</td>
                        <td>Red</td>
                        <td>Edit / Delete</td>
                    </tr>
                    <tr>
                        <th>3</th>
                        <td>Brice Swyre</td>
                        <td>Cy@Ganderton.com</td>
                        <td>Tax Accountant</td>
                        <td>Red</td>
                        <td>Edit / Delete</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default BillingTable;