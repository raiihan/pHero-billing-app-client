import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import EditBill from './components/Home/EditBill';
import Home from "./components/Home/Home";
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import { useQuery } from 'react-query';
import RefetchContext from './context/refetchContext';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import { useState } from 'react';
import axiosPrivate from './api/axiosPrivate';
import ProtectRout from './components/Auth/ProtectRout';

function App() {
  const [user, setLoginUser] = useState({});
  console.log(user);
  const { data, refetch } = useQuery('paid', async () =>
    await axiosPrivate.get("/billing-list"))
  const paidAmount = data?.data.reduce(function (acc, obj) { return acc + obj.amount; }, 0);

  return (
    <div>
      <RefetchContext.Provider value={refetch}>
        <Navbar paidAmount={paidAmount} />
        <Routes>
          <Route element={<ProtectRout user={user} />}>
            {/* <Route path='/' element={user && user._id ? <Home refetch={refetch} /> : <Login />} /> */}
            <Route path='/' element={<Home refetch={refetch} />} />
            <Route path='/editbill/:billId' element={<EditBill />} />
          </Route>
          <Route path='/login' element={<Login setLoginUser={setLoginUser} />} />
          <Route path='/register' element={<Register />} />
        </Routes>
        <ToastContainer />
      </RefetchContext.Provider>
    </div>
  );
}

export default App;
