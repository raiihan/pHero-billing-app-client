import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import EditBill from './components/Home/EditBill';
import Home from "./components/Home/Home";
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/editbill/:billId' element={<EditBill />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
