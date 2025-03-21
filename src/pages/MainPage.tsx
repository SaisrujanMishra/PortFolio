import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import About from '../components/About';
import SkillsFilter from '../components/SkillsFilter';
import SkillsMarquee from '../components/SkillsMarquee';

export default function MainPage() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <motion.section 
        className="min-h-screen flex items-center pt-16"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Profile Photo */}
            <motion.div
              className="flex justify-center md:justify-start md:pl-12"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-accent-gold/30 shadow-lg">
                <img
                  src="./Sai_logo.jpeg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Text Content */}
            <div className="text-right">
              <motion.h1 
                className="text-3xl md:text-4xl font-bold mb-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                Saisrujan Mishra
              </motion.h1>
              <motion.h2 
                className="text-4xl md:text-4xl font-bold mb-4 whitespace-nowrap"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                FULL STACK DEVELOPER
              </motion.h2>
              <motion.p 
                className="text-lg text-secondary/80 mb-8"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                Crafting digital experiences through code. Specialized in web development,
                embedded systems, and cloud computing.
              </motion.p>

              <motion.div 
                className="flex justify-end space-x-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                   className="p-2 rounded-full bg-secondary/20 hover:bg-secondary/30 transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                   className="p-2 rounded-full bg-secondary/20 hover:bg-secondary/30 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="mailto:contact@example.com"
                   className="p-2 rounded-full bg-secondary/20 hover:bg-secondary/30 transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <About />

      {/* Skills Section */}
      <motion.section
        className="py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-6">
          <h2 className="section-heading">Skills & Interests</h2>
          <SkillsFilter 
            selectedFilters={selectedFilters}
            onFilterChange={setSelectedFilters}
          />
          <SkillsMarquee selectedCategories={selectedFilters} />
        </div>
      </motion.section>
    </div>
  );
}