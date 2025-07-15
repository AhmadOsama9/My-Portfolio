import React, { useState, useEffect, useRef } from 'react';
import { Code, Eye, Github, X, ChevronRight, ChevronLeft, ExternalLink, ImageIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  // Responsive check
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [hasImageError, setHasImageError] = useState(false);
  
  // Assuming projects have multiple images now, fallback to single image if needed
  const currentImages = selectedProject.images || [selectedProject.image];

  // Update isMobile state on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Reset image index when project changes
  useEffect(() => {
    setCurrentImageIndex(0);
    setIsImageLoaded(false);
    setHasImageError(false);
  }, [selectedProject]);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Updated to cycle through images instead of projects
  const nextImage = (e) => {
    e?.stopPropagation();
    setIsImageLoaded(false);
    setHasImageError(false);
    setCurrentImageIndex((prev) => (prev + 1) % currentImages.length);
  };

  const prevImage = (e) => {
    e?.stopPropagation();
    setIsImageLoaded(false);
    setHasImageError(false);
    setCurrentImageIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length);
  };

  const selectProject = (index) => {
    setIsImageLoaded(false);
    setHasImageError(false);
    setCurrentImageIndex(0);
    setActiveIndex(index);
    setSelectedProject(projects[index]);
  };

  // Remove handleProjectDetailsClick and isModalOpen logic
  
  const handleImageError = () => {
    setHasImageError(true);
    setIsImageLoaded(true);
  };

  return (
    <section id="projects" className="py-20 bg-neutral-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Gradient Underline */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-neutral-100 mb-4 relative inline-block">
            Featured Projects
          </h2>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto mt-4">
            Explore some of my recent work, showcasing my skills in full-stack development, 
            problem-solving, and innovative design.
          </p>
        </motion.div>

        {/* Project Selection Pills - Dropdown on mobile, pills on desktop */}
        {isMobile ? (
          <div className="mb-8">
            <select
              className="w-full px-4 py-3 rounded-lg bg-neutral-800 text-neutral-100 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-primary-400"
              value={activeIndex}
              onChange={e => selectProject(Number(e.target.value))}
              aria-label="Select Project"
            >
              {projects.map((project, index) => (
                <option key={index} value={index}>{project.title}</option>
              ))}
            </select>
          </div>
        ) : (
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {projects.map((project, index) => (
              <button 
                key={index}
                onClick={() => selectProject(index)}
                className={`px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 focus:ring-offset-neutral-900 whitespace-nowrap ${
                  activeIndex === index 
                    ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/20' 
                    : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
                }`}
              >
                {project.title}
              </button>
            ))}
          </div>
        )}

        {/* Featured Project Details */}
        <div className="bg-neutral-800 rounded-2xl shadow-xl overflow-hidden border border-neutral-700 transition-all duration-500">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedProject.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              {/* Image Section - Improved for mobile */}
              <div className="relative flex flex-col items-center bg-neutral-900">
                <div className="w-full flex justify-center items-center" style={{ minHeight: isMobile ? '180px' : '300px', maxHeight: isMobile ? '40vh' : '500px' }}>
                  {!isImageLoaded && (
                    <div className="absolute inset-0 bg-neutral-700 animate-pulse min-h-[180px] w-full"></div>
                  )}
                  {hasImageError ? (
                    <div className="h-40 flex items-center justify-center w-full bg-neutral-800">
                      <div className="text-neutral-500 text-center px-4">
                        <ImageIcon size={40} className="mx-auto mb-2 opacity-50" />
                        <p>Unable to load image</p>
                      </div>
                    </div>
                  ) : (
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={currentImageIndex}
                        src={currentImages[currentImageIndex]}
                        alt={`${selectedProject.title} - ${currentImageIndex + 1}`}
                        className={`max-w-full object-contain transition-opacity duration-500 w-full ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}
                        style={{ maxHeight: isMobile ? '40vh' : '500px', minHeight: isMobile ? '180px' : '300px' }}
                        onLoad={() => setIsImageLoaded(true)}
                        onError={handleImageError}
                        loading="lazy"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    </AnimatePresence>
                  )}
                  {/* Navigation Arrows - Modern style */}
                  {currentImages.length > 1 && (
                    <>
                      <button 
                        onClick={prevImage}
                        className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-neutral-800/70 text-white hover:bg-primary-400/80 hover:text-white shadow-md transition-all border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-primary-400"
                        aria-label="Previous image"
                        style={{ zIndex: 2 }}
                      >
                        <ChevronLeft size={18} />
                      </button>
                      <button 
                        onClick={nextImage}
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-neutral-800/70 text-white hover:bg-primary-400/80 hover:text-white shadow-md transition-all border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-primary-400"
                        aria-label="Next image"
                        style={{ zIndex: 2 }}
                      >
                        <ChevronRight size={18} />
                      </button>
                    </>
                  )}
                </div>
                {/* Technology Tags - Modern pill style below image */}
                <div className="w-full flex flex-wrap justify-center gap-2 mt-4 mb-2 px-4">
                  {selectedProject.technologies.split(', ').slice(0, 6).map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-neutral-700/80 text-xs text-primary-300 rounded-full font-medium shadow-sm border border-neutral-600"
                    >
                      {tech}
                    </span>
                  ))}
                  {selectedProject.technologies.split(', ').length > 6 && (
                    <span className="px-3 py-1 bg-neutral-700/80 text-xs text-primary-300 rounded-full font-medium shadow-sm border border-neutral-600">
                      +{selectedProject.technologies.split(', ').length - 6}
                    </span>
                  )}
                </div>
                {/* Removed Project Title and Date section below the image */}
                {/* Image Counter Badge */}
                {currentImages.length > 1 && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full text-xs text-white flex items-center gap-1.5">
                    <ImageIcon size={14} />
                    <span>{currentImageIndex + 1}/{currentImages.length}</span>
                  </div>
                )}
                {/* Image Navigation Dots */}
                {/* {currentImages.length > 1 && (
                  <div className="absolute bottom-16 left-8 flex gap-1">
                    {currentImages.map((_, index) => (
                      <button
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          currentImageIndex === index ? 'bg-white' : 'bg-white/30'
                        }`}
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsImageLoaded(false);
                          setHasImageError(false);
                          setCurrentImageIndex(index);
                        }}
                        aria-label={`Go to image ${index + 1}`}
                      ></button>
                    ))}
                  </div>
                )} */}
              </div>
              {/* Content Section */}
              <div className="p-4 sm:p-8">
                <div className="bg-neutral-700/30 p-4 rounded-xl mb-6">
                  <h4 className="text-white text-lg font-semibold mb-2">Project Overview</h4>
                  <p className="text-neutral-300 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {/* Technologies */}
                  <div className="bg-neutral-700/30 p-4 rounded-xl">
                    <h4 className="text-white text-lg font-semibold mb-4 flex items-center">
                      <Code className="w-5 h-5 mr-2 text-primary-400" />
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.split(', ').map((tech, i) => (
                        <span 
                          key={i} 
                          className="px-3 py-1 bg-neutral-800 text-sm text-primary-300 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* Links */}
                  <div className="bg-neutral-700/30 p-4 rounded-xl">
                    <h4 className="text-white text-lg font-semibold mb-4 flex items-center">
                      <ExternalLink className="w-5 h-5 mr-2 text-primary-400" />
                      Project Links
                    </h4>
                    <div className="grid grid-cols-1 gap-4">
                      {selectedProject.githubLink && (
                        <a
                          href={selectedProject.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 py-3 bg-neutral-600 hover:bg-neutral-500 rounded-lg transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github className="w-4 h-4" />
                          <span>View Source Code</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile Modal - Updated to preserve image proportions */}
        {/* Removed modal/overlay code entirely */}

      {/* Project Navigation Dots - Centered below card */}
      <div className="flex justify-center mt-6">
        {projects.map((_, index) => (
          <button
            key={index}
            className={`mx-1 w-3 h-3 rounded-full border-2 transition-all duration-300
              ${activeIndex === index
                ? 'bg-primary-400 border-primary-400 shadow-lg scale-110'
                : 'bg-transparent border-neutral-500 hover:bg-primary-300/40'}
              focus:outline-none focus:ring-2 focus:ring-primary-400`
            }
            onClick={(e) => {
              e.stopPropagation();
              selectProject(index);
            }}
            aria-label={`Go to project ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* CSS for shimmer animation */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 1.5s infinite;
        }
        `
      }} />
      {/* Hide scrollbar utility for pills row */}
      <style>{`.hide-scrollbar::-webkit-scrollbar { display: none; } .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }`}</style>
    </div> {/* This closes the container div */}
    </section>
  );
};

export default Projects;