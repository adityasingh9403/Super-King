import React from 'react';
import { motion } from 'framer-motion';
import { Users, Shield, Zap, Trophy, Film, Mic } from 'lucide-react'; // For awesome icons

// --- Animation Variants (same as Home page) ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  },
};

// --- Data for Principles Section ---
const principlesData = [
    { icon: Users, title: 'Team Spirit', description: 'One team, one dream. We stand by each other, on and off the field.' },
    { icon: Zap, title: 'Passion', description: 'Cricket isn\'t just a game; it\'s our driving force. We give our 100% in every match.' },
    { icon: Shield, title: 'Fair Play', description: 'Victory is essential, but we achieve it with honor, respect, and sportsmanship.' },
];

const About = () => {
  return (
    <section 
      id="about" 
      className="relative flex-grow flex flex-col justify-center items-center text-center overflow-hidden py-24 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/stadium_bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-super-king-black bg-opacity-85"></div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-20"
        >
          {/* Section 1: Main Introduction */}
          <motion.div 
            className="bg-black/50 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-2xl border border-white/20"
            variants={itemVariants}
          >
            <div className="grid md:grid-cols-5 gap-12 items-center">
              <motion.div variants={itemVariants} className="md:col-span-2 w-full h-auto">
                <img 
                  src="/logo.png"
                  alt="Super King Team Logo" 
                  className="rounded-lg shadow-lg max-w-[250px] mx-auto"
                />
              </motion.div>
              
              <div className="md:col-span-3 text-left">
                <motion.h2 
                  className="text-4xl lg:text-5xl font-extrabold text-super-king-gold font-heading mb-6 drop-shadow-lg"
                  variants={itemVariants}
                >
                  🏏 Super King – Tennis Ball Cricket Team! 🏆
                </motion.h2>
                <motion.p className="text-lg text-super-king-light-grey mb-4" variants={itemVariants}>
                  We are a passionate and competitive tennis ball cricket team from <span className="font-semibold text-super-king-gold">Rau, Indore,</span> who believe in Team Spirit, Passion & Fair Play.
                </motion.p>
                <motion.p className="text-lg text-super-king-light-grey" variants={itemVariants}>
                  Watch us battle it out in local tournaments, street matches, and thrilling rivalries!
                </motion.p>
              </div>
            </div>
          </motion.div>

          {/* Section 2: Our Core Principles */}
          <motion.div variants={itemVariants}>
              <h3 className="text-4xl font-bold text-super-king-gold font-heading mb-12 drop-shadow-lg">Our Core Principles</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {principlesData.map((principle, index) => (
                      <motion.div 
                        key={index}
                        className="bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-white/10 text-center transition-all duration-300 hover:border-super-king-gold hover:scale-105"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                      >
                          <div className="flex justify-center mb-4">
                              <principle.icon className="w-12 h-12 text-super-king-gold"/>
                          </div>
                          <h4 className="text-2xl font-bold text-white mb-2">{principle.title}</h4>
                          <p className="text-super-king-light-grey">{principle.description}</p>
                      </motion.div>
                  ))}
              </div>
          </motion.div>
          
          {/* Section 3: Follow Our Journey */}
          <motion.div 
            className="bg-black/50 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-2xl border border-white/20"
            variants={itemVariants}
          >
            <h3 className="text-4xl font-bold text-super-king-gold font-heading mb-8 drop-shadow-lg">What To Expect</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white">
                <div className="flex flex-col items-center space-y-2">
                    <Trophy className="w-10 h-10 text-super-king-gold"/>
                    <p>Match Highlights</p>
                </div>
                <div className="flex flex-col items-center space-y-2">
                    <Mic className="w-10 h-10 text-super-king-gold"/>
                    <p>Player Interviews</p>
                </div>
                <div className="flex flex-col items-center space-y-2">
                    <Shield className="w-10 h-10 text-super-king-gold"/>
                    <p>Drama & Sportsmanship</p>
                </div>
                <div className="flex flex-col items-center space-y-2">
                    <Film className="w-10 h-10 text-super-king-gold"/>
                    <p>Behind-the-Scenes Fun</p>
                </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;