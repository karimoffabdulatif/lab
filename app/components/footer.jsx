import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='container animate-gradient-slide bg-gradient-to-r from-blue-900 to-black'>
            <div className='pt-7'>
                <h1 className='text-3xl text-white font-bold text-center sm:text-left'>Lab.UZ</h1>
            </div>

            <div className='flex flex-wrap sm:flex-nowrap justify-between pt-16'>
                <div className='w-full sm:w-auto'>
                    <h3 className='text-xl font-semibold text-white pb-5'>Product</h3>
                    <p className='text-white pb-3'>Simulations</p>
                    <p className='text-white pb-3'>Compare plans</p>
                </div>

                <div className='w-full sm:w-auto'>
                    <h3 className='text-xl font-semibold text-white pb-5'>Users</h3>
                    <p className='text-white pb-3'>Login</p>
                    <p className='text-white pb-3'>Community</p>
                    <p className='text-white pb-3'>Help Center</p>
                </div>

                <div className='w-full sm:w-auto'>
                    <h3 className='text-xl font-semibold text-white pb-5'>Company</h3>
                    <p className='text-white pb-3'>About Labster</p>
                    <p className='text-white pb-3'>Careers</p>
                    <p className='text-white pb-3'>Contact Us</p>
                </div>

                <div className='w-full sm:w-auto'>
                    <h3 className='text-xl font-semibold text-white pb-5'>Resources</h3>
                    <p className='text-white pb-3'>Blog</p>
                    <p className='text-white pb-3'>Events</p>
                    <p className='text-white pb-3'>Case Studies</p>
                    <p className='text-white pb-3'>Webinars</p>
                </div>

                <div className='w-full sm:w-auto'>
                    <h3 className='text-xl font-semibold text-white pb-5'>More</h3>
                    <p className='text-white pb-3'>Terms & Conditions</p>
                    <p className='text-white pb-3'>Privacy Policy</p>
                    <p className='text-white pb-3'>Cookie Policy</p>
                    <p className='text-white pb-3'>Accessibility</p>
                </div>
            </div>

            <div className='-mx-18 border-t-2 border-white'></div>

            <div className='flex flex-col sm:flex-row sm:justify-between pt-3 pb-3'>
                <div className='flex gap-7 justify-center sm:justify-start'>
                    <p className='text-gray-300 text-center sm:text-left'>© 2025 Labster, ApS</p>
                    <p className='text-blue-300 inline border-b-2 border-blue-300'>Privacy Settings</p>
                </div>

                <div className='flex gap-5 pt-5 sm:pt-0 justify-center sm:justify-start'>
                    <FaFacebook className="text-white w-7 h-7 hover:text-blue-500 hover:scale-110 transition-all duration-300" />
                    <FaInstagram className="text-white w-7 h-7 hover:text-pink-500 hover:scale-110 transition-all duration-300" />
                    <FaLinkedin className="text-white w-7 h-7 hover:text-blue-700 hover:scale-110 transition-all duration-300" />
                    <FaYoutube className="text-white w-7 h-7 hover:text-red-600 hover:scale-110 transition-all duration-300" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
