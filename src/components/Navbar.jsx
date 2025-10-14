import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  const commonClasses = "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300";
  // नए कलर का इस्तेमाल करें
  const activeClass = "bg-super-king-blue text-super-king-gold"; // Active लिंक के लिए गहरा नीला बैकग्राउंड और गोल्ड टेक्स्ट
  const inactiveClass = "text-super-king-light-grey hover:bg-super-king-dark-blue hover:text-super-king-gold"; // इनएक्टिव के लिए हल्का ग्रे टेक्स्ट, होवर पर नीला और गोल्ड

  const getLinkClass = ({ isActive }) => `${commonClasses} ${isActive ? activeClass : inactiveClass}`;
  const mobileLinkClass = "block px-3 py-2 rounded-md text-base font-medium";

  return (
    <nav className="bg-super-king-black sticky top-0 z-50 shadow-lg border-b border-super-king-blue"> {/* Navbar बैकग्राउंड ब्लैक, नीचे नीली बॉर्डर */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              {/* आपका लोगो यहाँ */}
              <Link to="/" className="flex items-center space-x-2">
                <img src="/logo.png" alt="Super King Cricket Team Logo" className="h-10 w-auto" /> {/* अपनी इमेज का सही पाथ दें */}
                <span className="text-2xl font-bold text-super-king-gold hover:text-super-king-dark-gold transition-colors font-heading hidden sm:block">
                  Super King Cricket Team
                </span>
              </Link>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink to="/" className={getLinkClass} end>Home</NavLink>
              <NavLink to="/about" className={getLinkClass}>About</NavLink>
              <NavLink to="/team" className={getLinkClass}>Team</NavLink>
              <NavLink to="/fixtures" className={getLinkClass}>Fixtures</NavLink>
              <NavLink to="/gallery" className={getLinkClass}>Gallery</NavLink>
              <NavLink to="/contact" className={getLinkClass}>Contact</NavLink>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-super-king-blue inline-flex items-center justify-center p-2 rounded-md text-super-king-gold hover:text-super-king-light-grey hover:bg-super-king-dark-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-super-king-black focus:ring-super-king-gold"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden origin-top-right animate-fade-in-down"> {/* मोबाइल मेनू के लिए एनिमेशन */}
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-super-king-grey"> {/* मोबाइल मेनू का बैकग्राउंड */}
            <NavLink to="/" className={({isActive}) => `${mobileLinkClass} ${isActive ? activeClass : inactiveClass}`} onClick={closeMenu} end>Home</NavLink>
            <NavLink to="/about" className={({isActive}) => `${mobileLinkClass} ${isActive ? activeClass : inactiveClass}`} onClick={closeMenu}>About</NavLink>
            <NavLink to="/team" className={({isActive}) => `${mobileLinkClass} ${isActive ? activeClass : inactiveClass}`} onClick={closeMenu}>Team</NavLink>
            <NavLink to="/fixtures" className={({isActive}) => `${mobileLinkClass} ${isActive ? activeClass : inactiveClass}`} onClick={closeMenu}>Fixtures</NavLink>
            <NavLink to="/gallery" className={({isActive}) => `${mobileLinkClass} ${isActive ? activeClass : inactiveClass}`} onClick={closeMenu}>Gallery</NavLink>
            <NavLink to="/contact" className={({isActive}) => `${mobileLinkClass} ${isActive ? activeClass : inactiveClass}`} onClick={closeMenu}>Contact</NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;