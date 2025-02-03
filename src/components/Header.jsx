import { useWindowScroll } from "react-use";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { TiLocationArrow } from "react-icons/ti";
import { navigation } from "../data";
import { FaCode, FaLinkedin } from 'react-icons/fa';
import { X, Menu } from 'lucide-react';
import { svg_3d } from "../assets";

const NavBar = React.memo(() => {
  const navContainerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false); // Controls navigation links' visibility
  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true); // Controls navbar's visibility
  const [lastScrollY, setLastScrollY] = useState(0);

  // Debounced scroll handler to reduce re-renders
  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 50;
      if (currentScrollY > lastScrollY + scrollThreshold) {
        setIsNavVisible(false); // Hide navbar on scroll down
      } else if (currentScrollY < lastScrollY - scrollThreshold) {
        setIsNavVisible(true); // Show navbar on scroll up
      }
      setLastScrollY(currentScrollY);
    };

    const debouncedScroll = setTimeout(handleScroll, 100); // Debounce scroll event
    return () => clearTimeout(debouncedScroll);
  }, [currentScrollY, lastScrollY]);

  // Memoized toggle function to avoid unnecessary re-renders
  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev); // Toggle navigation links' visibility
  }, []);

  return (
    <nav
      ref={navContainerRef}
      className={`
        fixed top-0 left-0 w-full p-2 py-4 backdrop-blur-lg bg-primary-50/70 shadow-lg z-50 
        transition-transform duration-300 ease-in-out 
        ${isNavVisible ? "translate-y-0" : "-translate-y-full"}
        border-b border-primary-200/20
      `}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4">
        {/* Logo Section */}
        <a
          href="#hero"
          className="flex items-center gap-2"
          onClick={() => setIsOpen(false)}
        >
          <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center">
            <img src={svg_3d} alt="3D Logo" className="" />   
          </div>
          <span className="text-neutral-600 font-bold text-xl">DevByAhmed</span>
        </a>

        <a href="https://www.linkedin.com/in/ahmedosama975/" className="md:block hidden" target="_blank" rel="noopener noreferrer">
          <button>
            <span className="bg-primary-200 text-neutral-600 px-4 py-2 rounded-md font-medium hover:bg-primary-400 hover:text-neutral-100 flex items-center">
              <FaLinkedin className="mr-2" />
              LinkedIn
            </span>
          </button>
        </a>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden text-primary-400 px-4 hover:bg-primary-100 rounded-md transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle Navigation"
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
        </button>
      </div>

      {/* Navigation Links */}
      <div 
        className={`
          flex flex-col md:flex-row justify-center items-center 
          transition-all duration-300 ease-in-out overflow-hidden
          ${isOpen ? 'opacity-100 max-h-screen mt-4' : 'opacity-0 max-h-0'}
          md:opacity-100 md:max-h-full md:mt-0
        `}
      >
        {navigation.map((item, index) => (
          <a
            key={index}
            href={item.url}
            className="
              text-neutral-600 hover:text-primary-500 p-2 
              transition-colors rounded-md font-medium
            "
            onClick={toggleMenu}
          >
            {item.title}
          </a>
        ))}
      </div>
    </nav>
  );
});

export default NavBar;