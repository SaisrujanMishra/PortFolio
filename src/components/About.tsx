import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Gamepad2, Coffee, Brain } from 'lucide-react';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <motion.section
      ref={ref}
      id="about"
      className="py-20 bg-blackboard-light"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-chalk mb-12 text-center text-chalk-white">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div variants={itemVariants} className="space-y-6">
            
            <p className="text-lg text-chalk-white/80 leading-relaxed">
              As a full-stack developer with a passion for innovative technology, I bring a blend of technical expertise and creative problem-solving to every project. I consistently enhance my skills to master emerging technologies and develop efficient, scalable solutions.
            </p>
            <p className="text-lg text-chalk-white/80 leading-relaxed">
              My approach to development combines analytical thinking with a dedication to clean, maintainable code. I thrive on translating complex requirements into intuitive user experiences while ensuring robust backend architecture.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6">
            <div className="chalk-card hover:bg-blackboard transition-all duration-300">
              <Code className="w-8 h-8 text-chalk-blue mb-4" />
              <h3 className="text-xl font-semibold mb-2">Developer</h3>
              <p className="text-chalk-white/80">Crafting clean, efficient code with passion</p>
            </div>
            <div className="chalk-card hover:bg-blackboard transition-all duration-300">
              <Gamepad2 className="w-8 h-8 text-chalk-green mb-4" />
              <h3 className="text-xl font-semibold mb-2">Gamer</h3>
              <p className="text-chalk-white/80">Problem-solving through gaming perspectives</p>
            </div>
            <div className="chalk-card hover:bg-blackboard transition-all duration-300">
              <Coffee className="w-8 h-8 text-chalk-yellow mb-4" />
              <h3 className="text-xl font-semibold mb-2">Coffee Lover</h3>
              <p className="text-chalk-white/80">Fueling code with quality coffee</p>
            </div>
            <div className="chalk-card hover:bg-blackboard transition-all duration-300">
              <Brain className="w-8 h-8 text-chalk-pink mb-4" />
              <h3 className="text-xl font-semibold mb-2">Learner</h3>
              <p className="text-chalk-white/80">Always exploring new technologies</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}