import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import LoginUser from './pages/login';
import RegisterUser from './pages/register';
import Booking from './pages/booking';
import React from 'react';
import { LoginOption } from './pages/loginOption';
import { RegisterOption } from './pages/registerOption';
import { LoginDriver } from './pages/driverLoginPage';
import { RegisterDriver } from "./pages/registerDriver";
import { ProfilePageUser } from "./pages/profilePage";
import { ProfilePageDriver } from './pages/profilePageDriver';
import { DriverDashboard } from './pages/driverDashboard';
import { AdminPage } from './pages/adminPage';
import { Customers } from './pages/customers';
import { Drivers } from './pages/drivers';
import Book from './pages/book';
import { PastRidesUser } from './pages/pastRidesUser';
import CurrentRide from './pages/currentRide';
import Feedback from './pages/Feedback';
import Map from './pages/map';
import AdminLogin from './pages/adminLogin';

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginOption />} />
        <Route path="/register" element={<RegisterOption />} />
        <Route path="/booking" element={<Book />} />
        <Route path='/registerUser' element={<RegisterUser />} />
        <Route path='/loginUser' element={<LoginUser />} />
        <Route path='/registerDriver' element={<RegisterDriver />} />
        <Route path="/loginDriver" element={<LoginDriver />} />
        <Route path="/profileUser" element={<ProfilePageUser />} />
        <Route path="/driverDashboard" element={<DriverDashboard />} />
        <Route path="/profileDriver" element={<ProfilePageDriver />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/drivers" element={<Drivers />} />
        <Route path='/currentRide' element={<CurrentRide />} />
        <Route path='/pastRides' element={<PastRidesUser />} />
        <Route path = '/feedback/:id' element={<Feedback />} />
        <Route path = '/adminLogin' element = {<AdminLogin/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
