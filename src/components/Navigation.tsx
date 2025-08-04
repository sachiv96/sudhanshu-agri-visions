import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X, Home, User, Briefcase, Lightbulb, MessageCircle, Sparkles } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: 'Home', href: '#', icon: Home },
    { label: 'About', href: '#about', icon: User },
    { label: 'Skills', href: '#skills', icon: Briefcase },
    { label: 'Projects', href: '#projects', icon: Lightbulb },
    { label: 'Inspiration', href: '#inspiration', icon: Sparkles },
    { label: 'Contact', href: '#contact', icon: MessageCircle },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-background/80 backdrop-blur-lg border-b border-border/50' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              className="text-xl font-bold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-gradient">Sudhanshu</span>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-foreground p-2"
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        className={`fixed inset-0 z-40 md:hidden ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
        initial={false}
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />

        {/* Menu Content */}
        <motion.div
          className="absolute top-16 left-0 right-0 bg-card/95 backdrop-blur-lg border-b border-border/50"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: isOpen ? 0 : -100, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 30 }}
        >
          <div className="container mx-auto px-6 py-6">
            <div className="space-y-4">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="flex items-center gap-3 w-full text-left py-3 px-4 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ 
                    opacity: isOpen ? 1 : 0, 
                    x: isOpen ? 0 : -20 
                  }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <item.icon size={20} />
                  <span className="font-medium">{item.label}</span>
                </motion.button>
              ))}
            </div>

            {/* Mobile CTA */}
            <motion.div
              className="mt-6 pt-6 border-t border-border/50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: isOpen ? 1 : 0, 
                y: isOpen ? 0 : 20 
              }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <button
                onClick={() => scrollToSection('#contact')}
                className="w-full btn-hero"
              >
                Let's Connect
              </button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Action Button for mobile */}
      <motion.button
        onClick={() => scrollToSection('#contact')}
        className="fixed bottom-6 right-6 md:hidden w-14 h-14 bg-gradient-primary text-primary-foreground rounded-full shadow-glow flex items-center justify-center z-40"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageCircle size={20} />
      </motion.button>
    </>
  );
};

export default Navigation;