import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// खिलाड़ियों की विस्तृत और अपडेटेड जानकारी
const players = [
  { 
    name: 'Harsh Verma', 
    role: 'Captain, Batter', 
    img: '/captain.png',
    battingStyle: 'Right-hand bat',
    bowlingStyle: 'Right-arm Off Spin',
    bio: 'A key leader in the team, known for his exceptional wicket-keeping skills and solid batting.'
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
    img: '/yogi.png', // Assuming ramnath -> ram
    battingStyle: 'Right-hand bat',
    bowlingStyle: 'Right-arm Medium',
    bio: 'A hard-hitting batsman and a proven match-winner with his explosive style of play.'
  },
  { 
    name: 'Kanhaiya Pawar', 
    role: 'All Rounder', 
    img: '/kanhaiya.png',
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
    img: '/deepraj.png',
    battingStyle: 'Right-hand bat',
    bowlingStyle: 'Right-arm Medium',
    bio: 'An excellent and consistent batsman, known for his reliable and impressive batting.'
  },
  { 
    name: 'Dharmendra Kachhava', 
    role: 'All Rounder', 
    img: '/dharmendra.png',
    battingStyle: 'Right-hand bat',
    bowlingStyle: 'Right-arm Fast Medium',
    bio: 'A formidable all-rounder with a "Malinga-like" bowling action that often troubles batsmen.'
  },
  { 
    name: 'Adarsh Soni', 
    role: 'All Rounder', 
    img: '/adarsh.png',
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
    img: '/rajveer.png',
    battingStyle: 'Right-hand bat',
    bowlingStyle: 'Right-arm Medium',
    bio: 'An effective and stylish batsman who makes an impact with his elegant shots.'
  },
  { 
    name: 'Abhi Kushwaha', 
    role: 'All Rounder', 
    img: '/abhi.png', // Note: Duplicate name, consider a unique filename like '/aditya_mishra.jpg'
    battingStyle: 'Right-hand bat',
    bowlingStyle: 'Right-arm Fast',
    bio: 'He is a good hard-hitter and a fast bowler, making him the complete all-rounder package.'
  },
  { 
    name: 'Aditya Mishra', 
    role: 'All Rounder', 
    img: '/aditya mishra.png', // Note: Duplicate name, consider a unique filename like '/aditya_mishra.jpg'
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
    img: '/jayesh.png',
    battingStyle: 'Right-hand bat',
    bowlingStyle: 'Left-arm Medium',
    bio: 'A good cutter bowler, adept at varying his pace and line.'
  },
  { 
    name: 'Rishi Pal', 
    role: 'Batter', 
    img: '/rishi.jpg',
    battingStyle: 'Right-hand bat',
    bowlingStyle: 'Right-arm Off Spin',
    bio: 'A good hard-hitting batsman who can score quickly and put pressure on the bowlers.'
  }
];

const Team = () => {
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  return (
    <section 
      id="team" 
      className="py-24 md:py-32 bg-super-king-grey flex-grow bg-cover bg-center bg-fixed"
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
          <h2 className="text-4xl lg:text-5xl font-extrabold text-super-king-gold font-heading drop-shadow-lg">Meet The Squad</h2>
          <p className="text-lg text-super-king-light-grey mt-4">The champions who make us proud.</p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8">
          {players.map((player, index) => (
            <motion.div
              key={player.name}
              className="bg-black bg-opacity-50 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:border-super-king-gold"
              onClick={() => setSelectedPlayer(player)}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img 
                className="w-full h-auto aspect-[4/5] object-cover" 
                src={player.img} 
                alt={player.name} 
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold text-super-king-light-grey font-heading truncate">{player.name}</h3>
                <p className="text-sm text-super-king-gold">{player.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedPlayer && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPlayer(null)}
          >
            <motion.div
              className="relative bg-super-king-grey w-full max-w-2xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden"
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
                <div className="p-6">
                  <h3 className="text-3xl font-bold text-super-king-gold font-heading drop-shadow-md">{selectedPlayer.name}</h3>
                  <p className="text-lg text-super-king-light-grey mb-4">{selectedPlayer.role}</p>
                  <div className="border-t border-white/20 pt-4 space-y-2 text-super-king-light-grey">
                    <p><span className="font-bold text-super-king-gold">Batting:</span> {selectedPlayer.battingStyle}</p>
                    <p><span className="font-bold text-super-king-gold">Bowling:</span> {selectedPlayer.bowlingStyle}</p>
                  </div>
                   <p className="text-sm text-super-king-light-grey mt-4">{selectedPlayer.bio}</p>
                </div>
              </div>
              <button 
                onClick={() => setSelectedPlayer(null)}
                className="absolute top-4 right-4 text-super-king-light-grey hover:text-super-king-gold text-2xl transition-colors"
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
