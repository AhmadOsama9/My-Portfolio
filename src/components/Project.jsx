import React, { useState, useEffect } from 'react';
import { Code, Eye, Github, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  // Update isMobile state on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    if (isMobile) {
      setIsModalOpen(true); // Open modal only on mobile
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="projects" className="py-20 bg-neutral-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-neutral-100 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
            Explore some of my recent work, showcasing my skills in full-stack development, problem-solving, and innovative design.
          </p>
        </motion.div>

        {/* Split-Screen Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side: Project List */}
          <div className="space-y-4">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-2xl shadow-lg border border-neutral-700 cursor-pointer transition-colors ${
                  selectedProject.id === project.id
                    ? 'bg-neutral-700 border-neutral-500'
                    : 'bg-neutral-800 hover:bg-neutral-700'
                }`}
                onClick={() => handleProjectClick(project)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <Code className="w-8 h-8 text-primary-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-100">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Side: Project Details (Desktop) */}
          <div className="hidden lg:block bg-neutral-800 p-8 rounded-2xl shadow-lg border border-neutral-700">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedProject.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Project Image */}
                <div className="h-60 overflow-hidden rounded-t-2xl mb-6">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Project Details */}
                <h3 className="text-2xl font-bold text-neutral-100 mb-2">
                  {selectedProject.title}
                </h3>
                <p className="text-neutral-300 mb-4">
                  {selectedProject.description}
                </p>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <Code className="w-5 h-5 text-neutral-400" />
                    <span className="text-neutral-400">
                      {selectedProject.technologies}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <a
                      href={selectedProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-400 hover:text-neutral-100 transition-colors"
                    >
                      <Eye className="w-6 h-6" />
                    </a>
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-400 hover:text-neutral-100 transition-colors"
                    >
                      <Github className="w-6 h-6" />
                    </a>
                  </div>
                </div>
                <p className="text-neutral-400 text-sm">
                  <strong>Completion Date:</strong> {selectedProject.date}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Modal for Mobile Details */}
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              <motion.div
                className="bg-neutral-800 p-8 rounded-2xl shadow-lg border border-neutral-700 max-w-md w-full relative"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
              >
                {/* Close Button */}
                <button
                  className="absolute top-4 right-0 px-1 rounded-full hover:bg-neutral-700 transition-colors"
                  onClick={closeModal}
                >
                  <X className="w-6 h-6 text-neutral-300" />
                </button>

                {/* Project Details */}
                <div className="h-60 overflow-hidden rounded-t-2xl mb-6">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-neutral-100 mb-2">
                  {selectedProject.title}
                </h3>
                <p className="text-neutral-300 mb-4">
                  {selectedProject.description}
                </p>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <Code className="w-5 h-5 text-neutral-400" />
                    <span className="text-neutral-400">
                      {selectedProject.technologies}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <a
                      href={selectedProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-400 hover:text-neutral-100 transition-colors"
                    >
                      <Eye className="w-6 h-6" />
                    </a>
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-400 hover:text-neutral-100 transition-colors"
                    >
                      <Github className="w-6 h-6" />
                    </a>
                  </div>
                </div>
                <p className="text-neutral-400 text-sm">
                  <strong>Completion Date:</strong> {selectedProject.date}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;


// here the card are not responsive and become bigger than the screen
// for the small sizes for some cards