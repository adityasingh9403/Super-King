import React from 'react';
import { motion } from 'framer-motion';

// डेटा को और बेहतर और फ्लेक्सिबल बनाएँ
const upcomingMatches = [
  { 
    team1: 'Super Kings', 
    logo1: '/logo.png',
    team2: 'BR 11', 
    logo2: '/br11.jpg',
    date: 'October 18, 2025', 
    time: '04:00 PM IST',
    venue: 'Tejaji Nagar' 
  },
  { 
    team1: 'Super Kings', 
    logo1: '/logo.png',
    team2: 'BR 11', 
    logo2: '/br11.jpg',
    date: 'October 18, 2025', 
    time: '05:00 PM IST',
    venue: 'Tejaji Nagar' 
  }
];

// 'winner' की जगह 'status' का इस्तेमाल करें ताकि हर परिणाम को हैंडल किया जा सके
const recentResults = [
  { 
    team1: 'Super Kings', 
    logo1: '/logo.png', 
    team2: 'BR 11', 
    logo2: '/br11.jpg', 
    result: 'Won by 7 wickets', 
    status: 'WIN' // WIN, LOSS, DRAW, TIE, ABANDONED
  },
  { 
    team1: 'Super Kings', 
    logo1: '/logo.png', 
    team2: 'BR 11', 
    logo2: '/br11.jpg', 
    result: 'Won by 6 wickets', 
    status: 'WIN'
  },
  { 
    team1: 'Super Kings', 
    logo1: '/logo.png', 
    team2: 'BR 11', 
    logo2: '/br11.jpg', 
    result: 'Match Drawn', 
    status: 'DRAW' 
  }
];

// एनिमेशन वेरिएंट्स
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

// मैच स्टेटस के आधार पर स्टाइल और टेक्स्ट देने के लिए एक हेल्पर फंक्शन
const getMatchStatusStyles = (status) => {
  switch (status) {
    case 'WIN':
      return { text: 'VICTORY', className: 'text-green-400' };
    case 'LOSS':
      return { text: 'DEFEAT', className: 'text-red-500' };
    case 'DRAW':
    case 'TIE':
      return { text: 'DRAWN', className: 'text-yellow-400' };
    case 'ABANDONED':
      return { text: 'ABANDONED', className: 'text-gray-400' };
    default:
      return { text: '', className: 'text-super-king-light-grey' };
  }
};

const Fixtures = () => {
  return (
    <section 
      id="fixtures" 
      className="py-20 md:py-28 bg-super-king-grey flex-grow bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/stadium_bg.jpg')" }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-super-king-gold font-heading">Fixtures & Results</h2>
            <p className="text-lg text-super-king-light-grey mt-4">Stay updated with our match schedule and outcomes.</p>
          </motion.div>
          
          {/* Upcoming Matches Section */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-3xl font-bold text-super-king-light-grey font-heading mb-8 text-center">Upcoming Matches</h3>
            <motion.div variants={containerVariants} className="space-y-6">
              {upcomingMatches.length > 0 ? (
                upcomingMatches.map((match, index) => (
                  <motion.div 
                    key={index}
                    variants={itemVariants}
                    className="bg-black bg-opacity-60 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20 transition-all duration-300 hover:border-super-king-gold"
                  >
                    {/* ... (upcoming match card का JSX code पहले जैसा ही) ... */}
                    <div className="flex justify-between items-center text-center">
                      <div className="flex flex-col items-center w-1/3">
                        <img src={match.logo1} alt={match.team1} className="h-16 w-16 mb-2 object-contain" />
                        <span className="font-bold text-lg text-super-king-light-grey">{match.team1}</span>
                      </div>
                      <div className="font-heading text-4xl text-super-king-gold">VS</div>
                      <div className="flex flex-col items-center w-1/3">
                        <img src={match.logo2} alt={match.team2} className="h-16 w-16 mb-2 object-contain" />
                        <span className="font-bold text-lg text-super-king-light-grey">{match.team2}</span>
                      </div>
                    </div>
                    <div className="text-center text-super-king-light-grey mt-4 border-t border-white/20 pt-4">
                      <p>{match.date} at {match.time}</p>
                      <p className="text-super-king-gold">{match.venue}</p>
                    </div>
                  </motion.div>
                ))
              ) : (
                <motion.p variants={itemVariants} className="text-center text-xl text-super-king-light-grey">No upcoming matches scheduled.</motion.p>
              )}
            </motion.div>
          </motion.div>

          {/* Recent Results Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold text-super-king-light-grey font-heading mb-8 text-center">Recent Results</h3>
            <motion.div variants={containerVariants} className="space-y-6">
              {recentResults.length > 0 ? (
                recentResults.map((match, index) => {
                  const statusStyles = getMatchStatusStyles(match.status);
                  return (
                    <motion.div 
                      key={index}
                      variants={itemVariants}
                      className="bg-black bg-opacity-60 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20"
                    >
                      <div className="flex justify-between items-center text-center">
                        <div className="flex flex-col items-center w-1/3">
                          <img src={match.logo1} alt={match.team1} className="h-16 w-16 mb-2 object-contain" />
                          <span className="font-bold text-lg text-super-king-light-grey">{match.team1}</span>
                        </div>
                         <div className={`font-heading text-2xl md:text-3xl font-bold ${statusStyles.className}`}>
                           {statusStyles.text}
                         </div>
                        <div className="flex flex-col items-center w-1/3">
                          <img src={match.logo2} alt={match.team2} className="h-16 w-16 mb-2 object-contain" />
                          <span className="font-bold text-lg text-super-king-light-grey">{match.team2}</span>
                        </div>
                      </div>
                      <div className="text-center text-super-king-light-grey mt-4 border-t border-white/20 pt-4">
                        <p className={`font-bold ${statusStyles.className}`}>{match.result}</p>
                      </div>
                    </motion.div>
                  );
                })
              ) : (
                <motion.p variants={itemVariants} className="text-center text-xl text-super-king-light-grey">No recent results available.</motion.p>
              )}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Fixtures;