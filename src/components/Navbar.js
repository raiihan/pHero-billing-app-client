import React from 'react';

const Navbar = () => {
    return (
        <div class="navbar bg-gray-300 mb-20 px-24">
            <div class="flex-1">
                <a href='/' class="btn btn-ghost normal-case text-xl">P-Hero Billing App</a>

            </div>
            <div class="navbar-end">
                <p>Paid Amount</p>
            </div>

        </div>
    );
};

export default Navbar;