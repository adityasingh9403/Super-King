import React from 'react';

// स्पॉन्सर्स का डेटा (नाम और लोगो बदलें)
const sponsorsData = [
  // ✅ ज़रूरी: सुनिश्चित करें कि ये PNG फ़ाइलें हैं जिनका बैकग्राउंड पारदर्शी है
  { name: 'Fire Safety Solutions', logo: '/sponser1.jpg' },
  { name: 'SK Fabrication', logo: '/sponser2.jpeg' },
];

const Footer = () => {
    return (
        <footer className="bg-super-king-black border-t-2 border-super-king-blue pt-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Sponsor Section */}
                <div className="text-center mb-12">
                    <h3 className="text-3xl font-bold text-super-king-gold font-heading drop-shadow-lg">Our Valued Sponsors</h3>
                </div>

                {/* ✅ नया और बेहतर: स्टैटिक लोगो ग्रिड */}
                <div className="flex justify-center items-center gap-12 md:gap-16">
                    {sponsorsData.map((sponsor, index) => (
                        <div key={index}>
                            <img 
                                src={sponsor.logo} 
                                alt={sponsor.name} 
                                className="h-20 object-contain mx-auto transition-opacity duration-300 hover:opacity-80" 
                            />
                        </div>
                    ))}
                </div>

                {/* Copyright Section */}
                <div className="text-center py-6 mt-12 border-t border-gray-700">
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

