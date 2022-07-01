import React, { useState } from 'react';
import BillingTable from './BillingTable';
import Header from './Header';

const Home = () => {
    const [searchTerm, setSerchTerm] = useState("");
    const getSearchTerm = term => {
        setSerchTerm(term)
    }

    return (
        <div className='px-24'>
            <Header getSearchTerm={getSearchTerm} />
            <BillingTable search={searchTerm} />

        </div>
    );
};

export default Home;