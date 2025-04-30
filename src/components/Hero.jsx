import React, { Suspense, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
const ParticleBackground = React.lazy(() => import('./helperComponents/ParticleBakcground'));
import { programming } from '../assets';

const Hero = React.memo(() => {
  const [activeIcon, setActiveIcon] = useState(null);

  // Animation variants for consistent animations
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="hero" className="relative w-full min-h-screen bg-neutral-900 overflow-hidden">
      {/* Optimized Particle Background */}
      <Suspense fallback={<div className="absolute inset-0 bg-neutral-900"></div>}>
        <ParticleBackground id="hero-particles" particleCount={40} /> {/* Reduced count for performance */}
      </Suspense>

      {/* Hero Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-screen flex flex-col lg:flex-row items-center justify-center text-center lg:text-left relative z-10">
        {/* Text Content */}
        <motion.div
          className="space-y-8 lg:w-1/2 mt-[-2rem]"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { 
              transition: { 
                staggerChildren: 0.2
              }
            }
          }}
          style={{ willChange: "transform" }}
        >
          {/* Pre-heading */}
          <motion.p 
            className="text-primary-400 font-medium tracking-wider text-lg uppercase"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            Full-Stack & Cloud Engineer
          </motion.p>
          
          {/* Main Heading */}
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-neutral-100 leading-tight"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            Building Scalable Systems from
            <span className="text-primary-400 relative"> Vision</span> to
            <br />
            <span className="text-primary-400 relative inline-block">Execution</span>
          </motion.h1>
          
          {/* Description */}
          <motion.p 
            className="text-xl text-neutral-300 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            I’m a software engineer with a full-stack foundation and a backend-first mindset. I build reliable cloud-native applications using modern frameworks and AWS infrastructure.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start pt-4"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <a href="#projects" className="group">
              <button className="bg-primary-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center justify-center w-full sm:w-auto transition-all duration-300 hover:bg-primary-600 hover:shadow-primary-500/20 hover:shadow-xl">
                <span className="mr-2">View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </a>
            <a href="#contact">
              <button className="bg-transparent border-2 border-primary-500 text-primary-500 px-6 py-3 rounded-lg flex items-center justify-center w-full sm:w-auto transition-all duration-300 hover:bg-primary-500/10">
                <span>Contact Me</span>
              </button>
            </a>
          </motion.div>
          
          {/* Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-6 max-w-lg mx-auto lg:mx-0"
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-neutral-800/50 p-4 rounded-lg backdrop-blur-sm border border-neutral-700/50 hover:border-primary-500/50 transition-all duration-300 group">
                <p className="text-primary-400 text-2xl font-bold group-hover:scale-110 transition-transform duration-300">3+</p>
                <p className="text-neutral-400 text-sm">Years Coding</p>
              </div>
              <div className="bg-neutral-800/50 p-4 rounded-lg backdrop-blur-sm border border-neutral-700/50 hover:border-primary-500/50 transition-all duration-300 group">
                <p className="text-primary-400 text-2xl font-bold group-hover:scale-110 transition-transform duration-300">7+</p>
                <p className="text-neutral-400 text-sm">Projects Built</p>
              </div>
              <div className="bg-neutral-800/50 p-4 rounded-lg backdrop-blur-sm border border-neutral-700/50 hover:border-primary-500/50 transition-all duration-300 group col-span-2 md:col-span-1">
                <p className="text-primary-400 text-2xl font-bold group-hover:scale-110 transition-transform duration-300">10+</p>
                <p className="text-neutral-400 text-sm">Technologies</p>
              </div>
          </motion.div>
        </motion.div>

        {/* SVG Illustration - Optimized */}
        <motion.div
          className="hidden lg:block lg:w-1/2 pl-8 mt-10 lg:mt-0"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.img
            src={programming}
            alt="Programming Illustration"
            className="w-full h-auto max-w-2xl mx-auto"
            loading="lazy"
            initial={{ y: 0 }}
            animate={{ y: [0, -15, 0] }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </div>
    </section>
  );
});

export default Hero;