import { motion } from 'framer-motion';
import { skills } from '@/data/content';
import { Zap, Leaf, BarChart3, Database, Truck, Lightbulb } from 'lucide-react';

const skillIcons = {
  "Agricultural Technology": Zap,
  "Sustainable Farming": Leaf,
  "Business Strategy": BarChart3,
  "Data Analytics": Database,
  "Supply Chain": Truck,
  "Innovation Design": Lightbulb,
};

const Skills = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Skills & <span className="text-gradient">Focus Areas</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Combining agricultural expertise with business acumen to drive innovation
            in the farming and food technology sectors.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const IconComponent = skillIcons[skill.name as keyof typeof skillIcons];
            
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glow-box p-6 group hover:scale-105 transition-transform duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <IconComponent className="text-primary" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold">{skill.name}</h3>
                </div>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Proficiency</span>
                    <span className="text-primary font-medium">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-primary rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: index * 0.1 + 0.5 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>

                {/* Skill Pills Animation */}
                <motion.div
                  className="mt-4 flex flex-wrap gap-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.7 }}
                  viewport={{ once: true }}
                >
                  {/* Dynamic skill level indicator */}
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    skill.level >= 85 ? 'bg-primary/20 text-primary' :
                    skill.level >= 75 ? 'bg-secondary/20 text-secondary' :
                    'bg-muted text-muted-foreground'
                  }`}>
                    {skill.level >= 85 ? 'Expert' :
                     skill.level >= 75 ? 'Advanced' : 'Intermediate'}
                  </span>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glow-box p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to <span className="text-gradient">Collaborate?</span>
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's explore how these skills can drive innovation in your agricultural 
              or agtech projects. From concept to implementation, I'm here to help.
            </p>
            <motion.button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-hero"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Connect
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;