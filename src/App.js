import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminDashboard from './components/Admin/AdminDashboard';
import AdminLogin from './components/Admin/AdminLogin';
import DoctorDashboard from './components/Doctor/DoctorDashboard';
import DoctorLogin from './components/Doctor/DoctorLogin';
import UserDashboard from './components/User/UserDashboard';
import UserLogin from './components/User/UserLogin';
import UserSignup from './components/User/UserSignup';
import Payment from './pages/Payment/Payment'
import BookingConfirmation from './components/User/BookingConfirmation';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound';
import UserAppointment from './components/User/UserAppointment'
import Blog from './pages/Blog/Blog';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Recipt from './pages/Reciept/Receipt'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/doctor-login" element={<DoctorLogin />} />
        <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/user-signup" element={<UserSignup />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/booking-confirmation" element={<BookingConfirmation />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/receipt" element={<Recipt />} />
        <Route path='/contact' element={<Contact/>}/> 
        <Route path="*" element={<NotFound />} />
        <Route path="/user-appointments" element={<UserAppointment />} />
      </Routes>
    </Router>
  );
}

export default App;
