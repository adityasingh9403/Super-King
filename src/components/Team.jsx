import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Zap } from 'lucide-react'; // बेहतरीन आइकॉन के लिए

// खिलाड़ियों की विस्तृत और अपडेटेड जानकारी
const players = [
  {
    name: 'Harsh Verma',
    role: 'Captain, Batter',
    img: '/harsh.jpg',
    battingStyle: 'Right-hand bat',
    bowlingStyle: 'Right-arm Off Spin',
    bio: 'A key leader in the team, known for his exceptional leadership skills and solid batting.'
  },
  {
    name: 'Nitin Patel',
    role: 'Vice-Captain, Batter',
    img: '/nitin.png',
    battingStyle: 'Right-hand bat',
    bowlingStyle: 'Right-arm Medium',
    bio: 'An outstanding batter and the strategic anchor of the team, leading from the front.'
  },
  {
    name: 'Ram Nath Yogi',
    role: 'Batter',
    img: '/yogi.webp',
    battingStyle: 'Right-hand bat',
    bowlingStyle: 'Right-arm Medium',
    bio: 'A hard-hitting batsman and a proven match-winner with his explosive style of play.'
  },
  {
    name: 'Kanhaiya Pawar',
    role: 'All Rounder',
    img: '/kanhaiya.jpg',
    battingStyle: 'Left-hand bat',
    bowlingStyle: 'Left-arm Medium Fast',
    bio: 'A powerful left-handed hard hitter who can turn the game around at any moment.'
  },
  {
    name: 'Aditya Singh',
    role: 'Bowler',
    img: '/aditya singh.png',
    battingStyle: 'Right-hand bat',
    bowlingStyle: 'Left-arm Fast Medium',
    bio: 'A match-winning bowler known for his highly effective and impactful bowling action.'
  },
  {
    name: 'Sunil Sahani',
    role: 'Bowler',
    img: '/sunil.jpg',
    battingStyle: 'Right-hand bat',
    bowlingStyle: 'Right-arm Fast',
    bio: 'A highly effective bowler with significant pace, who also contributes as a good fielder.'
  },
  {
    name: 'Bhuvnesh Singh Chouhan',
    role: 'All Rounder',
    img: '/bhuvnesh.jpeg',
    battingStyle: 'Right-hand bat',
    bowlingStyle: 'Right-arm Leg Spin',
    bio: 'A consistent and skillful all-rounder, contributing valuable performances with both bat and ball.'
  },
  {
    name: 'Deepraj Gole',
    role: 'Batter',
    img: '/deepraj.webp',
    battingStyle: 'Right-hand bat',
    bowlingStyle: 'Right-arm Medium',
    bio: 'An excellent and consistent batsman, known for his reliable and impressive batting.'
  },
  {
    name: 'Dharmendra Kachhava',
    role: 'All Rounder',
    img: '/dharmendra.jpg',
    battingStyle: 'Right-hand bat',
    bowlingStyle: 'Right-arm Fast Medium',
    bio: 'A formidable all-rounder with a "Malinga-like" bowling action that often troubles batsmen.'
  },
  {
    name: 'Adarsh Soni',
    role: 'All Rounder',
    img: '/adarsh.webp',
    battingStyle: 'Right-hand bat',
    bowlingStyle: 'Right-arm Fast',
    bio: 'A complete match-winner with both bat and ball, who has also played with many star players in M.P.'
  },
  {
    name: 'Bhavesh Sharma',
    role: 'Bowler',
    img: '/bhavesh.jpg',
    battingStyle: 'Right-hand bat',
    bowlingStyle: 'Right-arm Fast',
    bio: 'A bowler with consistent pace and line, complemented by his excellent fielding skills.'
  },
  {
    name: 'Tanishq Sharma',
    role: 'Batter',
    img: '/tanishq.jpg',
    battingStyle: 'Right-hand bat',
    bowlingStyle: 'Right-arm Fast',
    bio: 'A hard-hitting batsman known for his aggressive and powerful style of play.'
  },
  {
    name: 'Avinash Kumar',
    role: 'All Rounder',
    img: '/avinash.jpeg',
    battingStyle: 'Right-hand bat',
    bowlingStyle: 'Right-arm Fast',
    bio: 'A solid all-rounder who contributes effectively as both a good batter and bowler.'
  },
  {
    name: 'Rajveer Singh',
    role: 'Batter',
    img: '/rajveer.webp',
    battingStyle: 'Right-hand bat',
    bowlingStyle: 'Right-arm Medium',
    bio: 'An effective and stylish batsman who makes an impact with his elegant shots.'
  },
  {
    name: 'Abhi Kushwaha',
    role: 'All Rounder',
    img: '/abhi.jpg',
    battingStyle: 'Right-hand bat',
    bowlingStyle: 'Right-arm Fast',
    bio: 'He is a good hard-hitter and a fast bowler, making him the complete all-rounder package.'
  },
  {
    name: 'Aditya Mishra',
    role: 'All Rounder',
    img: '/aditya mishra.webp',
    battingStyle: 'Right-hand bat',
    bowlingStyle: 'Right-arm Fast Medium',
    bio: 'A good cutter bowler who deceives batsmen with his clever variations.'
  },
  {
    name: 'Anurag Patidar',
    role: 'Bowler',
    img: '/anurag.png',
    battingStyle: 'Right-hand bat',
    bowlingStyle: 'Right-arm Fast Medium',
    bio: 'A tall left-arm bowler who generates significant bounce to trouble the opposition.'
  },
  {
    name: 'Arpit Dawar',
    role: 'All Rounder',
    img: '/arpit.png',
    battingStyle: 'Right-hand bat',
    bowlingStyle: 'Left-arm Medium',
    bio: 'An effective hard-hitting all-rounder, capable of making a big impact.'
  },
  {
    name: 'Jayesh Yadav',
    role: 'All Rounder',
    img: '/jayesh.webp',
    battingStyle: 'Right-hand bat',
    bowlingStyle: 'Left-arm Medium',
    bio: 'A good cutter bowler, adept at varying his pace and line.'
  },
  {
    name: 'Rishi Pal',
    role: 'Batter',
    img: '/rishi.webp',
    battingStyle: 'Right-hand bat',
    bowlingStyle: 'Right-arm Off Spin',
    bio: 'A good hard-hitting batsman who can score quickly and put pressure on the bowlers.'
  },
  {
    name: 'Atharva Choure',
    role: 'All Rounder',
    img: '/atharva.jpg',
    battingStyle: 'Right-hand bat',
    bowlingStyle: 'Right-arm Fast',
    bio: 'A fantastic hitter and a brilliant fast bowler, consistent in both disciplines.'
  },
  {
    name: 'Harsh Sihna',
    role: 'Bowler',
    img: '/harsh sinha.jpg',
    battingStyle: 'Right-hand bat',
    bowlingStyle: 'Right-arm Leg Spin',
    bio: 'A tricky leg-spinner who confuses batsmen by turning the ball both ways.'
  },
  {
    name: 'Anshul Jaiswal',
    role: 'Bowler',
    img: '/anshul.jpg',
    battingStyle: 'Right-hand bat',
    bowlingStyle: 'Right-arm Fast Medium',
    bio: 'Has strong pace bowling and can hit big shots when the team needs it.'
  },
  {
    name: 'Mohit Barle',
    role: 'Batter',
    img: '/mohit.jpg',
    battingStyle: 'Left-hand bat',
    bowlingStyle: 'Right-arm Off Spin',
    bio: 'A brilliant and attacking left-handed batsman.'
  },
  {
    name: 'Ajay Singh Chouhan',
    role: 'Batter',
    img: '/ajay.png', // NOTE: Is player ki image ka naam confirm kar lein
    battingStyle: 'Left-hand bat',
    bowlingStyle: 'Left-arm Medium',
    bio: 'Good at rotating the strike and can accelerate with big hits when required.'
  },
  {
    name: 'Shyam',
    role: 'Batter',
    img: '/shyam.jpg',
    battingStyle: 'Right-hand bat',
    bowlingStyle: 'Right-arm Fast Medium',
    bio: 'A powerful and effective hard-hitting batsman.'
  },
  {
    name: 'Ajit Chouhan',
    role: 'Batter',
    img: '/ajit.jpg',
    battingStyle: 'Left-hand bat',
    bowlingStyle: 'Slow Left-arm Orthodox',
    bio: 'A solid and highly effective left-handed batsman.'
  },
  {
    name: 'Deepak',
    role: 'Bowler',
    img: '/deepak.jpg',
    battingStyle: 'Right-hand bat',
    bowlingStyle: 'Right-arm Medium',
    bio: 'A good bowler who consistently bowls on a great line and length.'
  },
  {
    name: 'Naveen Khaira',
    role: 'Bowler',
    img: '/naveen.jpg',
    battingStyle: 'Right-hand bat',
    bowlingStyle: 'Right-arm Fast Medium',
    bio: 'A smart bowler who makes excellent use of angles to trouble batsmen.'
  },
  {
    name: 'Anshuman Sharma',
    role: 'Batter',
    img: '/anshuman.jpg',
    battingStyle: 'Right-hand bat',
    bowlingStyle: 'Right-arm Off Spin',
    bio: 'A smart batter who makes excellent use of no look shot'
  }
];

