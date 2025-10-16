import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, animate, useInView } from 'framer-motion';
import Slider from 'react-slick';

// ज़रूरी: react-slick की स्टाइलिंग के लिए, अपनी मेन App.js या index.js फ़ाइल में ये दो लाइनें ज़रूर डालें
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

// --- Data for Home Page ---
const foundersData = [
  { name: 'Harsh Verma', img: '/harsh.jpg', title: 'Founder' },
  { name: 'Naveen Khaira', img: '/naveen.jpg', title: 'Founder' },
  { name: 'Deepak', img: '/deepak.jpg', title: 'Founder' },
];

const coFoundersData = [
  { name: 'Aditya Singh', img: '/aditya singh.png', title: 'Co-Founder' },
  { name: 'Ram Nath Yogi', img: '/yogi.png', title: 'Co-Founder' },
  { name: 'Tanishq Sharma', img: '/tanishq.jpg', title: 'Co-Founder' },
  { name: 'Harsh Sinha', img: '/harsh sinha.jpg', title: 'Co-Founder' },
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

// ✅ नया: टीम की उपलब्धियों का डेटा
const achievementsData = [
  { value: 50, label: 'Matches Won', suffix: '+' },
  { value: 5, label: 'Trophies Won', suffix: '' },
  { value: 100, label: 'Wickets Taken', suffix: '+' },
  { value: 3000, label: 'Runs', suffix: '+' },
];

// --- Animation Variants ---
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

// ✅ नया: Animated Counter Component
const AnimatedCounter = ({ to, suffix }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      animate(0, to, {
        duration: 2.5,
        ease: "easeOut",
        onUpdate(value) {
          if (ref.current) {
            ref.current.textContent = Math.round(value);
          }
        }
      });
    }
  }, [isInView, to]);

  return (
    <span>
      <span ref={ref}>0</span>{suffix}
    </span>
  );
};

const Home = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    arrows: false,
    dotsClass: "slick-dots slick-thumb", // Custom dots
  };

  return (
    <section
      id="home"
      className="relative flex-grow flex flex-col justify-center items-center text-center overflow-hidden py-24 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/stadium_bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-super-king-black bg-opacity-80"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="space-y-24" // Increased spacing
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Section 1: Main Heading & Tagline */}
          {/* Section 1: Main Heading & Tagline */}
          <motion.div variants={itemVariants}>
            {/* ✅ लोगो को टेक्स्ट के ऊपर रखने के लिए वर्टिकल Flexbox */}
            <div className="flex flex-col justify-center items-center gap-4 mb-4">
              <motion.img
                src="/logo.png"
                alt="Super King Logo"
                className="h-20 md:h-24 lg:h-28 w-auto" // लोगो को थोड़ा और प्रोमिनेंट बनाया गया है
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              />
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-super-king-gold leading-tight font-heading drop-shadow-lg text-center">
                WE ARE <span className="text-super-king-light-grey">SUPER KING</span>
              </h2>
            </div>
            <p className="text-xl md:text-2xl text-super-king-light-grey max-w-3xl mx-auto">
              Forged in Passion, Defined by Victory. This is Our Kingdom.
            </p>
          </motion.div>

          {/* ✅ नया सेक्शन: Team Achievements */}
          <motion.div variants={itemVariants}>
            <h3 className="text-4xl font-bold text-super-king-gold font-heading mb-10 drop-shadow-lg">Legacy of Champions</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto">
              {achievementsData.map((stat) => (
                <div key={stat.label} className="bg-black/40 backdrop-blur-sm p-4 rounded-xl border border-white/10 text-center">
                  <h4 className="text-4xl md:text-5xl font-bold text-super-king-light-grey">
                    <AnimatedCounter to={stat.value} suffix={stat.suffix} />
                  </h4>
                  <p className="text-super-king-gold text-sm md:text-base">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Section 2: Image Slider */}
          <motion.div variants={itemVariants}>
            <h3 className="text-4xl font-bold text-super-king-gold font-heading mb-10 drop-shadow-lg">Glimpses From The Field</h3>
            <div className="w-full max-w-5xl mx-auto">
              <Slider {...sliderSettings}>
                {teamPhotos.map(photo => (
                  <div key={photo.id}>
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full h-80 sm:h-96 md:h-[500px] lg:h-[600px] object-cover rounded-2xl shadow-2xl border-2 border-white/20"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </motion.div>

          {/* Section 3: Founders & Co-Founders with improved design */}
          <motion.div variants={itemVariants} className="space-y-20">
            <div>
              <h3 className="text-4xl font-bold text-super-king-gold font-heading mb-20 drop-shadow-lg">The Architects of Victory</h3>
              {/* Founders */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-y-24 gap-x-8">
                {foundersData.map((person, index) => (
                  <motion.div
                    key={index}
                    className="relative bg-black/50 backdrop-blur-md rounded-2xl pt-20 p-6 text-center shadow-2xl border border-white/20 transition-all duration-300 hover:scale-105 hover:border-super-king-gold hover:shadow-super-king-gold/30"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <img src={person.img} alt={person.name} className="w-36 h-36 rounded-full border-4 border-super-king-gold object-cover shadow-lg" />
                    </div>
                    <h4 className="text-xl font-bold text-super-king-light-grey font-heading">{person.name}</h4>
                    <p className="text-super-king-gold">{person.title}</p>
                  </motion.div>
                ))}
              </div>
              {/* Co-Founders */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-y-24 gap-x-8 mt-24">
                {coFoundersData.map((person, index) => (
                  <motion.div
                    key={index}
                    className="relative bg-black/50 backdrop-blur-md rounded-2xl pt-20 p-6 text-center shadow-2xl border border-white/20 transition-all duration-300 hover:scale-105 hover:border-super-king-gold hover:shadow-super-king-gold/30"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <img src={person.img} alt={person.name} className="w-36 h-36 rounded-full border-4 border-super-king-gold object-cover shadow-lg" />
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
            <Link to="/fixtures" className="inline-flex items-center gap-3 bg-super-king-blue text-super-king-gold hover:bg-super-king-dark-blue hover:text-white text-lg font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl">
              View Upcoming Matches
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </Link>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Home;