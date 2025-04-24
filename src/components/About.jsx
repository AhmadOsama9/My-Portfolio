import React, { useState, useEffect } from 'react';
import { Code, Cpu, Database, Cloud, Rocket, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';

const About = () => {
  const services = [
    {
      icon: <Code className="w-12 h-12 text-primary-400" />,
      title: "Full-Stack Development",
      description: "I build scalable web applications using modern frameworks like React, Node.js, and PostgreSQL.",
      color: "from-primary-500/20 to-primary-500/5",
    },
    {
      icon: <Cpu className="w-12 h-12 text-blue-400" />,
      title: "Efficient Problem Solving",
      description: "With over 300 LeetCode problems solved, I tackle complex challenges with optimized algorithms.",
      color: "from-blue-500/20 to-blue-500/5",
    },
    {
      icon: <Database className="w-12 h-12 text-purple-400" />,
      title: "Database Design",
      description: "I design efficient database systems using PostgreSQL and MongoDB for seamless data management.",
      color: "from-purple-500/20 to-purple-500/5",
    },
    {
      icon: <Cloud className="w-12 h-12 text-green-400" />,
      title: "Cloud & DevOps",
      description: "I deploy scalable solutions using AWS, Docker, and CI/CD pipelines for reliable performance.",
      color: "from-green-500/20 to-green-500/5",
    },
    {
      icon: <Rocket className="w-12 h-12 text-red-400" />,
      title: "Rapid Prototyping",
      description: "I deliver fast, high-quality prototypes to validate ideas and accelerate development.",
      color: "from-red-500/20 to-red-500/5",
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
      x: direction > 0 ? 500 : -500,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 500 : -500,
      opacity: 0,
    }),
  };

  return (
    <section id="about" className="min-h-screen flex flex-col justify-center bg-neutral-900 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Headline with Gradient Underline */}
        <h2 className="text-4xl md:text-5xl font-bold text-neutral-100 text-center mb-6">
          About Me
        </h2>
        <p className="text-xl text-neutral-300 text-center max-w-2xl mx-auto mb-12">
          I’m a Full-Stack Developer and Software Engineer specializing in building scalable, efficient, and user-friendly web applications.
        </p>
        {/* Enhanced Carousel */}
        <div
          className="relative w-full h-[400px] md:h-[350px] overflow-hidden rounded-2xl bg-neutral-800/30 backdrop-blur-sm shadow-xl border border-neutral-700/30"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          {...swipeHandlers}
        >
          {/* Navigation Arrows with Enhanced Styling */}
          <div className="absolute inset-y-0 left-0 hidden md:flex items-center justify-start pl-6 z-20">
            <motion.button
              className="bg-neutral-800/70 p-3 rounded-full shadow-lg hover:bg-primary-500/30 transition-colors border border-neutral-700/40"
              onClick={prevSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6 text-neutral-100" />
            </motion.button>
          </div>
          
          <div className="absolute inset-y-0 right-0 hidden md:flex items-center justify-end pr-6 z-20">
            <motion.button
              className="bg-neutral-800/70 p-3 rounded-full shadow-lg hover:bg-primary-500/30 transition-colors border border-neutral-700/40"
              onClick={nextSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6 text-neutral-100" />
            </motion.button>
          </div>

          {/* Slides with Enhanced Animations */}
          <AnimatePresence initial={false} custom={activeSlide}>
            {services.map((service, index) => (
              activeSlide === index && (
                <motion.div
                  key={index}
                  className={`absolute inset-0 flex flex-col items-center justify-center p-8 bg-gradient-to-b ${service.color}`}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  variants={slideVariants}
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.4 }
                  }}
                  custom={activeSlide}
                >
                  {/* Icon Circle with Glass Effect */}
                  <div className="w-24 h-24 flex items-center justify-center rounded-full bg-gradient-to-br from-neutral-800/90 to-neutral-900/90 shadow-xl mb-8 backdrop-blur-md border border-neutral-700/50 transform transition-all duration-300 hover:scale-105">
                    {service.icon}
                  </div>

                  {/* Enhanced Content */}
                  <h3 className="text-3xl font-semibold text-neutral-100 mb-4 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-lg text-neutral-300 text-center max-w-xl leading-relaxed">
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
                  : 'bg-neutral-600 hover:bg-neutral-500'
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