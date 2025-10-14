import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Slider from 'react-slick'; // Slider को इम्पोर्ट करें

// आपके दिए गए अपडेटेड आंकड़े
const stats = [
  { label: 'Matches Won', value: '45+' },
  { label: 'Championships', value: '5' },
  { label: 'Top Scorer', value: 'Ram Nath Yogi (800 Runs)' },
  { label: 'Best Bowler', value: 'Aditya Singh (40 Wickets)' },
];

// स्लाइडर के लिए टीम की फोटोज़ का डेटा
const teamPhotos = [
  { id: 1, src: '/super 1.jpg', alt: 'Team celebrating a wicket' },
  { id: 2, src: '/super 2.jpg', alt: 'Batsman hitting a six' },
  { id: 3, src: '/super 3.jpg', alt: 'Bowler in action' },
  { id: 4, src: '/super 4.jpg', alt: 'Team in a huddle' },
  { id: 5, src: '/super 5.jpg', alt: 'Team group photo' },
  { id: 6, src: '/super 6.jpg', alt: 'Team in a huddle' },
  { id: 7, src: '/super 7.jpg', alt: 'Team group photo' }
];


// Framer Motion के लिए एनिमेशन वेरिएंट्स
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
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

  // इमेज स्लाइडर के लिए सेटिंग्स
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: '40px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <section 
      id="home" 
      className="relative flex-grow flex flex-col justify-center items-center text-center overflow-hidden py-24 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/stadium_bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-super-king-black bg-opacity-75"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="space-y-16" // सभी सेक्शंस के बीच स्पेस
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Section 1: Main Heading & Tagline */}
          <motion.div variants={itemVariants}>
            <h2 className="text-5xl md:text-7xl font-extrabold text-super-king-gold leading-tight mb-4 font-heading drop-shadow-lg">
              Welcome to the Home of the <span className="text-super-king-light-grey">Super Kings</span>
            </h2>
            <p className="text-xl md:text-2xl text-super-king-light-grey">
              Passion, Teamwork, and Glory. Join Our Journey!
            </p>
          </motion.div>

          {/* ✅ बदला हुआ: Section 2: इमेज स्लाइडर */}
          <motion.div variants={itemVariants}>
             <h3 className="text-3xl font-bold text-super-king-gold font-heading mb-8 drop-shadow-lg">Glimpses From The Field</h3>
             <Slider {...sliderSettings}>
                {teamPhotos.map(photo => (
                  <div key={photo.id} className="px-2 md:px-4">
                    <div className="bg-black bg-opacity-50 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl overflow-hidden">
                      <img src={photo.src} alt={photo.alt} className="w-full h-56 object-cover" />
                    </div>
                  </div>
                ))}
             </Slider>
          </motion.div>

          {/* Section 3: Key Stats */}
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold text-super-king-gold font-heading mb-8 drop-shadow-lg">Our Track Record</h3>
            <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 bg-black bg-opacity-50 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-2xl">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-3xl md:text-4xl font-extrabold text-super-king-gold font-heading">{stat.value}</p>
                  <p className="text-sm md:text-base text-super-king-light-grey mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Section 4: Call to Action Button */}
          <motion.div variants={itemVariants}>
            <Link to="/fixtures" className="inline-block bg-super-king-blue text-super-king-gold hover:bg-super-king-dark-blue hover:text-super-king-light-grey text-lg font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl">
              View Upcoming Matches
            </Link>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Home;