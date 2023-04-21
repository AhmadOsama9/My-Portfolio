import React from 'react';
import ComputerCanvas from '../canvas/ComputerCanvas';
import ArrowSection from './ArrowSection';

const Hero = () => {
  return (
      <section id="home" className="w-full h-screen bg-primary flex text-white">
        <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5
        sm:text-2xl md:text-3xl lg:text-4xl ">

        <div className="relative w-16 h-16 sm:w-12 sm:h-12 ml-2 flex justify-center">
          <div className="absolute w-full h-full border-4 border-indigo-500 rounded-full animate-ping"></div>
          <div className="absolute w-full h-full border-4 border-indigo-500 rounded-full animate-pulse"></div>
          <span className="text-fuchsia-700 text-2xl font-bold py-1 ">{"</>"}</span>
        </div>



          <div className="sm:text-3xl md:text-4xl">
            <h1>
              Hello, I'm <span className="text-fuchsia-800"> Ahmed </span>
            </h1>
            <p className="mt-2">
              A Computer Science Student
            </p>
          </div> 
        </div>

        <div className="sm:w-full ">
          <ComputerCanvas />
        </div>

        <div className="absolute left-[50vw] bottom-0">
          <ArrowSection />
        </div>

      </section>
  )
}

export default Hero;
