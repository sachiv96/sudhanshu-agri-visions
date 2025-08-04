import { motion } from 'framer-motion';
import { Sprout, TrendingUp } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-subtle opacity-50" />
      
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Main heading */}
            <motion.h1
              className="text-5xl md:text-7xl font-bold"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-gradient">Sudhanshu</span>
              <br />
              <span className="text-foreground">Bhatt</span>
            </motion.h1>

            {/* Tagline */}
            <motion.div
              className="flex items-center gap-4 text-xl md:text-2xl text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Sprout className="text-primary" size={28} />
              <span>Agriculture thinker.</span>
              <TrendingUp className="text-secondary" size={28} />
              <span>Business doer.</span>
            </motion.div>

            {/* Subtext */}
            <motion.p
              className="text-lg md:text-xl text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Bridging the gap between traditional agriculture and modern business 
              innovation. Building sustainable solutions for tomorrow's farming challenges.
            </motion.p>
          </motion.div>

          {/* Right side - Photo space */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Photo placeholder with gradient background */}
              <motion.div
                className="w-80 h-80 bg-gradient-primary rounded-2xl flex items-center justify-center text-6xl font-bold text-primary-foreground shadow-glow"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                SB
              </motion.div>
              
              {/* Decorative elements around photo */}
              <motion.div
                className="absolute -top-6 -right-6 w-20 h-20 bg-secondary/20 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute -bottom-6 -left-6 w-16 h-16 bg-primary/20 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Agricultural themed stickers */}
              <motion.div
                className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🌱 Growing
              </motion.div>
              
              <motion.div
                className="absolute bottom-4 right-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-bold"
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
              >
                💡 Innovating
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;