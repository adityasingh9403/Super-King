import React from 'react';
import { motion } from 'framer-motion';

// एनिमेशन के लिए वेरिएंट्स (पहले की तरह)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  },
};

const Contact = () => {
  // फॉर्म सबमिशन को हैंडल करने के लिए फंक्शन (अभी सिर्फ UI है)
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! This form is a demo. To make it functional, a backend service is needed.');
  };

  return (
    <section 
      id="contact" 
      className="py-20 md:py-28 bg-super-king-grey flex-grow flex items-center bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/stadium_bg.jpg')" }} // वही स्टेडियम बैकग्राउंड
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Glassmorphism Card */}
          <div className="bg-black bg-opacity-50 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20">
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-extrabold text-super-king-gold font-heading">Get In Touch</h2>
              <p className="text-lg text-super-king-light-grey mt-4 max-w-2xl mx-auto">
                Have a question, a proposal, or want to join the team? We'd love to hear from you.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Left Side: Contact Form */}
              <motion.form variants={containerVariants} onSubmit={handleSubmit} className="space-y-6">
                <motion.div variants={itemVariants}>
                  <label htmlFor="name" className="block text-super-king-gold font-bold mb-2">Full Name</label>
                  <input type="text" id="name" name="name" required className="w-full bg-super-king-grey bg-opacity-80 p-3 rounded-lg border border-super-king-blue focus:ring-2 focus:ring-super-king-gold focus:outline-none transition-shadow" />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <label htmlFor="email" className="block text-super-king-gold font-bold mb-2">Email Address</label>
                  <input type="email" id="email" name="email" required className="w-full bg-super-king-grey bg-opacity-80 p-3 rounded-lg border border-super-king-blue focus:ring-2 focus:ring-super-king-gold focus:outline-none transition-shadow" />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <label htmlFor="message" className="block text-super-king-gold font-bold mb-2">Message</label>
                  <textarea id="message" name="message" rows="4" required className="w-full bg-super-king-grey bg-opacity-80 p-3 rounded-lg border border-super-king-blue focus:ring-2 focus:ring-super-king-gold focus:outline-none transition-shadow"></textarea>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <button type="submit" className="w-full py-3 px-6 bg-super-king-blue text-super-king-gold font-bold rounded-lg shadow-lg hover:bg-super-king-dark-blue transition-all duration-300 transform hover:scale-105">
                    Send Message
                  </button>
                </motion.div>
              </motion.form>

              {/* Right Side: Direct Contact & Socials */}
              <motion.div variants={containerVariants} className="space-y-8">
                <motion.div variants={itemVariants}>
                  <h3 className="text-2xl font-bold text-super-king-gold font-heading mb-4">Contact Information</h3>
                  <div className="flex items-center space-x-4 text-lg text-super-king-light-grey mb-2">
                    {/* Email Icon */}
                    <svg className="w-6 h-6 text-super-king-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    <span>your.team.email@example.com</span>
                  </div>
                   {/* Phone Icon */}
                  <div className="flex items-center space-x-4 text-lg text-super-king-light-grey">
                    <svg className="w-6 h-6 text-super-king-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    <span>+91 12345 67890</span>
                  </div>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <h3 className="text-2xl font-bold text-super-king-gold font-heading mb-4">Follow Us</h3>
                  <div className="flex space-x-6">
                    <a href="https://www.youtube.com/@SuperKingCricketTeam" target="_blank" rel="noopener noreferrer" className="text-super-king-light-grey hover:text-super-king-gold transition-transform duration-300 transform hover:scale-110">
                      <svg className="h-12 w-12" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0C.488 3.45.029 5.758 0 12c.029 6.242.488 8.55 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.574 4.385-8.816-.029-6.242-.488-8.55-4.385-8.816zm-10.615 12.707V6.109l6.537 3.999-6.537 5.783z"/></svg>
                    </a>
                    <a href="https://www.instagram.com/superkingcricketteam_official/" target="_blank" rel="noopener noreferrer" className="text-super-king-light-grey hover:text-super-king-gold transition-transform duration-300 transform hover:scale-110">
                      <svg className="h-12 w-12" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664 4.771 4.919 4.919 1.266-.058 1.644.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.059 1.689.073 4.948.073s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.44-1.441-1.44z"/></svg>
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;