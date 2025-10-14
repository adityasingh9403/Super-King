import React from 'react';
import { motion } from 'framer-motion'; // Framer Motion को इम्पोर्ट करें

// अपने YouTube वीडियो के ID यहाँ डालें (URL में v= के बाद वाला हिस्सा)
const videoIds = ['33N83LPd__Q', '6oKIRFd_FBo', 'FCV87dKWoTU'];

// अपने YouTube Shorts के ID यहाँ डालें (URL में shorts/ के बाद वाला हिस्सा)
const shortsIds = [
  'MLziGqcytxg', // From https://youtube.com/shorts/MLziGqcytxg?si=UVHwJQ31TkeZnEHm
  'iH5sAMPtNos', // From https://youtube.com/shorts/iH5sAMPtNos?si=BWo3nUtiRVvKEoYB
  'ZoH4gCrU0pU',  // From https://youtube.com/shorts/ZoH4gCrU0pU?si=uJ5B5yWLJgiesXO2
  'GsqItt7abOM',
  'MLziGqcytxg'
];

// एनिमेशन के लिए वेरिएंट्स
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // इसके अंदर के एलिमेंट्स एक के बाद एक एनिमेट होंगे
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

const Gallery = () => {
  return (
    <section 
      id="gallery" 
      className="py-20 md:py-28 bg-super-king-grey flex-grow bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/stadium_bg.jpg')" }} // बाकी पेजों की तरह बैकग्राउंड इमेज
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Framer Motion का motion.div जो स्क्रॉल करने पर एनिमेशन को कण्ट्रोल करेगा */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible" // जब यह स्क्रीन पर दिखेगा तब एनिमेशन चलेगा
          viewport={{ once: true, amount: 0.2 }} // एनिमेशन सिर्फ एक बार चलेगा, जब 20% हिस्सा दिखेगा
        >
          {/* पेज टाइटल */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-super-king-gold font-heading">Our Gallery</h2>
            <p className="text-lg text-super-king-light-grey mt-4">Moments from the field, captured forever.</p>
          </motion.div>

          {/* === वीडियो सेक्शन === */}
          <motion.div variants={itemVariants} className="mb-20">
            <h3 className="text-3xl font-bold text-super-king-light-grey font-heading mb-8 text-center md:text-left">Match Highlights & Videos</h3>
            {videoIds.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {videoIds.map((id, index) => (
                  <motion.div 
                    key={id} 
                    variants={itemVariants} // हर वीडियो कार्ड एनिमेट होगा
                    className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-2xl border border-white/20 transition-all duration-300 hover:scale-105 hover:border-super-king-gold cursor-pointer"
                  >
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${id}`}
                      title={`YouTube video player ${index + 1}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen>
                    </iframe>
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.p variants={itemVariants} className="text-center text-xl text-super-king-light-grey">No match highlight videos available yet.</motion.p>
            )}
          </motion.div>

          {/* === शॉर्ट्स सेक्शन === */}
          <motion.div variants={itemVariants} className="mb-20">
            <h3 className="text-3xl font-bold text-super-king-light-grey font-heading mb-8 text-center md:text-left">Shorts & Reels</h3>
            {shortsIds.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {shortsIds.map((id, index) => (
                  <motion.div 
                    key={id} 
                    variants={itemVariants} // हर शॉर्ट्स कार्ड एनिमेट होगा
                    className="aspect-w-9 aspect-h-16 rounded-2xl overflow-hidden shadow-2xl border border-white/20 transition-all duration-300 hover:scale-105 hover:border-super-king-gold cursor-pointer"
                  >
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${id}`}
                      title={`YouTube shorts player ${index + 1}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen>
                    </iframe>
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.p variants={itemVariants} className="text-center text-xl text-super-king-light-grey">No shorts or reels available yet.</motion.p>
            )}
          </motion.div>

          {/* === YouTube बटन === */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <a
              href="https://www.youtube.com/@SuperKingCricketTeam"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-super-king-blue text-super-king-gold hover:bg-super-king-dark-blue hover:text-super-king-light-grey text-lg font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View More on YouTube
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;