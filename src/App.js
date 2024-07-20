// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import ChangePassword from './Components/Pages/ChangPassword';
import User from './Components/User';
import Notifications from './Components/Pages/Notifications';
import './index.css';
import TopNavbar from './Components/Topnavbar';
import History from './Components/Booking_History';
import About from './Components/Pages/About';
import Profile from './Components/Pages/Profile';
import Footer from './Components/Footer'; 
import Terms from './Components/Pages/Terms';
import Privacy from './Components/Pages/Privacy';
import Refund from './Components/Pages/Refund';

const App = () => {
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-blue-50">
        <TopNavbar sidebar={sidebar} />

        <div className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/user" element={<User />} />
            <Route path="/history" element={<History />} />
            <Route path="/changepassword" element={<ChangePassword />} />
            <Route path="/notification" element={<Notifications />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/logout" element={<div>Logout</div>} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/refund" element={<Refund />} />
          </Routes>

        </div>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
