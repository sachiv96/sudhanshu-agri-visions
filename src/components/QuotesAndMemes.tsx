import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { quotes, memes } from '@/data/content';
import { Shuffle, Heart, Share2 } from 'lucide-react';

const QuotesAndMemes = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [currentMemeIndex, setCurrentMemeIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Auto-rotate quotes and memes
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length);
      setCurrentMemeIndex((prev) => (prev + 1) % memes.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const shuffleContent = () => {
    setCurrentQuoteIndex(Math.floor(Math.random() * quotes.length));
    setCurrentMemeIndex(Math.floor(Math.random() * memes.length));
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 text-6xl">🌱</div>
        <div className="absolute bottom-32 right-16 text-6xl">💡</div>
        <div className="absolute top-40 right-20 text-6xl">🚀</div>
        <div className="absolute bottom-20 left-20 text-6xl">🌾</div>
      </div>

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Daily <span className="text-gradient">Inspiration</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A mix of motivational thoughts and light-hearted takes on agriculture 
            and business. Because innovation needs both wisdom and humor!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Inspirational Quotes Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold">Wisdom Drops 💧</h3>
              <motion.button
                onClick={shuffleContent}
                className="p-2 bg-primary/20 text-primary rounded-lg hover:bg-primary/30 transition-colors"
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.95 }}
              >
                <Shuffle size={20} />
              </motion.button>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuoteIndex}
                initial={{ opacity: 0, y: 30, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                exit={{ opacity: 0, y: -30, rotateX: 90 }}
                transition={{ duration: 0.6 }}
                className="quote-card float-animation"
              >
                <div className="text-4xl text-primary mb-4">"</div>
                <p className="text-lg text-foreground leading-relaxed mb-6">
                  {quotes[currentQuoteIndex]}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Quote #{currentQuoteIndex + 1} of {quotes.length}
                  </span>
                  
                  <div className="flex gap-2">
                    <motion.button
                      className="p-2 text-muted-foreground hover:text-primary transition-colors"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Heart size={16} />
                    </motion.button>
                    <motion.button
                      className="p-2 text-muted-foreground hover:text-primary transition-colors"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Share2 size={16} />
                    </motion.button>
                  </div>
                </div>

                {/* Progress indicator */}
                <div className="w-full bg-muted rounded-full h-1 mt-4 overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-primary"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 5 }}
                    key={`progress-${currentQuoteIndex}`}
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Memes Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold">Agri-Memes 😄</h3>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Auto-play</span>
                <motion.button
                  onClick={() => setIsAutoPlay(!isAutoPlay)}
                  className={`w-12 h-6 rounded-full p-1 transition-colors ${
                    isAutoPlay ? 'bg-primary' : 'bg-muted'
                  }`}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="w-4 h-4 bg-white rounded-full"
                    animate={{ x: isAutoPlay ? 24 : 0 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                </motion.button>
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentMemeIndex}
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="glow-box p-8 text-center relative"
                whileHover={{ scale: 1.02, rotate: 1 }}
              >
                {/* Meme emoji */}
                <motion.div
                  className="text-6xl mb-4"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  {memes[currentMemeIndex].emoji}
                </motion.div>

                <h4 className="text-xl font-bold text-foreground mb-2">
                  {memes[currentMemeIndex].text}
                </h4>
                
                <p className="text-muted-foreground">
                  {memes[currentMemeIndex].subtitle}
                </p>

                {/* Decorative stickers */}
                <motion.div
                  className="absolute -top-2 -right-2 bg-secondary text-secondary-foreground px-2 py-1 rounded-full text-xs font-bold"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  NEW!
                </motion.div>

                <motion.div
                  className="absolute -bottom-2 -left-2 bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-bold"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  LOL
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Meme navigation dots */}
            <div className="flex justify-center gap-2">
              {memes.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentMemeIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentMemeIndex ? 'bg-primary' : 'bg-muted'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Interactive controls */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glow-box p-6 max-w-md mx-auto">
            <h4 className="text-lg font-bold mb-4">Loving the Content?</h4>
            <p className="text-muted-foreground text-sm mb-4">
              Share your favorite quotes or memes with the agricultural community!
            </p>
            <motion.button
              className="btn-hero"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Share the Wisdom
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuotesAndMemes;