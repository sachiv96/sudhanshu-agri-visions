import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { quotes } from '@/data/content';
import { Smile, Sparkles, Coffee } from 'lucide-react';

const moods = [
  { icon: Smile, text: "Optimistically farming", color: "text-green-400" },
  { icon: Sparkles, text: "Innovation mode ON", color: "text-blue-400" },
  { icon: Coffee, text: "Caffeinated & creating", color: "text-yellow-400" },
  { icon: Smile, text: "Growing ideas daily", color: "text-purple-400" },
];

const Sidebar = () => {
  const [currentMood, setCurrentMood] = useState(0);
  const [currentQuote, setCurrentQuote] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // Auto-rotate mood and quote
  useEffect(() => {
    const moodInterval = setInterval(() => {
      setCurrentMood((prev) => (prev + 1) % moods.length);
    }, 8000);

    const quoteInterval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 12000);

    return () => {
      clearInterval(moodInterval);
      clearInterval(quoteInterval);
    };
  }, []);

  // Hide on small screens
  useEffect(() => {
    const handleResize = () => {
      setIsVisible(window.innerWidth >= 1280);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!isVisible) return null;

  const currentMoodData = moods[currentMood];
  const MoodIcon = currentMoodData.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="fixed right-6 top-1/2 transform -translate-y-1/2 w-80 z-40"
    >
      <div className="glow-box backdrop-blur-custom p-6 space-y-6">
        {/* Profile Section */}
        <motion.div
          className="text-center"
          whileHover={{ scale: 1.02 }}
        >
          {/* Profile Image Placeholder */}
          <motion.div
            className="w-20 h-20 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center text-2xl font-bold text-primary-foreground"
            whileHover={{ rotate: 5, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            SB
          </motion.div>
          
          <h3 className="font-bold text-lg text-foreground">Sudhanshu Bhatt</h3>
          <p className="text-sm text-muted-foreground">Agriculture × Business</p>
        </motion.div>

        {/* Current Mood */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
            Current Mood
          </h4>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentMood}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 p-3 bg-card/50 rounded-lg"
            >
              <MoodIcon className={`${currentMoodData.color}`} size={20} />
              <span className="text-sm font-medium">{currentMoodData.text}</span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mini Quote */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
            Daily Wisdom
          </h4>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuote}
              initial={{ opacity: 0, rotateX: -90 }}
              animate={{ opacity: 1, rotateX: 0 }}
              exit={{ opacity: 0, rotateX: 90 }}
              transition={{ duration: 0.6 }}
              className="p-4 bg-primary/10 rounded-lg border-l-4 border-primary"
            >
              <p className="text-sm italic text-foreground leading-relaxed">
                "{quotes[currentQuote]}"
              </p>
              <div className="mt-2 text-xs text-muted-foreground">
                #{currentQuote + 1}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Quick Stats */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
            Quick Stats
          </h4>
          
          <div className="grid grid-cols-2 gap-3">
            <motion.div
              className="text-center p-3 bg-card/50 rounded-lg"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-lg font-bold text-primary">24/7</div>
              <div className="text-xs text-muted-foreground">Thinking</div>
            </motion.div>
            
            <motion.div
              className="text-center p-3 bg-card/50 rounded-lg"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-lg font-bold text-secondary">∞</div>
              <div className="text-xs text-muted-foreground">Ideas</div>
            </motion.div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
            Quick Connect
          </h4>
          
          <div className="space-y-2">
            <motion.button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full py-2 px-3 bg-primary/20 text-primary rounded-lg hover:bg-primary/30 transition-colors text-sm font-medium"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              💬 Let's Chat
            </motion.button>
            
            <motion.button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full py-2 px-3 bg-secondary/20 text-secondary rounded-lg hover:bg-secondary/30 transition-colors text-sm font-medium"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              🚀 View Projects
            </motion.button>
          </div>
        </div>

        {/* Floating animation indicator */}
        <motion.div
          className="absolute -top-2 -right-2 w-4 h-4 bg-primary rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [1, 0.5, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </motion.div>
  );
};

export default Sidebar;