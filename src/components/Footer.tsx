import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';

const Footer: React.FC = () => {
    return (
        <footer className="bg-green-900 text-white py-8 rounded-xl">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                {/* Logo and Description */}
                <div className="text-center md:text-left mb-4 md:mb-0">
                    <h2 className="text-2xl font-bold">Teta Nikmat</h2>
                    <p className="text-gray-300 mt-2">
                        Catering terbaik di Bandung, menyediakan berbagai menu spesial dengan cita rasa tak terlupakan.
                    </p>
                </div>

                {/* Contact Information */}
                <div className="text-center md:text-left mb-4 md:mb-0">
                    <h3 className="text-xl font-semibold">Kontak Kami</h3>
                    <p className="text-gray-300 flex items-center mt-2">
                        <MdPhone className="mr-2" /> +62 123-456-789
                    </p>
                    <p className="text-gray-300 flex items-center mt-2">
                        <MdEmail className="mr-2" /> info@dyummycatering.com
                    </p>
                </div>

                {/* Social Media Icons */}
                <div className="text-center md:text-left">
                    <h3 className="text-xl font-semibold">Ikuti Kami</h3>
                    <div className="flex justify-center md:justify-start mt-2 space-x-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                            <FaFacebook size={24} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                            <FaInstagram size={24} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                            <FaTwitter size={24} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                            <FaLinkedin size={24} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="mt-8 border-t border-white pt-4">
                <p className="text-center text-white text-sm">
                    © {new Date().getFullYear()} mkp. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
