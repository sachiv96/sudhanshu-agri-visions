import { motion } from 'framer-motion';
import { Mail, Twitter, Send, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    {
      icon: Twitter,
      label: 'Twitter',
      url: 'https://twitter.com/sudhanshu_agri',
      color: 'hover:text-blue-400'
    },
    {
      icon: Mail,
      label: 'Email',
      url: 'mailto:sudhanshu.bhatt@email.com',
      color: 'hover:text-red-400'
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss agriculture, business, or the next big innovation? 
            I'm always excited to connect with like-minded individuals and explore 
            collaboration opportunities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glow-box p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Send className="text-primary" size={24} />
                Get in Touch
              </h3>
              
              <div className="space-y-6">
                <motion.div
                  className="flex items-center gap-4 p-4 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <Mail className="text-primary" size={20} />
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-muted-foreground">sudhanshu.bhatt@email.com</div>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center gap-4 p-4 bg-secondary/10 rounded-lg hover:bg-secondary/20 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <MapPin className="text-secondary" size={20} />
                  <div>
                    <div className="font-medium">Location</div>
                    <div className="text-muted-foreground">Agricultural Hub, India</div>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center gap-4 p-4 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <Phone className="text-primary" size={20} />
                  <div>
                    <div className="font-medium">Available for</div>
                    <div className="text-muted-foreground">Collaboration & Consultation</div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glow-box p-8">
              <h3 className="text-xl font-bold mb-6">Follow the Journey</h3>
              <div className="grid grid-cols-1 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 p-4 bg-card/50 rounded-lg transition-all duration-300 ${social.color} hover:scale-105`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={20} />
                    <span className="font-medium">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="glow-box p-8">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="space-y-2"
                  >
                    <label className="text-sm font-medium text-foreground">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                      placeholder="Your name"
                    />
                  </motion.div>
                  
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="space-y-2"
                  >
                    <label className="text-sm font-medium text-foreground">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                      placeholder="your.email@example.com"
                    />
                  </motion.div>
                </div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="space-y-2"
                >
                  <label className="text-sm font-medium text-foreground">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                    placeholder="What's this about?"
                  />
                </motion.div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="space-y-2"
                >
                  <label className="text-sm font-medium text-foreground">Message</label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none resize-none"
                    placeholder="Tell me about your project, idea, or just say hello!"
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  className="w-full btn-hero flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send size={18} />
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Fun footer message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glow-box p-6 max-w-2xl mx-auto">
            <p className="text-muted-foreground">
              💡 <strong>Pro tip:</strong> Mention "agriculture" or "innovation" in your message 
              to get my attention even faster! 🚀
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;