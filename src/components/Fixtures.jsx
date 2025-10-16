import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, MapPin, Trophy } from 'lucide-react';

// --- Data ---
const upcomingMatchesData = [
  { 
    team1: 'Super King', 
    logo1: '/logo.png',
    team2: 'BR 11', 
    logo2: '/br11.jpg',
    date: 'October 16, 2025', // आज की तारीख
    time: '04:00 PM IST',
    venue: 'Tejaji Nagar',
    matchStartTime: new Date('2025-10-16T16:00:00') // JS Date object for logic
  },
  { 
    team1: 'Super King', 
    logo1: '/logo.png',
    team2: 'BR 11', 
    logo2: '/br11.jpg',
    date: 'October 18, 2025', 
    time: '05:00 PM IST',
    venue: 'Tejaji Nagar',
    matchStartTime: new Date('2025-10-18T17:00:00')
  }
];

const recentResultsData = [
  { 
    team1: 'Super King', 
    logo1: '/logo.png', 
    team2: 'BR 11', 
    logo2: '/br11.jpg', 
    result: 'Won by 7 wickets', 
    status: 'WIN' 
  },
  { 
    team1: 'Super King', 
    logo1: '/logo.png', 
    team2: 'BR 11', 
    logo2: '/br11.jpg', 
    result: 'Won by 6 wickets', 
    status: 'WIN'
  },
  { 
    team1: 'Super King', 
    logo1: '/logo.png', 
    team2: 'BR 11', 
    logo2: '/br11.jpg', 
    result: 'Match Drawn', 
    status: 'DRAW' 
  }
];

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" }},
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
};

// --- Helper Components & Functions ---
const getStatusStyles = (status) => {
  switch (status) {
    case 'WIN': return { text: 'VICTORY', className: 'bg-green-500/80 border-green-400 text-white' };
    case 'LOSS': return { text: 'DEFEAT', className: 'bg-red-500/80 border-red-400 text-white' };
    case 'DRAW': return { text: 'DRAWN', className: 'bg-yellow-500/80 border-yellow-400 text-white' };
    default: return { text: '', className: 'bg-gray-500/80 border-gray-400' };
  }
};

const UpcomingMatchCard = ({ match }) => {
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    const checkLiveStatus = () => {
      const now = new Date();
      // मैच शुरू होने से लेकर 2.5 घंटे बाद तक लाइव रहेगा
      const matchEndTime = new Date(match.matchStartTime.getTime() + 2.5 * 60 * 60 * 1000);
      if (now >= match.matchStartTime && now <= matchEndTime) {
        setIsLive(true);
      } else {
        setIsLive(false);
      }
    };
    checkLiveStatus();
    const interval = setInterval(checkLiveStatus, 60000); // हर मिनट चेक करें
    return () => clearInterval(interval);
  }, [match.matchStartTime]);

  return (
    <motion.div variants={itemVariants} className="relative bg-black/60 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/10 overflow-hidden">
      {isLive && (
        <div className="absolute top-4 right-4 flex items-center gap-2 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>
          LIVE
        </div>
      )}
      <div className="flex justify-between items-center text-center">
        <TeamDisplay team={match.team1} logo={match.logo1} />
        <div className="font-heading text-4xl text-super-king-gold mx-4">VS</div>
        <TeamDisplay team={match.team2} logo={match.logo2} />
      </div>
      <div className="text-center text-super-king-light-grey/80 mt-5 border-t border-white/20 pt-5 space-y-2">
        <InfoLine icon={Calendar} text={match.date} />
        <InfoLine icon={Clock} text={match.time} />
        <InfoLine icon={MapPin} text={match.venue} />
      </div>
    </motion.div>
  );
};

const ResultCard = ({ match }) => {
  const status = getStatusStyles(match.status);
  return (
    <motion.div variants={itemVariants} className="bg-black/60 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/10">
      <div className="flex justify-between items-center text-center">
        <TeamDisplay team={match.team1} logo={match.logo1} />
        <div className={`px-4 py-2 rounded-lg text-xl font-bold font-heading ${status.className}`}>
          {status.text}
        </div>
        <TeamDisplay team={match.team2} logo={match.logo2} />
      </div>
      <div className="text-center mt-4 border-t border-white/20 pt-4">
        <p className={`font-bold text-lg ${status.className.split(' ')[2]}`}>{match.result}</p>
      </div>
    </motion.div>
  );
};

const TeamDisplay = ({ team, logo }) => (
  <div className="flex flex-col items-center w-1/3 space-y-2">
    <img src={logo} alt={team} className="h-16 w-16 md:h-20 md:w-20 object-contain" />
    <span className="font-bold text-base md:text-lg text-super-king-light-grey">{team}</span>
  </div>
);

const InfoLine = ({ icon: Icon, text }) => (
  <div className="flex items-center justify-center gap-2 text-sm md:text-base">
    <Icon className="w-4 h-4 text-super-king-gold" />
    <span>{text}</span>
  </div>
);


// --- Main Component ---
const Fixtures = () => {
  const [activeTab, setActiveTab] = useState('Upcoming');

  return (
    <section 
      id="fixtures" 
      className="relative py-24 md:py-32 bg-super-king-grey flex-grow bg-cover bg-center"
      style={{ backgroundImage: "url('/stadium_bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-super-king-black bg-opacity-85"></div>
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-super-king-gold font-heading drop-shadow-lg">Fixtures & Results</h2>
            <p className="text-lg text-super-king-light-grey mt-4">Stay updated with our match schedule and outcomes.</p>
          </motion.div>
          
          {/* ✅ Tabbed Interface */}
          <motion.div variants={itemVariants} className="flex justify-center mb-12 bg-black/30 p-1.5 rounded-full backdrop-blur-sm">
            {['Upcoming', 'Results'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`w-full py-2.5 text-base font-semibold rounded-full transition-colors relative ${
                  activeTab === tab ? 'text-super-king-black' : 'text-super-king-light-grey hover:text-white'
                }`}
              >
                {activeTab === tab && (
                  <motion.div layoutId="tab-indicator" className="absolute inset-0 bg-super-king-gold rounded-full" />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            ))}
          </motion.div>
          
          {/* ✅ Content Area */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="space-y-6"
            >
              {activeTab === 'Upcoming' ? (
                upcomingMatchesData.length > 0 ? (
                  upcomingMatchesData.map((match, index) => <UpcomingMatchCard key={index} match={match} />)
                ) : (
                  <p className="text-center text-xl text-super-king-light-grey">No upcoming matches scheduled.</p>
                )
              ) : (
                recentResultsData.length > 0 ? (
                  recentResultsData.map((match, index) => <ResultCard key={index} match={match} />)
                ) : (
                  <p className="text-center text-xl text-super-king-light-grey">No recent results available.</p>
                )
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Fixtures;
