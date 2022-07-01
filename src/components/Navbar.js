
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ paidAmount }) => {


    return (
        <div class="navbar bg-gray-300 mb-20 px-24">
            <div class="flex-1">
                <a href='/' class="btn btn-ghost normal-case text-xl">P-Hero Billing App</a>
                <Link to={'/login'} className="text-lg">Login</Link>

            </div>
            <div class="navbar-end">
                <p>Paid Amount : {paidAmount}</p>
            </div>

        </div>
    );
};

export default Navbar;