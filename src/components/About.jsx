import React, { useState, useEffect } from 'react';
import { Code, Cpu, Database, Cloud, Rocket, ChevronLeft, ChevronRight, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';

const About = () => {

  // New About content: story-driven, unique
  const services = [
    {
      icon: <User className="w-12 h-12 text-primary-400" />,
      title: "Engineering with Empathy",
      description: "Great software starts with understanding people. I listen, ask questions, and design systems that truly serve users and teams.",
      color: "from-primary-500/20 to-primary-500/5",
    },
    {
      icon: <Cloud className="w-12 h-12 text-green-400" />,
      title: "Automation & Efficiency",
      description: "I love automating the tedious—whether it’s infrastructure, deployments, or workflows—so we can focus on what matters: innovation and impact.",
      color: "from-green-500/20 to-green-500/5",
    },
    {
      icon: <Rocket className="w-12 h-12 text-red-400" />,
      title: "Bridging Ideas to Reality",
      description: "From whiteboard to production, I turn ideas into robust, scalable products—balancing speed with quality at every step.",
      color: "from-red-500/20 to-red-500/5",
    },
    {
      icon: <Cpu className="w-12 h-12 text-blue-400" />,
      title: "Continuous Growth",
      description: "Tech never stands still, and neither do I. I’m always exploring new tools, patterns, and best practices to stay ahead and deliver lasting value.",
      color: "from-blue-500/20 to-blue-500/5",
    },
  ];
  

  const [activeSlide, setActiveSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  // Auto-scroll with reduced frequency for better UX
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        nextSlide();
      }, 7000); // Increased to 7 seconds for better reading time
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  // Enhanced swipe handlers
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    trackMouse: true,
    preventDefaultTouchmoveEvent: true,
    trackTouch: true,
  });

  // Animation variants
  const slideVariants = {
    enter: (direction) => ({
      rotateY: direction > 0 ? 90 : -90,
      opacity: 0,
      zIndex: 0,
    }),
    center: {
      rotateY: 0,
      opacity: 1,
      zIndex: 1,
      transition: { type: 'spring', stiffness: 300, damping: 30 }
    },
    exit: (direction) => ({
      rotateY: direction < 0 ? 90 : -90,
      opacity: 0,
      zIndex: 0,
    }),
  };

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center bg-gradient-to-br from-neutral-900 via-neutral-950 to-primary-950 py-20 relative overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at 60% 40%, rgba(56,189,248,0.08) 0%, transparent 70%), linear-gradient(135deg, #171717 0%, #0a0a0a 60%, #0f172a 100%)'
      }}
    >
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-gradient-to-br from-primary-400/10 to-cyan-400/5 rounded-full blur-3xl opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tr from-black/20 to-black/0 rounded-full blur-3xl opacity-5 pointer-events-none" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Card with Avatar and Signature */}
        <div className="mx-auto mb-12 max-w-2xl flex flex-col items-center bg-neutral-900/80 rounded-2xl shadow-xl border border-neutral-700/40 p-8 backdrop-blur-md relative z-10">
          <img src="https://ui-avatars.com/api/?name=Ahmed&background=0D1117&color=38bdf8&size=128" alt="Ahmed Avatar" className="w-24 h-24 rounded-full border-4 border-primary-400 shadow-lg mb-4" />
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-300 text-center max-w-xl mb-4 leading-relaxed">
            I have completed my studies at Cairo University, Faculty of Computer and Artificial Intelligence (FCAI), where I built a strong foundation in computer science and problem-solving. I’ve already worked extensively with a wide range of technologies—from AWS, serverless, and cloud infrastructure to modern frontend frameworks—delivering robust, scalable solutions and always striving to learn and grow.
          </p>
          <div className="mt-2 text-primary-400 font-signature text-2xl">Ahmed</div>
        </div>
        {/* Enhanced Carousel */}
        <div
          className="relative w-full h-[420px] md:h-[370px] overflow-visible flex items-center justify-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          {...swipeHandlers}
        >
          {/* Navigation Arrows with Enhanced Styling */}
          <div className="absolute inset-y-0 left-0 hidden md:flex items-center justify-start pl-6 z-20">
            <motion.button
              className="bg-neutral-800/80 p-3 rounded-full shadow-md hover:bg-primary-500/20 transition-colors border border-neutral-700/40 focus:outline-none focus:ring-2 focus:ring-primary-400/40"
              onClick={prevSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6 text-primary-400" />
            </motion.button>
          </div>
          <div className="absolute inset-y-0 right-0 hidden md:flex items-center justify-end pr-6 z-20">
            <motion.button
              className="bg-neutral-800/80 p-3 rounded-full shadow-md hover:bg-primary-500/20 transition-colors border border-neutral-700/40 focus:outline-none focus:ring-2 focus:ring-primary-400/40"
              onClick={nextSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6 text-primary-400" />
            </motion.button>
          </div>
          {/* Slides with Modern Fade+Scale Animation and Glassmorphism */}
          <AnimatePresence initial={false} custom={activeSlide}>
            {services.map((service, index) => (
              activeSlide === index && (
                <motion.div
                  key={index}
                  className={`absolute inset-0 flex flex-col items-center justify-center p-12 bg-neutral-800/70 rounded-3xl shadow-2xl border border-primary-400/10 backdrop-blur-2xl transition-all duration-500 animate-fade-in hover:shadow-primary-400/10 hover:scale-[1.025]`}
                  custom={activeSlide}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                  style={{ perspective: 1200 }}
                >
                  {/* Icon Circle with Glass Effect */}
                  <div className="w-24 h-24 flex items-center justify-center rounded-full bg-gradient-to-br from-neutral-900/80 to-neutral-800/80 shadow-lg mb-8 backdrop-blur-md border border-neutral-700/50 transform transition-all duration-300 hover:scale-105">
                    {service.icon}
                  </div>
                  {/* Enhanced Content */}
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-neutral-100 mb-4 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-base sm:text-lg md:text-xl text-neutral-300 text-center max-w-xl leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>
        {/* Enhanced Navigation Dots */}
        <div className="flex justify-center mt-8 space-x-4">
          {services.map((service, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeSlide === index 
                  ? 'bg-primary-400 w-6 shadow-md shadow-primary-400/30' 
                  : 'bg-neutral-700 hover:bg-primary-400/40'
              }`}
              onClick={() => setActiveSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;