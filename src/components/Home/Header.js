import React from 'react';
import AddNewBill from './AddNewBill';

const Header = ({ getSearchTerm, fetchFun }) => {

    const handleSearch = event => {
        if (event.code === 'Enter') {
            getSearchTerm(event.target.value);
        }
    }

    return (
        <>
            <div class="navbar bg-gray-300">
                <div class="flex-1">
                    <a href='/' class="btn btn-ghost normal-case text-xl">Billing</a>
                    <div class="form-control">
                        <input type="text"
                            onKeyUp={handleSearch}
                            placeholder="Search" class="input input-bordered bg-gray-300 border-gray-600 text-black" />
                    </div>
                </div>
                <div class="navbar-end">
                    <label for="new-bill-modal" class="btn">Add New Bill</label>
                </div>
                <AddNewBill fetchFun={fetchFun} />
            </div>
        </>

    );
};

export default Header;