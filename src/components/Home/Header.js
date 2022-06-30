import React from 'react';
import AddNewBill from './AddNewBill';

const Header = () => {
    return (
        <div class="navbar bg-gray-300">
            <div class="flex-1">
                <a href='/' class="btn btn-ghost normal-case text-xl">daisyUI</a>
                <div class="form-control">
                    <input type="text" placeholder="Search" class="input input-bordered bg-gray-300 border-gray-600" />
                </div>
            </div>
            <div class="navbar-end">
                <label for="new-bill-modal" class="btn">Add New Bill</label>
            </div>
            <AddNewBill />
        </div>

    );
};

export default Header;