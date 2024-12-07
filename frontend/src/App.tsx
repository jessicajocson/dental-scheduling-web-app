import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../src/pages/home';
import LoginPage from './pages/login';
import Booking from '../src/pages/booking';
import UserDashboard from '../src/pages/dashboard';
import SignUpPage from '../src/pages/register';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<SignUpPage/>}/>
        <Route path="/booking" element={<Booking />} />
        <Route path="/dashboard" element={<UserDashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
