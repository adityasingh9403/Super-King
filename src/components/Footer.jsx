import React from 'react';
import { Link } from 'react-router-dom';
import { Youtube, Instagram, Facebook } from 'lucide-react';

// स्पॉन्सर्स का डेटा
const sponsorsData = [
    {
        name: 'Fire Safety Solutions',
        logo: '/sponser1.webp',
        containerClass: 'w-11/12 max-w-[320px] sm:w-80'
    },
    {
        name: 'SK Fabrication',
        logo: '/sponser2.jpeg', // फ़ाइल एक्सटेंशन ठीक किया गया
        containerClass: 'w-11/12 max-w-[240px] sm:w-60'
    },
];

// सोशल मीडिया लिंक्स
const socialLinks = [
    { name: 'YouTube', href: 'https://www.youtube.com/@SuperKingCricketTeam', icon: Youtube, colorClass: 'hover:text-red-600' },
    { name: 'Instagram', href: 'https://www.instagram.com/superkingcricketteam_official/', icon: Instagram, colorClass: 'hover:text-pink-500' },
    { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61582385399084', icon: Facebook, colorClass: 'hover:text-blue-600' },
];

// नेविगेशन लिंक्स
const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Team', path: '/team' },
    { name: 'Fixtures', path: '/fixtures' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
];

const Footer = () => {
    return (
        <footer className="bg-super-king-black border-t-2 border-super-king-blue pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Sponsor Section */}
                <div className="text-center mb-16">
                    <h3 className="text-3xl font-bold text-super-king-gold font-heading drop-shadow-lg">Our Valued Sponsors</h3>
                    <div className="flex flex-wrap justify-center items-center gap-8 mt-8">
                        {sponsorsData.map((sponsor, index) => (
                            <div
                                key={index}
                                className={`bg-white p-4 rounded-lg shadow-lg flex justify-center items-center h-32 transition-transform duration-300 hover:scale-105 hover:shadow-xl ${sponsor.containerClass}`}
                            >
                                <img
                                    src={sponsor.logo}
                                    alt={sponsor.name}
                                    className="max-h-full max-w-full object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* ✅ नया बेहतर फुटर लेआउट */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    {/* Column 1: About the Team */}
                    <div className="flex flex-col items-center md:items-start">
                        <Link to="/" className="flex items-center space-x-2 mb-4">
                            <img src="/logo.png" alt="Super King Logo" className="h-10 w-auto" />
                            <span className="text-xl font-bold text-super-king-gold font-heading">Super King Cricket Team</span>
                        </Link>
                        <p className="text-super-king-light-grey/80 max-w-xs">
                            A passionate tennis ball cricket team from Rau, Indore, believing in Team Spirit, Passion & Fair Play.
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 className="text-xl font-bold text-super-king-gold font-heading mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {navLinks.map(link => (
                                <li key={link.name}>
                                    <Link to={link.path} className="text-super-king-light-grey/80 hover:text-super-king-gold transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Follow Us */}
                    <div>
                        <h4 className="text-xl font-bold text-super-king-gold font-heading mb-4">Follow Us</h4>
                        <div className="flex justify-center md:justify-start space-x-6">
                            {socialLinks.map(social => (
                                <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className={`text-super-king-light-grey ${social.colorClass} transition-all duration-300 transform hover:scale-110`}>
                                    <social.icon size={32} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="text-center py-6 mt-12 border-t border-white/20">
                    <p className="text-gray-400">&copy; {new Date().getFullYear()} Super King Cricket Team. All Rights Reserved.</p>
                    <p className="text-gray-500 text-sm mt-2">
                        Designed by Aditya Singh
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

