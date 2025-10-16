import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Slider from 'react-slick'; // Slider को इम्पोर्ट करें

// --- Data for Home Page ---
const foundersData = [
  { name: 'Harsh Verma', img: '/captain.png', title: 'Founder' },
  { name: 'Naveen Khaira', img: '/naveen.jpg', title: 'Founder' },
  { name: 'Deepak', img: '/deepak.png', title: 'Founder' },
];

const coFoundersData = [
  { name: 'Aditya Singh', img: '/aditya singh.png', title: 'Co-Founder' },
  { name: 'Ram Nath Yogi', img: '/yogi.png', title: 'Co-Founder' },
  { name: 'Tanishq Sharma', img: '/tanishq.jpg', title: 'Co-Founder' },
];

const teamPhotos = [
  { id: 1, src: '/super 1.jpg', alt: 'Team celebrating a wicket' },
  { id: 2, src: '/super 2.jpg', alt: 'Batsman hitting a six' },
  { id: 3, src: '/super 3.jpg', alt: 'Bowler in action' },
  { id: 4, src: '/super 4.jpg', alt: 'Team in a huddle' },
  { id: 5, src: '/super 5.jpg', alt: 'Team group photo' },
  { id: 6, src: '/super 6.jpg', alt: 'Team in a huddle' },
  { id: 7, src: '/super 7.jpg', alt: 'Team group photo' }
];

// --- Animation Variants ---
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
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    arrows: false,
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
          className="space-y-20"
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

          {/* Section 2: Image Slider */}
          <motion.div variants={itemVariants}>
             <h3 className="text-3xl font-bold text-super-king-gold font-heading mb-8 drop-shadow-lg">Glimpses From The Field</h3>
             <Slider {...sliderSettings}>
                {teamPhotos.map(photo => (
                  <div key={photo.id}>
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full h-80 sm:h-96 md:h-[500px] lg:h-[600px] object-cover rounded-2xl shadow-2xl border border-white/20"
                    />
                  </div>
                ))}
             </Slider>
          </motion.div>

          {/* Section 3: Founders & Co-Founders */}
          <motion.div variants={itemVariants} className="space-y-20">
            {/* Founders Section */}
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold text-super-king-gold font-heading mb-20 drop-shadow-lg">Meet The Founders</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-24 sm:gap-x-8">
                {foundersData.map((person, index) => (
                  <motion.div
                    key={index}
                    className="relative bg-black bg-opacity-50 backdrop-blur-md rounded-2xl pt-20 p-6 text-center shadow-2xl border border-white/20 transition-all duration-300 hover:scale-105 hover:border-super-king-gold"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <img
                        src={person.img}
                        alt={person.name}
                        className="w-36 h-36 rounded-full border-4 border-super-king-gold object-cover shadow-lg"
                      />
                    </div>
                    <h4 className="text-xl font-bold text-super-king-light-grey font-heading">{person.name}</h4>
                    <p className="text-super-king-gold">{person.title}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Co-Founders Section */}
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold text-super-king-gold font-heading mb-20 drop-shadow-lg">Co-Founders</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-24 sm:gap-x-8">
                {coFoundersData.map((person, index) => (
                  <motion.div
                    key={index}
                    className="relative bg-black bg-opacity-50 backdrop-blur-md rounded-2xl pt-20 p-6 text-center shadow-2xl border border-white/20 transition-all duration-300 hover:scale-105 hover:border-super-king-gold"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <img
                        src={person.img}
                        alt={person.name}
                        className="w-36 h-36 rounded-full border-4 border-super-king-gold object-cover shadow-lg"
                      />
                    </div>
                    <h4 className="text-xl font-bold text-super-king-light-grey font-heading">{person.name}</h4>
                    <p className="text-super-king-gold">{person.title}</p>
                  </motion.div>
                ))}
              </div>
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
