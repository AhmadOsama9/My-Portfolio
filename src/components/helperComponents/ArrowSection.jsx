import React from 'react';
import { Link } from 'react-scroll';

const ArrowSection = () => {
  return (
    <div className="flex items-center justify-center h-20">
      <div className="flex flex-col items-center">
        <p className="text-gray-400 text-sm mb-2">Scroll Down</p>
        <Link to="about" smooth={true} duration={500}>
          <div className="bg-gray-400 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer animate-bounce">
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ArrowSection;
