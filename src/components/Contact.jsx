import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Youtube, Instagram, Facebook, Send, CheckCircle } from 'lucide-react'; // बेहतरीन आइकॉन के लिए

// एनिमेशन के लिए वेरिएंट्स
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
  const [formStatus, setFormStatus] = useState(''); // '', 'sending', 'success'

  // फॉर्म सबमिशन को हैंडल करने के लिए फंक्शन
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');
    // डेमो के लिए: 2 सेकंड बाद सक्सेस दिखाएँ
    setTimeout(() => {
      setFormStatus('success');
      // 5 सेकंड बाद मैसेज और फॉर्म रीसेट करें
      setTimeout(() => {
        setFormStatus('');
        e.target.reset(); // फॉर्म को रीसेट करें
      }, 5000);
    }, 2000);
  };

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 bg-super-king-grey flex-grow flex items-center bg-cover bg-center" // `bg-fixed` हटाया गया
      style={{ backgroundImage: "url('/stadium_bg.jpg')" }}
    >
      {/* बैकग्राउंड ओवरले */}
      <div className="absolute inset-0 bg-super-king-black bg-opacity-85"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Glassmorphism Card */}
          <div className="bg-black/50 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-2xl border border-white/20">
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-extrabold text-super-king-gold font-heading drop-shadow-lg">Get In Touch</h2>
              <p className="text-lg text-super-king-light-grey mt-4 max-w-2xl mx-auto">
                Have a question, a proposal, or want to join the team? We'd love to hear from you.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Left Side: Contact Form */}
              <motion.form variants={containerVariants} onSubmit={handleSubmit} className="space-y-6">
                <motion.div variants={itemVariants}>
                  <label htmlFor="name" className="block text-super-king-gold font-bold mb-2 text-left">Full Name</label>
                  <input type="text" id="name" name="name" required className="w-full text-white bg-black/40 p-3 rounded-lg border border-white/20 focus:ring-2 focus:ring-super-king-gold focus:outline-none transition-all" placeholder="Your Name" />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <label htmlFor="email" className="block text-super-king-gold font-bold mb-2 text-left">Email Address</label>
                  <input type="email" id="email" name="email" required className="w-full text-white bg-black/40 p-3 rounded-lg border border-white/20 focus:ring-2 focus:ring-super-king-gold focus:outline-none transition-all" placeholder="you@example.com" />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <label htmlFor="message" className="block text-super-king-gold font-bold mb-2 text-left">Message</label>
                  <textarea id="message" name="message" rows="4" required className="w-full text-white bg-black/40 p-3 rounded-lg border border-white/20 focus:ring-2 focus:ring-super-king-gold focus:outline-none transition-all" placeholder="Your message here..."></textarea>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <button
                    type="submit"
                    disabled={formStatus === 'sending'}
                    className="w-full flex items-center justify-center gap-3 py-3 px-6 bg-super-king-blue text-super-king-gold font-bold rounded-lg shadow-lg hover:bg-super-king-dark-blue transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send size={20} />
                    {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
                  </button>
                  {formStatus === 'success' && (
                    <p className="text-green-400 mt-4 flex items-center justify-center gap-2">
                      <CheckCircle size={20} />
                      Message Sent Successfully! We'll get back to you soon.
                    </p>
                  )}
                </motion.div>
              </motion.form>

              {/* Right Side: Direct Contact & Socials */}
              <motion.div variants={containerVariants} className="space-y-8">
                <motion.div variants={itemVariants}>
                  <h3 className="text-2xl font-bold text-super-king-gold font-heading mb-4 text-left">Contact Information</h3>
                  <a href="mailto:officialsuperking07@gmail.com" className="flex items-center space-x-4 text-lg text-super-king-light-grey mb-3 group">
                    <Mail className="w-6 h-6 text-super-king-gold" />
                    <span className="group-hover:text-super-king-gold transition-colors">officialsuperking07@gmail.com</span>
                  </a>
                  <a href="tel:+917999588460" className="flex items-center space-x-4 text-lg text-super-king-light-grey group">
                    <Phone className="w-6 h-6 text-super-king-gold" />
                    <span className="group-hover:text-super-king-gold transition-colors">+91 79995 88460</span>
                  </a>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <h3 className="text-2xl font-bold text-super-king-gold font-heading mb-4 text-left">Follow Us</h3>
                  <div className="flex space-x-6">
                    <a href="https://www.youtube.com/@SuperKingCricketTeam" target="_blank" rel="noopener noreferrer" className="text-super-king-light-grey hover:text-red-600 transition-all duration-300 transform hover:scale-110">
                      <Youtube size={48} />
                    </a>
                    <a href="https://www.instagram.com/superkingcricketteam_official/" target="_blank" rel="noopener noreferrer" className="text-super-king-light-grey hover:text-pink-500 transition-all duration-300 transform hover:scale-110">
                      <Instagram size={48} />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=61582385399084" target="_blank" rel="noopener noreferrer" className="text-super-king-light-grey hover:text-blue-600 transition-all duration-300 transform hover:scale-110">
                      <Facebook size={48} />
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