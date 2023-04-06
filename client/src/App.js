import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import {login} from './pages/login';
import {Register} from './pages/register';
function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<login/>} />
        <Route path="/register" element={<register/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
