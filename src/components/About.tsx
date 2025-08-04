import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { quotes } from '@/data/content';
import { Quote } from 'lucide-react';

const About = () => {
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold">
              About <span className="text-gradient">Me</span>
            </h2>
            
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm an agriculture student with deep roots in farming traditions and 
                an eye firmly set on the future. My journey combines the wisdom of 
                the land with the innovation of modern business.
              </p>
              
              <p>
                From soil science to supply chains, from crop rotation to market 
                disruption—I believe the future of food security lies in marrying 
                sustainable agricultural practices with entrepreneurial thinking.
              </p>
              
              <p>
                When I'm not knee-deep in agricultural research, you'll find me 
                sketching business models, analyzing market trends, or exploring 
                how technology can solve age-old farming challenges.
              </p>
            </div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-6 mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">4+</div>
                <div className="text-sm text-muted-foreground">Years Studying</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">12+</div>
                <div className="text-sm text-muted-foreground">Projects Ideated</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">∞</div>
                <div className="text-sm text-muted-foreground">Ideas Growing</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Rotating Quote Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div
              className="quote-card float-animation relative"
              key={currentQuote}
              initial={{ opacity: 0, rotateY: -90 }}
              animate={{ opacity: 1, rotateY: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Quote className="text-primary mb-4" size={32} />
              <p className="text-lg italic text-foreground leading-relaxed">
                "{quotes[currentQuote]}"
              </p>
              <div className="mt-4 text-sm text-muted-foreground">
                — Inspiration #{currentQuote + 1}
              </div>
              
              {/* Quote indicator dots */}
              <div className="flex justify-center gap-2 mt-6">
                {quotes.map((_, index) => (
                  <motion.div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                      index === currentQuote ? 'bg-primary' : 'bg-muted'
                    }`}
                    whileHover={{ scale: 1.2 }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Decorative elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute -bottom-6 -left-6 w-16 h-16 bg-secondary/10 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;