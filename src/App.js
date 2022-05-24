
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';

import Navbar from './Pages/Navbar/Navbar';
import Appointment from './Pages/Appointments/Appointment';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import Required from './Pages/Required/RequredAuth'
import Deshboard from './Pages/Deshboard/Deshboard';

import MyReview from './Pages/Deshboard/MyReview';
import User from './Pages/Deshboard/User';
import RequierAdmin from './Pages/Hook/RequierAdmin';
import AddDoctor from './Pages/Deshboard/AddDoctor';
import ManageDoctors from './Pages/Deshboard/ManageDoctors';
import Inventoey from './Pages/Home/Inventoey';
import Myorder from './Pages/Deshboard/Myorder';
import Payment from './Pages/Deshboard/Payment';
import ManageOrder from './Pages/Deshboard/ManageOrder';
import Footer from './Pages/Home/Footer/Footer';
import Blog from './Pages/Blog/Blog';
import MyProtfolio from './Pages/MyProtfolio/MyProtfolio';
import Nodata from './Pages/Nodata/Nodata'
import Myprofile from './Pages/Deshboard/Myprofile';

function App() {
return (
    <div>
      <Navbar></Navbar>
      <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='myportfolio' element={<MyProtfolio></MyProtfolio>}></Route>
       <Route path='/inventory/:id' element={
        <Required>
       <Inventoey></Inventoey>
      </Required>
      }></Route>
       <Route path='/appointment' element={
       <Required>
         <Appointment></Appointment>
       </Required>
       }></Route>
       <Route path='/blog' element={<Blog></Blog>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/register' element={<Register></Register>}></Route>
       <Route path='/deshboard' element={
         <Required>
            <Deshboard></Deshboard>
         </Required>
      }>
        <Route index element={<Myprofile></Myprofile>}></Route>
        <Route path='myorder' element={<Myorder></Myorder>}></Route>
        <Route path='review' element={<MyReview></MyReview>}></Route>
        <Route path='user' element={<RequierAdmin><User></User></RequierAdmin>}></Route>
        
        <Route path='add' element={<RequierAdmin><AddDoctor></AddDoctor></RequierAdmin>}></Route>
        <Route path='manageProducts' element={<RequierAdmin><ManageDoctors></ManageDoctors></RequierAdmin>}></Route>
        <Route path='manageOrder' element={<RequierAdmin><ManageOrder></ManageOrder></RequierAdmin>}></Route>
        
        <Route path='payment/:id' element={<Payment></Payment>}></Route>
        </Route>
        <Route path='*' element={<Nodata></Nodata>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
