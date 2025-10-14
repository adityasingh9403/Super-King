import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 border-t border-gray-700">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-gray-400">&copy; {new Date().getFullYear()} Super King Cricket Team. All Rights Reserved.</p>
                <p className="text-gray-500 text-sm mt-2">
                    Designed by Aditya Singh
                </p>
            </div>
        </footer>
    );
};

export default Footer;