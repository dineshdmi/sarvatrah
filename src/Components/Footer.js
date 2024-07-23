
import React from 'react';
import { Link } from 'react-router-dom';
import CompanyLogo from '../assets/images/Logo.png'; // Import your company logo image
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'; // Import social media icons

const Footer = () => {
    return (
        <footer className="bg-white p-6">
            <div className="flex flex-col md:flex-row justify-between items-center mb-6 md:mb-0 p-5">
                {/* Company Info Section */}
                <div className="flex flex-col items-center text-center md:text-left p-4 md:w-1/4">
                    <img src={CompanyLogo} alt="Company Logo" className="h-12 mb-4" />
                    <div className="max-w-lg mx-auto">
                        <p className="font-bold text-lg mb-4 text-center">Why Choose Sarvatrah?</p>
                        <p className="text-sm leading-relaxed text-center">
                            Established in 2000, Sarvatrah has since positioned itself as one of the leading companies, providing great offers, competitive airfares, exclusive discounts, and a seamless online booking experience to many of its customers. 
                        </p>
                    </div>
                </div>

                {/* Quick Links Section */}
                <div className="flex flex-col items-center md:items-start my-6 md:my-0 md:w-1/4 mt-6 md:mt-0 ml-20 md:mr-2 md:ml-2">
                    <h3 className="text-lg font-bold mb-2">Quick Links</h3>
                    <div className="flex flex-col space-y-2">
                        <Link to="/" className="text-black hover:text-blue-700">Home</Link>
                        <Link to="/about" className="text-black hover:text-blue-700">About</Link>
                        <Link to="/history" className="text-black hover:text-blue-700">Booking History</Link>
                    </div>
                </div>

                {/* Policies Section */}
                <div className="flex flex-col items-center md:items-start md:w-1/4 mt-6 md:mt-0 ml-20 md:mr-2 md:ml-2">
                    <h3 className="text-lg font-bold mb-2">Policies</h3>
                    <div className="flex flex-col space-y-2">
                        <Link to="/terms" className="text-black hover:text-blue-700">Terms & Conditions</Link>
                        <Link to="/privacy" className="text-black hover:text-blue-700">Privacy Policy</Link>
                        <Link to="/refund" className="text-black hover:text-blue-700">Refund & Cancellation Policy</Link>
                    </div>
                </div>

                {/* Contact Us Section */}
                <div className="flex flex-col items-center md:items-start md:w-1/4 mt-6 md:mt-0">
                    <h3 className="text-lg font-bold mb-2">Contact Us</h3>
                    <div className="flex flex-col space-y-2 text-center md:text-left">
                        <p className="text-black">Phone: +123-456-7890</p>
                        <p className="text-black">Email: contact@sarvatrah.com</p>
                        <p className="text-black">Address: 123 Main St, City, Country</p>
                    </div>
                </div>
            </div>

            {/* Social Media Icons Section */}
            <div className="flex justify-center space-x-4 mb-6">
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

            {/* Copyright Section */}
            <div className="border-t pt-4 text-center text-sm text-gray-600 font-semibold">
                &copy; {new Date().getFullYear()} Sarvatrah. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
