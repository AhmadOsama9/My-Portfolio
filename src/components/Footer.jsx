import React from 'react';
import { motion } from 'framer-motion';
import { navigation } from '../data';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import { HiArrowUp } from 'react-icons/hi';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative bg-gradient-to-t from-neutral-950 to-neutral-900 pt-16 pb-8">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 left-1/4 w-64 h-64 bg-primary-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-32 right-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-[120px]"></div>
      </div>

      {/* Scroll to top button */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.button
          onClick={scrollToTop}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-blue-600 text-white shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/40 transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Scroll to top"
        >
          <HiArrowUp size={20} />
        </motion.button>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* About Section */}
          <div className="md:col-span-5">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4">Ahmed Osama</h3>
            <p className="text-sm sm:text-base md:text-lg text-neutral-400 mb-6 leading-relaxed">
              A passionate full-stack developer focused on creating intuitive, responsive, and scalable web applications
              with modern technologies and best practices.
            </p>
            
            <div className="flex space-x-4 mb-8">
              <a
                href="https://www.linkedin.com/in/ahmedosama975/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-neutral-800 hover:bg-neutral-700 rounded-full text-neutral-300 hover:text-white transition-colors"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href="https://github.com/AhmadOsama9"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-neutral-800 hover:bg-neutral-700 rounded-full text-neutral-300 hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="mailto:ahmedosama.dev@outlook.com"
                className="p-3 bg-neutral-800 hover:bg-neutral-700 rounded-full text-neutral-300 hover:text-white transition-colors"
                aria-label="Email Me"
              >
                <FaEnvelope size={18} />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="text-base sm:text-lg md:text-xl font-bold text-white border-b border-neutral-800 pb-2 mb-4">
              Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-2">
              {navigation.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.url}
                    className="inline-block py-1.5 text-xs sm:text-sm md:text-base text-neutral-400 hover:text-primary-400 transition-colors"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="md:col-span-4">
            <h4 className="text-base sm:text-lg md:text-xl font-bold text-white border-b border-neutral-800 pb-2 mb-4">
              Contact Information
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-xs sm:text-sm md:text-base text-neutral-400">
                <div className="p-2 bg-neutral-800 rounded-lg">
                  <FaEnvelope className="text-primary-400" />
                </div>
                <a
                  href="mailto:ahmedosama.dev@outlook.com"
                  className="hover:text-primary-400 transition-colors"
                >
                  ahmedosama.dev@outlook.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-xs sm:text-sm md:text-base text-neutral-400">
                <div className="p-2 bg-neutral-800 rounded-lg">
                  <FaPhone className="text-primary-400" />
                </div>
                <a href="tel:+201022866424" className="hover:text-primary-400 transition-colors">
                  +20 1022-866-424
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent my-8"></div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 text-neutral-500 text-xs sm:text-sm md:text-base">
          <p className="text-xs sm:text-sm md:text-base">
            &copy; {new Date().getFullYear()} Ahmed Osama. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-xs sm:text-sm md:text-base">
            <span>Made</span> 
            <span>using React & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;