import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// खिलाड़ियों की जानकारी को और ज़्यादा विस्तृत करें
const players = [
  { 
    name: 'Harsh Verma', 
    role: 'Captain, Batsman', 
    img: '/captain.png',
    battingStyle: 'Right-hand bat',
    bowlingStyle: 'Right-arm medium',
    bio: 'A natural leader and the backbone of our batting lineup. Known for his calm demeanor under pressure and strategic genius on the field.'
  },
  { 
    name: 'Aditya Singh', 
    role: 'Vice-Captain, Bowler', 
    img: '/aditya singh.png',
    battingStyle: 'Right-hand bat',
    bowlingStyle: 'Right-arm fast',
    bio: 'Our lead pacer with the ability to swing the ball both ways. His aggressive bowling often provides crucial breakthroughs.'
  },
  { 
    name: 'Ramnath Yogi', 
    role: 'Wicketkeeper', 
    img: '/yogi.png',
    battingStyle: 'Right-hand bat',
    bowlingStyle: 'N/A',
    bio: 'Quick behind the stumps and a dependable lower-order batsman. Yogi\'s energy is infectious and keeps the team motivated.'
  },
  { 
    name: 'Kanhaiya Pawar', 
    role: 'All-rounder', 
    img: '/kanhaiya.png',
    battingStyle: 'Left-hand bat',
    bowlingStyle: 'Slow left-arm orthodox',
    bio: 'A versatile all-rounder who can change the game with both bat and ball. His explosive hitting makes him a dangerous opponent.'
  },
  // ... आप यहाँ और खिलाड़ी जोड़ सकते हैं
];

const Team = () => {
  // Modal को मैनेज करने के लिए state
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  return (
    <section 
      id="team" 
      className="py-20 md:py-28 bg-super-king-grey flex-grow bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/stadium_bg.jpg')" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold text-super-king-gold font-heading">Meet The Squad</h2>
          <p className="text-lg text-super-king-light-grey mt-4">The champions who make us proud.</p>
        </motion.div>
        
        {/* Player Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {players.map((player, index) => (
            <motion.div
              key={player.name}
              className="group relative cursor-pointer"
              onClick={() => setSelectedPlayer(player)}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src={player.img} alt={player.name} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-lg font-bold text-super-king-light-grey font-heading">{player.name}</h3>
                  <p className="text-sm text-super-king-gold">{player.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Player Detail Modal */}
      <AnimatePresence>
        {selectedPlayer && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPlayer(null)} // बैकड्रॉप पर क्लिक करने पर बंद करें
          >
            <motion.div
              className="relative bg-super-king-grey w-full max-w-2xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()} // कार्ड पर क्लिक करने पर बंद न हो
            >
              <div className="grid md:grid-cols-2">
                <div className="h-64 md:h-auto">
                  <img src={selectedPlayer.img} alt={selectedPlayer.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-3xl font-bold text-super-king-gold font-heading">{selectedPlayer.name}</h3>
                  <p className="text-lg text-super-king-light-grey mb-4">{selectedPlayer.role}</p>
                  <div className="border-t border-white/20 pt-4 space-y-2">
                    <p><span className="font-bold text-super-king-gold">Batting:</span> {selectedPlayer.battingStyle}</p>
                    <p><span className="font-bold text-super-king-gold">Bowling:</span> {selectedPlayer.bowlingStyle}</p>
                  </div>
                   <p className="text-sm text-super-king-light-grey mt-4">{selectedPlayer.bio}</p>
                </div>
              </div>
              <button 
                onClick={() => setSelectedPlayer(null)}
                className="absolute top-4 right-4 text-super-king-light-grey hover:text-super-king-gold text-2xl"
              >
                &times;
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Team;