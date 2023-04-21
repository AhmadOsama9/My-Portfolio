import React from 'react';
import ComputerCanvas from '../canvas/ComputerCanvas';
import ArrowSection from './ArrowSection';

const Hero = () => {
  return (
      <section id="home" className="w-full h-screen bg-primary flex text-white">
        <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5
        sm:text-2xl md:text-3xl lg:text-4xl ">

        <div className="relative w-16 h-16 sm:w-20 sm:h-20 ml-2">
          <div className="absolute w-full h-full border-4 border-indigo-500 rounded-full animate-ping"></div>
          <div className="absolute w-full h-full border-4 border-indigo-500 rounded-full animate-pulse"></div>
          <img src="../public/code.svg" className="bg-fuchsia-700 rounded absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8" alt="Code Icon" />
        </div>

          <div className="text-3xl">
            <h1>
              Hello, I'm <span className="text-fuchsia-800"> Ahmed </span>
            </h1>
            <p className="mt-2">
              A Computer Science Student
            </p>
          </div> 
        </div>

        <ComputerCanvas />

        <div className="absolute left-[50vw] bottom-0">
          <ArrowSection />
        </div>

      </section>
  )
}

export default Hero;
