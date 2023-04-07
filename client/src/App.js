import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import Booking from './pages/booking';
function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/booking" element = {<Booking/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
