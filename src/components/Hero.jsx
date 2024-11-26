import React from 'react';
import ComputerCanvas from '../canvas/ComputerCanvas';
import ArrowSection from './helperComponents/ArrowSection';
import { CodeBracketIcon } from '@heroicons/react/24/outline';

const Hero = () => {
  return (
    <section id="home" className="w-full h-screen bg-n-8 flex text-white relative">
      <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 sm:text-2xl md:text-3xl lg:text-4xl px-4">
        
        {/* Icon Section */}
        <div className="relative flex justify-center items-center">
          <CodeBracketIcon className="w-16 h-16 text-color-7 animate-bounce" />
        </div>

        {/* Introduction */}
        <div className="sm:text-3xl md:text-4xl xs:text-xl">
          <h1 className="leading-snug">
            I'm <span className="text-color-7 font-bold">Ahmed Osama</span>
          </h1>
          <p className="mt-2">
            A <span className="text-color-7 font-bold">Full-Stack Developer</span> and  
            <span className="text-color-7 font-bold"> Software Engineer</span> and
            <span className="text-color-7 font-bold"> Computer Science Student</span> at Cairo University (2021-2025).
          </p>
        </div>
      </div>

      {/* 3D Canvas */}
      <div className="w-full">
        <ComputerCanvas />
      </div>

      {/* Arrow Section */}
      <div className="absolute left-[50vw] bottom-0">
        <ArrowSection />
      </div>
    </section>
  );
};

export default Hero;
