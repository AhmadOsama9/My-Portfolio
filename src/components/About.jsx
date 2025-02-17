import React, { useState, useEffect } from 'react';
import { Code, Cpu, Database, Cloud, Rocket, ChevronLeft, ChevronRight } from 'lucide-react'; // Icons for services
import { motion, AnimatePresence } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';

const About = () => {
  const services = [
    {
      icon: <Code className="w-12 h-12 text-primary-400" />,
      title: "Full-Stack Development",
      description: "I build scalable web applications using modern frameworks like React, Node.js, and PostgreSQL.",
      color: "from-primary-100 to-white",
    },
    {
      icon: <Cpu className="w-12 h-12 text-accent-blue-400" />,
      title: "Efficient Problem Solving",
      description: "With over 300 LeetCode problems solved, I tackle complex challenges with optimized algorithms.",
      color: "from-accent-blue-100 to-white",
    },
    {
      icon: <Database className="w-12 h-12 text-accent-purple-400" />,
      title: "Database Design",
      description: "I design efficient database systems using PostgreSQL and MongoDB for seamless data management.",
      color: "from-accent-purple-100 to-white",
    },
    {
      icon: <Cloud className="w-12 h-12 text-accent-green-400" />,
      title: "Cloud & DevOps",
      description: "I deploy scalable solutions using AWS, Docker, and CI/CD pipelines for reliable performance.",
      color: "from-accent-green-100 to-white",
    },
    {
      icon: <Rocket className="w-12 h-12 text-accent-red-400" />,
      title: "Rapid Prototyping",
      description: "I deliver fast, high-quality prototypes to validate ideas and accelerate development.",
      color: "from-accent-red-100 to-white",
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

  // Auto-scroll logic
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        nextSlide();
      }, 5000); // Change slide every 5 seconds
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  // Swipe handlers for mobile
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    trackMouse: true,
  });

  return (
    <section id="about" className="min-h-screen flex flex-col justify-center bg-neutral-900 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline */}
        <h2 className="text-4xl md:text-5xl font-bold text-neutral-100 text-center mb-6">
          About Me
        </h2>
        <p className="text-xl text-neutral-300 text-center max-w-2xl mx-auto mb-12">
          I’m a Full-Stack Developer and Software Engineer specializing in building scalable, efficient, and user-friendly web applications.
        </p>

        {/* Carousel */}
        <div
          className="relative w-full h-[60vh] overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          {...swipeHandlers}
        >
          {/* Navigation Arrows - Hidden on mobile */}
          <div className="absolute inset-y-0 left-0 hidden md:flex items-center justify-start pl-4 z-20">
            <motion.button
              className="bg-neutral-800/50 p-3 rounded-full shadow-lg hover:bg-neutral-800/80 transition-colors"
              onClick={prevSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-6 h-6 text-neutral-100" />
            </motion.button>
          </div>
          <div className="absolute inset-y-0 right-0 hidden md:flex items-center justify-end pr-4 z-20">
            <motion.button
              className="bg-neutral-800/50 p-3 rounded-full shadow-lg hover:bg-neutral-800/80 transition-colors"
              onClick={nextSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-6 h-6 text-neutral-100" />
            </motion.button>
          </div>

          {/* Slides */}
          <AnimatePresence mode="wait">
            {services.map((service, index) => (
              activeSlide === index && (
                <div
                  key={index}
                  className="absolute inset-0 flex flex-col items-center justify-center p-8"
                >
                  {/* Icon Circle */}
                  <div className="w-24 h-24 flex items-center justify-center rounded-full bg-gradient-to-br from-neutral-800 to-neutral-700 shadow-lg mb-8">
                    {service.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-3xl font-semibold text-neutral-100 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-lg text-neutral-300 text-center max-w-2xl">
                    {service.description}
                  </p>
                </div>
              )
            ))}
          </AnimatePresence>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8 space-x-4">
          {services.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                activeSlide === index ? 'bg-primary-400' : 'bg-neutral-600'
              }`}
              onClick={() => setActiveSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;