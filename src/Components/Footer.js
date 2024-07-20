import React from 'react';
import { Link } from 'react-router-dom';
import CompanyLogo from '../assets/images/Logo.png'; // Import your company logo image
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'; // Import social media icons

const Footer = () => {
    return (
        <footer className="bg-white p-6">
            <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                <div className="flex flex-col items-center md:items-start">
                    <img src={CompanyLogo} alt="Company Logo" className="h-12 mb-2" />
                    <div className="text-center md:text-left">
                        <p className="font-bold">Sarvatrah</p>
                        <p className="text-sm">123 Street Name, City, Country</p>
                    </div>
                </div>
                <div className="flex flex-col items-center md:items-start my-4 md:my-0">
                    <h3 className="text-lg font-bold mb-2">Quick Links</h3>
                    <div className="flex flex-col space-y-2">
                        <Link to="/" className="text-black hover:text-blue-700">Home</Link>
                        <Link to="/about" className="text-black hover:text-blue-700">About</Link>
                        <Link to="/history" className="text-black hover:text-blue-700">Booking History</Link>
                    </div>
                </div>
                <div className="flex flex-col items-center md:items-start">
                    <h3 className="text-lg font-bold mb-2">Policies</h3>
                    <div className="flex flex-col space-y-2">
                        <Link to="/terms" className="text-black hover:text-blue-700">Terms & Conditions</Link>
                        <Link to="/privacy" className="text-black hover:text-blue-700">Privacy Policy</Link>
                        <Link to="/refund" className="text-black hover:text-blue-700">Refund & Cancellation Policy</Link>
                    </div>
                </div>
            </div>
            <div className="flex justify-center space-x-4 mt-6">
                <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-600 hover:text-blue-800 transform transition-transform duration-300 hover:scale-110"
                >
                    <FaFacebookF size={20} />
                </a>
                <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-400 hover:text-blue-600 transform transition-transform duration-300 hover:scale-110"
                >
                    <FaTwitter size={20} />
                </a>
                <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-pink-500 hover:text-pink-700 transform transition-transform duration-300 hover:scale-110"
                >
                    <FaInstagram size={20} />
                </a>
                <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-700 hover:text-blue-900 transform transition-transform duration-300 hover:scale-110"
                >
                    <FaLinkedinIn size={20} />
                </a>
            </div>
            <div className="mt-6 border-t pt-4 text-center text-sm text-gray-600 font-semibold">
                &copy; {new Date().getFullYear()} Sarvatrah. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
