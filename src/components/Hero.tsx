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
        <div className="grid lg:grid-cols-5 gap-12 items-center min-h-[80vh]">
          {/* Left side - Content (3 columns) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3 space-y-8"
          >
            {/* Main heading */}
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold"
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
              className="flex flex-wrap items-center gap-4 text-lg md:text-xl lg:text-2xl text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex items-center gap-3">
                <Sprout className="text-primary" size={24} />
                <span>Agriculture thinker.</span>
              </div>
              <div className="flex items-center gap-3">
                <TrendingUp className="text-secondary" size={24} />
                <span>Business doer.</span>
              </div>
            </motion.div>

            {/* Subtext */}
            <motion.p
              className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Bridging the gap between traditional agriculture and modern business 
              innovation. Building sustainable solutions for tomorrow's farming challenges.
            </motion.p>

            {/* Stats or additional info */}
            <motion.div
              className="grid grid-cols-3 gap-6 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">4+</div>
                <div className="text-sm text-muted-foreground">Years</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-secondary">12+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">∞</div>
                <div className="text-sm text-muted-foreground">Ideas</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Large Photo (2 columns) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-2 flex justify-center lg:justify-end h-full"
          >
            <div className="relative w-full max-w-lg">
              {/* Large Photo container */}
              <motion.div
                className="w-full h-[500px] md:h-[600px] bg-gradient-primary rounded-3xl flex items-center justify-center text-7xl md:text-8xl font-bold text-primary-foreground shadow-glow relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Photo placeholder - replace with actual image */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-secondary/90 flex items-center justify-center">
                  <span className="text-6xl md:text-8xl font-bold">SB</span>
                </div>
                
                {/* Overlay with subtle pattern */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
              </motion.div>
              
              {/* Decorative elements around photo */}
              <motion.div
                className="absolute -top-8 -right-8 w-24 h-24 bg-secondary/20 rounded-full backdrop-blur-sm"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute -bottom-8 -left-8 w-20 h-20 bg-primary/20 rounded-full backdrop-blur-sm"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Agricultural themed floating badges */}
              <motion.div
                className="absolute top-6 left-6 bg-primary/90 backdrop-blur-sm text-primary-foreground px-4 py-2 rounded-full text-sm font-bold shadow-lg"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                🌱 Innovator
              </motion.div>
              
              <motion.div
                className="absolute bottom-6 right-6 bg-secondary/90 backdrop-blur-sm text-secondary-foreground px-4 py-2 rounded-full text-sm font-bold shadow-lg"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
              >
                💡 Entrepreneur
              </motion.div>

              {/* Success indicator */}
              <motion.div
                className="absolute top-1/2 -right-6 bg-background/90 backdrop-blur-sm border border-primary/30 rounded-lg p-3 shadow-lg"
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 2 }}
              >
                <div className="text-primary text-xs font-bold">✨ Active</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;