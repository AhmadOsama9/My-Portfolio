import React from 'react';
import ComputerCanvas from '../canvas/ComputerCanvas';
import ArrowSection from './helperComponents/ArrowSection';

const Hero = () => {
  return (
    <section id="home" className="w-full h-screen bg-n-8 flex text-white">
      <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 sm:text-2xl md:text-3xl lg:text-4xl">
        
        <div className="relative w-16 h-16 sm:w-15 sm:h-15 ml-4 flex justify-center items-center ">
          <div className="absolute w-full h-full border-4 border-blue-500 rounded-full animate-ping"></div>
          <div className="absolute w-full h-full border-4 border-blue-500 rounded-full animate-pulse"></div>

          <span className="text-color-7  text-2xl font-bold py-1 ">{"</>"}</span>
        </div>

          <div className="sm:text-3xl md:text-4xl xs:text-xl">
            <h1>
              Hello, I'm <span className="text-color-7 font-bold "> Ahmed </span>
            </h1>
            <p className="mt-2">
              A MERN FullStack Developer
            </p>
          </div> 
        </div>

        <div className="w-full ">
          <ComputerCanvas />
        </div>

        
      <div className="absolute left-[50vw] bottom-0">
        <ArrowSection />
      </div>
    </section>
  );
}

export default Hero;
