import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import LoginUser from './pages/login';
import RegisterUser from './pages/register';
import Booking from './pages/booking';
import { LoginOption } from './pages/loginOption';
import { RegisterOption } from './pages/registerOption';
import {LoginDriver} from './pages/driverLoginPage';
import {RegisterDriver} from "./pages/registerDriver";
function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<LoginOption/>} />
        <Route path="/register" element={<RegisterOption/>} />
        <Route path="/booking" element = {<Booking/>} />
        <Route path='/registerUser' element ={<RegisterUser />}/>
        <Route path = '/loginUser' element = {<LoginUser/>} />
        <Route path='/registerDriver' element ={<RegisterDriver />}/>
        <Route path="/loginDriver" element = {<LoginDriver/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
