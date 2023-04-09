import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import LoginUser from './pages/login';
import RegisterUser from './pages/register';
import Booking from './pages/booking';
import { LoginOption } from './pages/loginOption';
import { RegisterOption } from './pages/registerOption';
import { LoginDriver } from './pages/driverLoginPage';
import { RegisterDriver } from "./pages/registerDriver";
import { ProfilePageUser } from "./pages/profilePage";
import { ProfilePageDriver } from './pages/profilePageDriver';
import { DriverDashboard } from './pages/driverDashboard';
import { AdminPage } from './pages/adminPage';

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginOption />} />
        <Route path="/register" element={<RegisterOption />} />
        <Route path="/booking" element={<Booking />} />
        <Route path='/registerUser' element={<RegisterUser />} />
        <Route path='/loginUser' element={<LoginUser />} />
        <Route path='/registerDriver' element={<RegisterDriver />} />
        <Route path="/loginDriver" element={<LoginDriver />} />
        <Route path="/profileUser" element={<ProfilePageUser />} />
        <Route path="/driverDashboard" element={<DriverDashboard />} />
        <Route path="/profileDriver" element={<ProfilePageDriver />} />
        <Route path="/admin" element={<AdminPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
