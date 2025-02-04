import React, { Suspense, useState } from 'react';
import { motion } from 'framer-motion';
const ParticleBackground = React.lazy(() => import('./helperComponents/ParticleBakcground'));
import { programming } from '../assets';

const Hero = React.memo(() => {
  const [activeIcon, setActiveIcon] = useState(null);

  return (
    <section id="hero" className="relative w-full min-h-screen bg-neutral-900 overflow-hidden">
      {/* Particle Background */}
      <Suspense fallback={<div>Loading...</div>}>
        <ParticleBackground id="hero-particles" particleCount={30} />
      </Suspense>

      {/* Hero Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-center min-h-screen text-center lg:text-left relative z-10">
        {/* Text Content */}
        <motion.div
          className="space-y-6 lg:w-1/2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ willChange: "transform, opacity" }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-neutral-100 mb-4">
            Turning <span className="text-primary-400">Vision</span> into <br />
            <span className="text-primary-400">Digital Innovation</span>
          </h1>
          <p className="text-xl text-neutral-300 max-w-2xl mx-auto lg:mx-0">
            Welcome to <span className="text-primary-400 font-semibold">DevByAhmed</span>, where I transform ideas into reality. 
            As a <span className="text-primary-400 font-semibold">Full-Stack Developer</span> and{' '}
            <span className="text-primary-400 font-semibold">Software Engineer</span>, I specialize in building scalable,
            efficient, and cutting-edge solutions. Let’s build the future together.
          </p>
          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-8 mt-8 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ willChange: "transform, opacity" }}
          >
            <a href="#projects">
              <button>
                <span className="bg-primary-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-primary-600 transition-colors hover:bg-transparent hover:text-primary-500">
                  View Projects
                </span>
              </button>
            </a>
            <a href="#contact">
              <button>
                <span className="bg-transparent border border-primary-500 text-primary-500 px-6 py-3 rounded-lg hover:bg-primary-500 hover:text-white transition-colors">
                  Contact Me
                </span>
              </button>
            </a>
          </motion.div>
        </motion.div>

        {/* SVG Illustration (Visible on Large Screens) */}
        <motion.div
          className="hidden lg:block lg:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{ willChange: "transform, opacity" }}
        >
          <img
            src={programming}
            alt="Programming Illustration"
            className="w-full h-auto max-w-2xl mx-auto"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
});

export default Hero;