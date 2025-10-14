import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// आपके दिए गए अपडेटेड आंकड़े
const stats = [
  { label: 'Matches Won', value: '45+' },
  { label: 'Championships', value: '5' },
  { label: 'Top Scorer', value: 'Ram Nath Yogi (800 Runs)' },
  { label: 'Best Bowler', value: 'Aditya Singh (40 Wickets)' },
];

// Framer Motion के लिए एनिमेशन वेरिएंट्स
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // एलिमेंट्स एक के बाद एक 0.2s के गैप से आएँगे
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

const Home = () => {
  return (
    <section 
      id="home" 
      className="relative flex-grow flex flex-col justify-center items-center text-center overflow-hidden py-20 md:py-0 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/stadium_bg.jpg')" }}
    >
      {/* टेक्स्ट को पढ़ने लायक बनाने के लिए डार्क ओवरले */}
      <div className="absolute inset-0 bg-super-king-black bg-opacity-75"></div>

      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Heading */}
        <motion.h2
          variants={itemVariants}
          className="text-5xl md:text-7xl font-extrabold text-super-king-gold leading-tight mb-4 font-heading drop-shadow-lg"
        >
          Welcome to the Home of the <span className="text-super-king-light-grey">Super Kings</span>
        </motion.h2>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-super-king-light-grey mb-12"
        >
          Passion, Teamwork, and Glory. Join Our Journey!
        </motion.p>

        {/* Call to Action Button */}
        <motion.div variants={itemVariants}>
          <Link
            to="/fixtures"
            className="inline-block bg-super-king-blue text-super-king-gold hover:bg-super-king-dark-blue hover:text-super-king-light-grey text-lg font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            View Upcoming Matches
          </Link>
        </motion.div>

        {/* Key Stats Section with Glassmorphism Effect */}
        <motion.div
          className="mt-20 max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 bg-black bg-opacity-50 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-2xl">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <p className="text-3xl md:text-4xl font-extrabold text-super-king-gold font-heading">{stat.value}</p>
                <p className="text-sm md:text-base text-super-king-light-grey mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;