import React from 'react';
import { motion } from 'framer-motion';
import { Youtube } from 'lucide-react'; // YouTube आइकॉन के लिए

// अपने YouTube वीडियो के ID यहाँ डालें (URL में v= के बाद वाला हिस्सा)
const videoIds = ['33N83LPd__Q', '6oKIRFd_FBo', 'FCV87dKWoTU'];

// अपने YouTube Shorts के ID यहाँ डालें (URL में shorts/ के बाद वाला हिस्सा)
const shortsIds = [
  'MLziGqcytxg', 
  'iH5sAMPtNos', 
  'ZoH4gCrU0pU',
  'GsqItt7abOM',
  'MLziGqcytxg' // डुप्लीकेट आईडी हटाया जा सकता है, मैंने इसे ऐसे ही रखा है
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
      className="relative py-24 md:py-32 bg-super-king-grey flex-grow bg-cover bg-center" // `bg-fixed` हटाया गया
      style={{ backgroundImage: "url('/stadium_bg.jpg')" }}
    >
      {/* बैकग्राउंड ओवरले, जो पूरे पेज पर डार्कनेस बनाए रखेगा */}
      <div className="absolute inset-0 bg-super-king-black bg-opacity-85"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Framer Motion का motion.div जो स्क्रॉल करने पर एनिमेशन को कण्ट्रोल करेगा */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible" // जब यह स्क्रीन पर दिखेगा तब एनिमेशन चलेगा
          viewport={{ once: true, amount: 0.2 }} // एनिमेशन सिर्फ एक बार चलेगा, जब 20% हिस्सा दिखेगा
        >
          {/* पेज टाइटल */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-super-king-gold font-heading drop-shadow-lg">Our Gallery</h2>
            <p className="text-lg text-super-king-light-grey mt-4">Moments from the field, captured forever.</p>
          </motion.div>

          {/* === वीडियो सेक्शन === */}
          <motion.div variants={itemVariants} className="mb-20">
            <h3 className="text-3xl font-bold text-super-king-gold font-heading mb-8 text-center md:text-left drop-shadow-md">Match Highlights & Videos</h3>
            {videoIds.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {videoIds.map((id, index) => (
                  <motion.div
                    key={id}
                    variants={itemVariants}
                    className="relative aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-2xl border border-white/20 transition-all duration-300 hover:scale-105 hover:border-super-king-gold cursor-pointer group"
                  >
                    {/* YouTube Logo Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-colors">
                        <Youtube size={64} className="text-white opacity-70 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${id}?modestbranding=1&rel=0`} // ब्रांडिंग और रिलेटेड वीडियो हटाए
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
            <h3 className="text-3xl font-bold text-super-king-gold font-heading mb-8 text-center md:text-left drop-shadow-md">Shorts & Reels</h3>
            {shortsIds.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {shortsIds.map((id, index) => (
                  <motion.div
                    key={id}
                    variants={itemVariants}
                    className="relative aspect-w-9 aspect-h-16 rounded-2xl overflow-hidden shadow-2xl border border-white/20 transition-all duration-300 hover:scale-105 hover:border-super-king-gold cursor-pointer group"
                  >
                    {/* YouTube Shorts Logo Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-colors">
                        <Youtube size={64} className="text-white opacity-70 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${id}?modestbranding=1&rel=0`} // ब्रांडिंग और रिलेटेड वीडियो हटाए
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
              className="inline-flex items-center gap-3 bg-super-king-blue text-super-king-gold hover:bg-super-king-dark-blue hover:text-super-king-light-grey text-lg font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
                <Youtube size={24} />
              View More on YouTube
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;

