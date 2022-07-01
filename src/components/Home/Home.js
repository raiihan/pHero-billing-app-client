import React, { useState } from 'react';
import BillingTable from './BillingTable';
import Header from './Header';

const Home = () => {
    const [searchTerm, setSerchTerm] = useState("");
    const [fetchFun, setFetchFun] = useState(null)
    const getSearchTerm = term => {
        setSerchTerm(term)
    }

    const getRefetch = refetch => {
        setFetchFun(refetch)
    }

    return (
        <div className='px-24'>
            <Header getSearchTerm={getSearchTerm} fetchFun={fetchFun} />
            <BillingTable search={searchTerm} getRefetch={getRefetch} />

        </div>
    );
};

export default Home;