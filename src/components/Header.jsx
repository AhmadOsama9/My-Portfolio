import { useWindowScroll } from "react-use";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { navigation } from "../data";
import { FaLinkedin } from 'react-icons/fa';
import { X, Menu, Code } from 'lucide-react';
import { svg_3d } from "../assets";
import { motion } from "framer-motion";

const NavBar = React.memo(() => {
  const navContainerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Debounced scroll handler
  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 50;
      if (currentScrollY > lastScrollY + scrollThreshold) {
        setIsNavVisible(false);
      } else if (currentScrollY < lastScrollY - scrollThreshold) {
        setIsNavVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    const debouncedScroll = setTimeout(handleScroll, 100);
    return () => clearTimeout(debouncedScroll);
  }, [currentScrollY, lastScrollY]);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <nav
      ref={navContainerRef}
      className={`
        fixed top-0 left-0 w-full p-2 py-4 backdrop-blur-lg bg-neutral-900/80 shadow-lg z-50 
        transition-transform duration-300 ease-in-out 
        ${isNavVisible ? "translate-y-0" : "-translate-y-full"}
        border-b border-primary-500/20
      `}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4">
        {/* Enhanced Logo Section */}
        <motion.a
          href="#hero"
          className="flex items-center gap-3"
          onClick={() => setIsOpen(false)}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div className="relative w-10 h-10 bg-gradient-to-r from-primary-500 to-blue-600 rounded-lg flex items-center justify-center overflow-hidden shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-blue-600 opacity-80"></div>
            <Code className="w-6 h-6 text-white relative z-10" />
          </div>
          <div className="flex flex-col">
            <span className="text-white font-bold text-xl tracking-tight">Ahmed<span className="text-primary-400">Dev</span></span>
            <span className="text-xs text-neutral-400 -mt-1 font-medium">Full-Stack Engineer</span>
          </div>
        </motion.a>

        {/* Enhanced LinkedIn Button */}
        <motion.a 
          href="https://www.linkedin.com/in/ahmedosama975/" 
          className="md:block hidden" 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-5 py-2 rounded-md font-medium hover:from-blue-700 hover:to-blue-800 transition-all shadow-md">
            <span className="flex items-center">
              <FaLinkedin className="mr-2" />
              LinkedIn
            </span>
          </button>
        </motion.a>

        {/* Mobile Menu Toggle Button */}
        <motion.button
          className="md:hidden text-primary-400 p-2 hover:bg-neutral-800 rounded-md transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle Navigation"
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? (
            <X 
              className="w-6 h-6 text-primary-400 stroke-current" 
              strokeWidth={2} 
            />
          ) : (
            <Menu 
              className="w-6 h-6 text-primary-400 stroke-current" 
              strokeWidth={2} 
            />
          )}
        </motion.button>
      </div>

      {/* Navigation Links with Enhanced Styling */}
      <div 
        className={`
          flex flex-col md:flex-row justify-center items-center gap-1 md:gap-2
          transition-all duration-300 ease-in-out overflow-hidden
          ${isOpen ? 'opacity-100 max-h-screen mt-4' : 'opacity-0 max-h-0'}
          md:opacity-100 md:max-h-full md:mt-0
        `}
      >
        {navigation.map((item, index) => (
          <motion.a
            key={index}
            href={item.url}
            className="
              text-neutral-300 hover:text-primary-400 p-2 
              transition-colors rounded-md font-medium
              relative overflow-hidden group
            "
            onClick={toggleMenu}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">{item.title}</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-400 group-hover:w-full transition-all duration-300"></span>
          </motion.a>
        ))}
      </div>
    </nav>
  );
});

export default NavBar;