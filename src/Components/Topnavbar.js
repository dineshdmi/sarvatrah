import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HiOutlineBellAlert } from 'react-icons/hi2';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { FaChevronDown, FaUserCircle, FaBell, FaBars, FaTimes, FaLock } from 'react-icons/fa';
import { IoSettingsOutline } from 'react-icons/io5';
import logo from '../assets/images/Logo.png';

const TopNavbar = ({ sidebar, onToggleSidebar }) => {
    const [profileDropdown, setProfileDropdown] = useState(false);
    const [policyDropdown, setPolicyDropdown] = useState(false);
    const [count, setCount] = useState(10);
    const [navOpen, setNavOpen] = useState(false);
    const profileDropdownRef = useRef(null);
    const policyDropdownRef = useRef(null);
    const navigate = useNavigate();

    const handleProfileClick = () => {
        setProfileDropdown(prev => !prev);
        setPolicyDropdown(false);
    };

    const handlePolicyClick = () => {
        setPolicyDropdown(prev => !prev);
        setProfileDropdown(false);
    };

    const handleClickOutside = (event) => {
        if (
            (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target)) &&
            (policyDropdownRef.current && !policyDropdownRef.current.contains(event.target)) &&
            !event.target.closest('.navbar-toggle') // close nav when clicking outside
        ) {
            setProfileDropdown(false);
            setPolicyDropdown(false);
        }
    };

    const handleAlerts = () => {
        navigate('/notification');
    };

    const toggleNav = () => {
        setNavOpen(prev => !prev);
    };

    const handleLogout = (e) => {
        e.preventDefault();
        const confirmed = window.confirm('Are you sure you want to log out?');
        if (confirmed) {
            navigate('/'); // Redirect to home page after confirmation
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <>
            <div className="h-20 w-full bg-white flex justify-between items-center px-4 md:px-8 relative">
                <div className="flex items-center space-x-4">
                    <Link to="/" className="text-black text-xl font-bold">
                        <img src={logo} alt="Company Logo" className="h-16 w-28" />
                    </Link>
                    <div className="hidden md:flex items-center space-x-4">
                        <Link to="/" className="text-black text-lg flex items-center space-x-2 hover:text-blue-800 hover:underline decoration-2 ">
                            <span>Home</span>
                        </Link>
                        <Link to="/about" className="text-black text-lg flex items-center space-x-2 hover:text-blue-800 hover:underline decoration-2">
                            <span>About</span>
                        </Link>
                        <Link to="/history" className="text-black text-lg flex items-center space-x-2 hover:text-blue-800 hover:underline decoration-2">
                            <span>Booking History</span>
                        </Link>
                        <div className="relative flex items-center ml-4">
                            <button className="text-black text-lg flex items-center space-x-2 hover:text-blue-800 hover:underline decoration-2" onClick={handlePolicyClick}>
                                <span>Policy</span>
                                <MdOutlineKeyboardArrowDown className="text-black text-xl" />
                            </button>
                            {policyDropdown && (
                                <ul ref={policyDropdownRef} className="absolute top-8 left-0 bg-white list-none z-10 text-lg shadow-md rounded-md w-48">
                                    <Link to="/terms" className="text-black block py-3 px-4 hover:bg-blue-50 hover:underline">
                                        <li>Terms & Conditions</li>
                                    </Link>
                                    <Link to="/privacy" className="text-black block py-3 px-4 hover:bg-blue-50 hover:underline">
                                        <li>Privacy Policy</li>
                                    </Link>
                                    <Link to="/refund" className="text-black block py-3 px-4 hover:bg-blue-50 hover:underline">
                                        <li>Refund & Cancellation Policy</li>
                                    </Link>
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
                <div className="hidden md:flex items-center space-x-1">
                    <HiOutlineBellAlert className="text-black text-2xl cursor-pointer" onClick={handleAlerts} />
                    <div className="relative">
                        <div className="absolute bottom-1 right-0 h-4 w-4 rounded-full bg-red-600 text-white flex justify-center items-center text-xs">
                            {count}
                        </div>
                    </div>
                    <div className="flex items-center cursor-pointer" onClick={handleProfileClick}>
                        <FaUserCircle className="text-black text-2xl mr-2" />
                        {profileDropdown ? <FaChevronDown className="text-black text-xl ml-1" /> : <MdOutlineKeyboardArrowDown className="text-black text-xl ml-1" />}
                    </div>
                </div>
                <div className="md:hidden flex items-center">
                    <button onClick={toggleNav} className="navbar-toggle">
                        {navOpen ? <FaTimes className="text-black text-2xl" /> : <FaBars className="text-black text-2xl" />}
                    </button>
                </div>
            </div>
            {profileDropdown && (
                <ul ref={profileDropdownRef} className="w-64 absolute top-20 right-5 rounded-md bg-white list-none z-10 text-lg shadow-md" style={{ width: '20rem' }}>
                    <Link to="/profile" className="text-black block py-3 px-4 hover:bg-blue-50 hover:underline">
                        <li className="flex items-center">
                            <FaUserCircle className="text-xl mr-3" />
                            Profile
                        </li>
                    </Link>
                    <Link to="/changepassword" className="text-black block py-3 px-4 hover:bg-blue-50 hover:underline">
                        <li className="flex items-center">
                            <FaLock className="text-xl mr-3" />
                            Change Password
                        </li>
                    </Link>
                    <Link to="/notification" className="text-black block py-3 px-4 hover:bg-blue-50 hover:underline">
                        <li className="flex items-center">
                            <FaBell className="text-xl mr-3" />
                            Notification
                            <div className="w-6 h-7 rounded-full bg-black text-white ml-2">{count}</div>
                        </li>
                    </Link>
                    <a href="/logout" onClick={handleLogout} className="text-black block py-3 px-4 hover:bg-blue-50 hover:underline">
                        <li className="flex items-center">
                            <IoSettingsOutline className="text-xl mr-3" />
                            Logout
                        </li>
                    </a>
                </ul>
            )}
            {navOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full bg-white text-black text-lg z-10">
                    <Link to="/" className="block py-3 px-4 hover:bg-blue-50 hover:underline">
                        Home
                    </Link>
                    <Link to="/about" className="block py-3 px-4 hover:bg-blue-50 hover:underline">
                        About
                    </Link>
                    <Link to="/history" className="block py-3 px-4 hover:bg-blue-50 hover:underline">
                        Booking History
                    </Link>
                    <div className="relative">
                        <button className="block w-full text-left py-3 px-4 hover:bg-blue-50 hover:underline navbar-toggle" onClick={handlePolicyClick}>
                            Policy
                            <MdOutlineKeyboardArrowDown className="inline ml-2 text-xl" />
                        </button>
                        {policyDropdown && (
                            <ul ref={policyDropdownRef} className="bg-white list-none z-10 text-lg shadow-md rounded-md w-full">
                                <Link to="/terms" className="text-black block py-3 px-4 hover:bg-blue-50 hover:underline">
                                    <li>Terms & Conditions</li>
                                </Link>
                                <Link to="/privacy" className="text-black block py-3 px-4 hover:bg-blue-50 hover:underline">
                                    <li>Privacy Policy</li>
                                </Link>
                                <Link to="/refund" className="text-black block py-3 px-4 hover:bg-blue-50 hover:underline">
                                    <li>Refund & Cancellation Policy</li>
                                </Link>
                            </ul>
                        )}
                    </div>
                    <Link to="/profile" className="block py-3 px-4 hover:bg-blue-50 hover:underline">
                        Profile
                    </Link>
                    <Link to="/changepassword" className="block py-3 px-4 hover:bg-blue-50 hover:underline">
                        Change Password
                    </Link>
                    <Link to="/notification" className="block py-3 px-4 hover:bg-blue-50 hover:underline">
                        Notification
                    </Link>
                    <a href="/logout" onClick={handleLogout} className="block py-3 px-4 hover:bg-blue-50 hover:underline">
                        Logout
                    </a>
                </div>
            )}
        </>
    );
};

export default TopNavbar;
