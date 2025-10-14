import React from 'react';
import { motion } from 'framer-motion'; // Framer Motion को इम्पोर्ट करें

// एनिमेशन के लिए एक वेरिएंट ऑब्जेक्ट
// यह पैरेंट कंटेनर के लिए है
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // इसके अंदर के एलिमेंट्स एक के बाद एक एनिमेट होंगे
    },
  },
};

// यह अंदर के हर एक आइटम (जैसे टेक्स्ट, इमेज) के लिए है
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  },
};

const About = () => {
  return (
    // सेक्शन को पूरी उपलब्ध ऊंचाई लेने और बैकग्राउंड इमेज सेट करने के लिए
    <section 
      id="about" 
      className="py-24 md:py-32 bg-super-king-grey flex-grow flex items-center bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/stadium_bg.jpg')" }} // बैकग्राउंड इमेज (public फोल्डर में रखें)
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Framer Motion का motion.div जो स्क्रॉल करने पर एनिमेशन को कण्ट्रोल करेगा */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible" // जब यह स्क्रीन पर दिखेगा तब एनिमेशन चलेगा
          viewport={{ once: true, amount: 0.3 }} // एनिमेशन सिर्फ एक बार चलेगा, जब 30% हिस्सा दिखेगा
        >
          {/* Glassmorphism कार्ड */}
          <motion.div 
            className="bg-black bg-opacity-50 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-2xl border border-white/20"
            variants={itemVariants} // यह पूरा कार्ड भी एनिमेट होकर आएगा
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              
              {/* बाईं तरफ की इमेज */}
              <motion.div variants={itemVariants} className="w-full h-auto">
                <img 
                  src="/logo.png" // आपका लोगो (public फोल्डर में रखें)
                  alt="Super King Team Logo" 
                  className="rounded-lg shadow-lg" 
                />
              </motion.div>
              
              {/* दाईं तरफ का टेक्स्ट */}
              <div className="text-super-king-light-grey">
                <motion.h2 
                  // ✅ सुधार: टेक्स्ट को और पढ़ने लायक बनाने के लिए drop-shadow-lg जोड़ा गया है
                  className="text-4xl lg:text-5xl font-extrabold text-super-king-gold font-heading mb-6 drop-shadow-lg"
                  variants={itemVariants}
                >
                  Forged in Passion, Defined by Victory
                </motion.h2>
                <motion.p className="text-lg mb-4" variants={itemVariants}>
                  Established in 2020, the Super King Cricket Team is more than just a team; it's a brotherhood united by a relentless passion for cricket. Our journey is built on the pillars of discipline, strategic gameplay, and an unyielding desire to dominate.
                </motion.p>
                <motion.p className="text-lg" variants={itemVariants}>
                  We aim to be a powerhouse in the local cricket scene, known for our aggressive style, sportsmanship, and a legacy of championships.
                </motion.p>
              </div>

            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;