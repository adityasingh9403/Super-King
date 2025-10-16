import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  const commonClasses = "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300";
  const activeClass = "bg-super-king-blue text-super-king-gold";
  const inactiveClass = "text-super-king-light-grey hover:bg-super-king-dark-blue hover:text-super-king-gold";

  const getLinkClass = ({ isActive }) => `${commonClasses} ${isActive ? activeClass : inactiveClass}`;
  const mobileLinkClass = "block px-3 py-2 rounded-md text-base font-medium";

  const mobileMenuVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 }
    },
    closed: {
      opacity: 0,
      y: "-100%",
      transition: { duration: 0.3 }
    }
  };

  return (
    <>
      <nav className="bg-super-king-black sticky top-0 z-50 shadow-lg border-b border-super-king-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link to="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                  <img src="/logo.png" alt="Super King Cricket Team Logo" className="h-10 w-auto" />
                  <span className="text-2xl font-bold text-super-king-gold hover:text-super-king-dark-gold transition-colors font-heading hidden sm:block">
                    Super King – Tennis Ball Cricket Team
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
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                {/* ✅ एनिमेटेड आइकॉन (सही अलाइनमेंट के साथ) */}
                <motion.div animate={isOpen ? "open" : "closed"} className="relative w-6 h-6">
                  {/* Top bar */}
                  <motion.span
                    className="block absolute h-0.5 w-6 bg-current"
                    variants={{ closed: { y: 6 }, open: { y: 11, rotate: 45 } }}
                  ></motion.span>
                  {/* Middle bar */}
                  <motion.span
                    className="block absolute h-0.5 w-6 bg-current"
                    style={{ top: 11 }}
                    variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }}
                  ></motion.span>
                  {/* Bottom bar */}
                  <motion.span
                    className="block absolute h-0.5 w-6 bg-current"
                    variants={{ closed: { y: 16 }, open: { y: 11, rotate: -45 } }}
                  ></motion.span>
                </motion.div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu with Framer Motion */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* ✅ बैकड्रॉप ओवरले */}
              <motion.div
                className="fixed inset-0 bg-black/50 z-30 md:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeMenu}
              />
              <motion.div
                id="mobile-menu"
                className="absolute top-16 left-0 right-0 z-40 md:hidden bg-super-king-grey shadow-lg"
                variants={mobileMenuVariants}
                initial="closed"
                animate="open"
                exit="closed"
              >
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  <NavLink to="/" className={({ isActive }) => `${mobileLinkClass} ${isActive ? activeClass : inactiveClass}`} onClick={closeMenu} end>Home</NavLink>
                  <NavLink to="/about" className={({ isActive }) => `${mobileLinkClass} ${isActive ? activeClass : inactiveClass}`} onClick={closeMenu}>About</NavLink>
                  <NavLink to="/team" className={({ isActive }) => `${mobileLinkClass} ${isActive ? activeClass : inactiveClass}`} onClick={closeMenu}>Team</NavLink>
                  <NavLink to="/fixtures" className={({ isActive }) => `${mobileLinkClass} ${isActive ? activeClass : inactiveClass}`} onClick={closeMenu}>Fixtures</NavLink>
                  <NavLink to="/gallery" className={({ isActive }) => `${mobileLinkClass} ${isActive ? activeClass : inactiveClass}`} onClick={closeMenu}>Gallery</NavLink>
                  <NavLink to="/contact" className={({ isActive }) => `${mobileLinkClass} ${isActive ? activeClass : inactiveClass}`} onClick={closeMenu}>Contact</NavLink>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;