import React, { useState, useEffect, useRef } from 'react';
import { Code, Eye, Github, X, ChevronRight, ChevronLeft, ExternalLink, ImageIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  const handleProjectDetailsClick = () => {
    if (isMobile) {
      setIsModalOpen(true);
    }
  };
  
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

        {/* Project Selection Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {projects.map((project, index) => (
            <button 
              key={index}
              onClick={() => selectProject(index)}
              className={`px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium ${
                activeIndex === index 
                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/20' 
                  : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
              }`}
            >
              {project.title}
            </button>
          ))}
        </div>

        {/* Featured Project Details */}
        <div className="bg-neutral-800 rounded-2xl shadow-xl overflow-hidden border border-neutral-700 transition-all duration-500">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedProject.title}-${currentImageIndex}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
              onClick={handleProjectDetailsClick}
            >
              {/* Image Section - Updated for better proportions */}
              <div className="relative h-auto md:h-auto bg-neutral-800">
                {!isImageLoaded && (
                  <div className="absolute inset-0 bg-neutral-700 animate-pulse min-h-[250px]">
                    <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
                  </div>
                )}
                
                {hasImageError ? (
                  <div className="h-64 md:h-80 flex items-center justify-center bg-neutral-800">
                    <div className="text-neutral-500 text-center px-4">
                      <ImageIcon size={40} className="mx-auto mb-2 opacity-50" />
                      <p>Unable to load image</p>
                    </div>
                  </div>
                ) : (
                  <div className="flex justify-center bg-neutral-900">
                    <img
                      src={currentImages[currentImageIndex]}
                      alt={`${selectedProject.title} - ${currentImageIndex + 1}`}
                      className={`max-w-full object-contain transition-opacity duration-500 max-h-[500px] ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}
                      onLoad={() => setIsImageLoaded(true)}
                      onError={handleImageError}
                      loading="lazy"
                    />
                  </div>
                )}
                
                {/* Semi-transparent overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none"></div>

                {/* Image Counter Badge */}
                {currentImages.length > 1 && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full text-xs text-white flex items-center gap-1.5">
                    <ImageIcon size={14} />
                    <span>{currentImageIndex + 1}/{currentImages.length}</span>
                  </div>
                )}
                
                {/* Navigation Arrows - Now for images */}
                {currentImages.length > 1 && (
                  <>
                    <div className="absolute inset-y-0 left-0 flex items-center">
                      <button 
                        onClick={prevImage}
                        className="ml-4 p-3 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
                        aria-label="Previous image"
                      >
                        <ChevronLeft size={20} />
                      </button>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center">
                      <button 
                        onClick={nextImage}
                        className="mr-4 p-3 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
                        aria-label="Next image"
                      >
                        <ChevronRight size={20} />
                      </button>
                    </div>
                  </>
                )}
                
                {/* Project Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black to-transparent pointer-events-none">
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {selectedProject.title}
                  </h3>
                  <p className="text-sm text-neutral-300">{selectedProject.date}</p>
                </div>
                
                {/* Project Navigation Indicator */}
                <div className="absolute bottom-4 right-8 flex gap-1">
                  {projects.map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        activeIndex === index ? 'w-5 bg-primary-400' : 'bg-white/50'
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        selectProject(index);
                      }}
                      aria-label={`Go to project ${index + 1}`}
                    ></button>
                  ))}
                </div>
                
                {/* Technology Tags */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2 max-w-[80%]">
                  {selectedProject.technologies.split(', ').slice(0, 4).map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-2 py-1 bg-black/60 backdrop-blur-sm text-xs text-white rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {selectedProject.technologies.split(', ').length > 4 && (
                    <span className="px-2 py-1 bg-black/60 backdrop-blur-sm text-xs text-white rounded-full">
                      +{selectedProject.technologies.split(', ').length - 4}
                    </span>
                  )}
                </div>
                
                {/* Image Navigation Dots */}
                {currentImages.length > 1 && (
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
                )}
              </div>
              
              {/* Content Section */}
              <div className="p-8">
                {/* Image Thumbnails - improved layout */}
                {currentImages.length > 1 && (
                  <div className="flex gap-2 mb-6 overflow-x-auto pb-2 snap-x">
                    {currentImages.map((img, index) => (
                      <button 
                        key={index}
                        className={`h-16 w-24 flex-shrink-0 rounded-md overflow-hidden snap-start
                          ${currentImageIndex === index ? 'ring-2 ring-primary-400' : 'opacity-70 hover:opacity-100'}
                        `}
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsImageLoaded(false);
                          setHasImageError(false);
                          setCurrentImageIndex(index);
                        }}
                      >
                        <div className="h-full w-full bg-neutral-900 flex items-center justify-center">
                          <img 
                            src={img} 
                            alt={`${selectedProject.title} thumbnail ${index + 1}`}
                            className="max-h-full max-w-full object-contain"
                            loading="lazy"
                            onError={(e) => {
                              e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>';
                              e.target.className = "w-8 h-8 text-neutral-500";
                            }}
                          />
                        </div>
                      </button>
                    ))}
                  </div>
                )}
                
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
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              <motion.div
                className="bg-neutral-800 rounded-xl shadow-2xl border border-neutral-700 max-w-md w-full max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <div className="sticky top-0 right-0 z-10 flex justify-end p-4 bg-gradient-to-b from-black/50 to-transparent">
                  <button
                    className="p-1 rounded-full bg-black/50 hover:bg-black/70"
                    onClick={closeModal}
                  >
                    <X className="w-5 h-5 text-white" />
                  </button>
                </div>

                {/* Project Image with carousel */}
                <div className="relative w-full flex justify-center items-center bg-neutral-900 p-2">
                  {!isImageLoaded && (
                    <div className="absolute inset-0 bg-neutral-700 animate-pulse min-h-[200px]">
                      <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
                    </div>
                  )}
                  
                  {hasImageError ? (
                    <div className="h-56 flex items-center justify-center">
                      <div className="text-neutral-500 text-center px-4">
                        <ImageIcon size={32} className="mx-auto mb-2 opacity-50" />
                        <p className="text-sm">Unable to load image</p>
                      </div>
                    </div>
                  ) : (
                    <img
                      src={currentImages[currentImageIndex]}
                      alt={`${selectedProject.title} - ${currentImageIndex + 1}`}
                      className={`max-w-full max-h-[350px] object-contain transition-opacity duration-300 ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}
                      onLoad={() => setIsImageLoaded(true)}
                      onError={handleImageError}
                      loading="lazy"
                    />
                  )}

                  {/* Mobile Image Navigation */}
                  {currentImages.length > 1 && (
                    <>
                      <button
                        className="absolute left-2 top-1/2 -translate-y-1/2 p-1 rounded-full bg-black/50"
                        onClick={(e) => {
                          e.stopPropagation();
                          prevImage();
                        }}
                      >
                        <ChevronLeft size={16} />
                      </button>
                      <button
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-full bg-black/50"
                        onClick={(e) => {
                          e.stopPropagation();
                          nextImage();
                        }}
                      >
                        <ChevronRight size={16} />
                      </button>
                      
                      {/* Image Counter */}
                      <div className="absolute top-2 right-2 px-2 py-1 bg-black/60 rounded-full text-xs text-white">
                        {currentImageIndex + 1}/{currentImages.length}
                      </div>
                    </>
                  )}
                </div>

                {/* Project Details */}
                <div className="p-6 relative">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {selectedProject.title}
                  </h3>
                  <p className="text-sm text-neutral-400 mb-4">
                    Completed: {selectedProject.date}
                  </p>
                  
                  {/* Mobile Thumbnails */}
                  {currentImages.length > 1 && (
                    <div className="flex gap-2 mb-6 overflow-x-auto pb-2 snap-x">
                      {currentImages.map((img, index) => (
                        <button 
                          key={index}
                          className={`h-14 w-20 flex-shrink-0 rounded-md overflow-hidden snap-start flex items-center justify-center bg-neutral-900
                            ${currentImageIndex === index ? 'ring-2 ring-primary-400' : 'opacity-70 hover:opacity-100'}
                          `}
                          onClick={() => {
                            setIsImageLoaded(false);
                            setHasImageError(false);
                            setCurrentImageIndex(index);
                          }}
                        >
                          <img 
                            src={img} 
                            alt={`${selectedProject.title} thumbnail ${index + 1}`}
                            className="max-h-full max-w-full object-contain"
                            loading="lazy"
                            onError={(e) => {
                              e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>';
                              e.target.className = "w-6 h-6 text-neutral-500";
                            }}
                          />
                        </button>
                      ))}
                    </div>
                  )}
                  
                  <p className="text-neutral-300 mb-6 leading-relaxed">
                    {selectedProject.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3 flex items-center">
                      <Code className="w-4 h-4 mr-2 text-primary-400" />
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedProject.technologies.split(', ').map((tech, i) => (
                        <span 
                          key={i} 
                          className="px-2 py-1 bg-neutral-700 text-xs text-neutral-300 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Action Button */}
                  {selectedProject.githubLink && (
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-3 bg-neutral-700 rounded-lg hover:bg-neutral-600 transition-colors w-full"
                    >
                      <Github className="w-4 h-4" />
                      <span>View Source Code</span>
                    </a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
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
    </section>
  );
};

export default Projects;