const filterOptions = ['All', 'Batters', 'Bowlers', 'All Rounders'];

const Team = () => {
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredPlayers = useMemo(() => {
    if (activeFilter === 'All') return players;
    const role = activeFilter.slice(0, -1);
    return players.filter(player => player.role.includes(role));
  }, [activeFilter]);

  return (
    <section
      id="team"
      className="relative py-24 md:py-32 bg-super-king-grey flex-grow bg-cover bg-center"
      style={{ backgroundImage: "url('/stadium_bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-super-king-black bg-opacity-85"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold text-super-king-gold font-heading drop-shadow-lg">Meet The Squad</h2>
          <p className="text-lg text-super-king-light-grey mt-4 max-w-2xl mx-auto">The champions who make us proud. Click on a player to see their profile.</p>
        </motion.div>

        <motion.div
          className="flex justify-center items-center flex-wrap gap-2 md:gap-4 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {filterOptions.map(option => (
            <button
              key={option}
              onClick={() => setActiveFilter(option)}
              className={`px-4 py-2 text-sm md:text-base font-semibold rounded-full transition-all duration-300 border-2 ${activeFilter === option
                ? 'bg-super-king-gold text-super-king-black border-super-king-gold'
                : 'bg-black/30 text-super-king-light-grey border-transparent hover:border-super-king-gold hover:text-super-king-gold'
                }`}
            >
              {option}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8">
          <AnimatePresence>
            {filteredPlayers.map((player) => (
              <motion.div
                key={player.name}
                layout
                className="relative bg-black bg-opacity-50 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 overflow-hidden cursor-pointer group"
                onClick={() => setSelectedPlayer(player)}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <img
                  className="w-full h-auto aspect-[4/5] object-cover transition-transform duration-300 group-hover:scale-110"
                  src={player.img}
                  alt={player.name}
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                  <h3 className="text-lg font-bold text-super-king-light-grey font-heading truncate">{player.name}</h3>
                  <p className="text-sm text-super-king-gold">{player.role}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {selectedPlayer && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPlayer(null)}
          >
            <motion.div
              className="relative bg-super-king-grey w-full max-w-3xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid md:grid-cols-2">
                <div className="h-64 md:h-auto">
                  <img src={selectedPlayer.img} alt={selectedPlayer.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-super-king-gold font-heading drop-shadow-md">{selectedPlayer.name}</h3>
                  <p className="text-lg text-super-king-light-grey mb-4">{selectedPlayer.role}</p>
                  <div className="border-t border-white/20 pt-4 space-y-3 text-super-king-light-grey">
                    <div className="flex items-center gap-3">
                      <User className="w-5 h-5 text-super-king-gold" />
                      <p><span className="font-bold">Batting:</span> {selectedPlayer.battingStyle}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Zap className="w-5 h-5 text-super-king-gold" />
                      <p><span className="font-bold">Bowling:</span> {selectedPlayer.bowlingStyle}</p>
                    </div>
                  </div>
                  <p className="text-sm text-super-king-light-grey/80 mt-4">{selectedPlayer.bio}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedPlayer(null)}
                className="absolute top-3 right-3 text-super-king-light-grey hover:text-super-king-gold p-2 rounded-full bg-black/30 hover:bg-black/50 transition-colors"
              >
                <X size={20} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Team;
