import React from 'react';
import { Tilt } from 'react-tilt';
import { summarized, WebGames, normalPortfolio, reactApps } from '../assets';

const Project = () => {
  return (
    <section id="projects" className="section bg-primary h-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-200 tracking-tight sm:text-4xl mb-6">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <Tilt options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}>
            <div className="bg-primary rounded mb-6 border-gray-700 border-2  h-[600px] md:h-[400px] lg:h-[500px]">
              <div className="card3d-front p-6">
                <img src={summarized} alt="Summarized Image" />
                <h3 className="text-2xl font-bold mb-4 white-gray-200">Summarized</h3>
                <p className="text-gray-200 mb-4">Technologies: HTML, CSS, Vanilla JS</p>
                <p className="text-gray-200 mb-4">Syntax Summary of some Languages</p>
                <a href="https://ahmadosama9.github.io/summarized/HTML/" className="text-blue-600 hover:text-blue-800 font-semibold">See Project</a>
              </div>
            </div>
          </Tilt>
          <Tilt options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}>
            <div className="bg-primary rounded mb-6 border-2 border-gray-700  h-[600px] md:h-[400px] lg:h-[500px]">
              <div className="card3d-front p-6">
              <img src={reactApps} alt="Summarized Image" />
                
                <h3 className="text-2xl font-bold mb-4 wihte-gray-200">Simple React Apps</h3>
                <p className="text-gray-200 mb-4">Technologies: React, Pico CSS</p>
                <p className="text-gray-200 mb-4"></p>
                <a href="https://ahmadosama9.github.io/SimpleReactApps/" className="text-blue-600 hover:text-blue-800 font-semibold">See Project</a>
              </div>
            </div>
          </Tilt>
          <Tilt options={{
            max: 45,
            scale: 1,
            speed: 500,
          }}>
            <div className="bg-primary rounded mb-6 border-2 border-gray-700  h-[600px] md:h-[400px] lg:h-[500px]">
              <div className="card3d-front p-6">
                <img src={WebGames} alt="WebGames"/>
                <h3 className="text-2xl font-bold mb-4 white-gray-200">Simple Vanilla JS</h3>
                <p className="text-gray-200 mb-4">Technologies: HTML, Vanilla JS, CSS</p>
                <p className="text-gray-200 mb-4">Web Games</p>
                <a href="https://ahmadosama9.github.io/WebGames/" className="text-blue-600 hover:text-blue-800 font-semibold">See Project</a>
              </div>
            </div>
          </Tilt>
          <Tilt options={{
            max: 45,
            scale: 1,
            speed: 500,
          }}>
            <div className="bg-primary rounded mb-6 border-2 border-gray-700  h-[600px] md:h-[400px] lg:h-[500px]">
              <div className="card3d-front p-6">
                <img src={normalPortfolio} alt="WebGames"/>
                <h3 className="text-2xl font-bold mb-4 text-gray-200">My 2D portfolio</h3>
                <p className="text-gray-200 mb-4">Technologies: HTML, Vanilla JS, Vanilla CSS</p>
                <p className="text-gray-200 mb-4"></p>
                <a href="https://ahmadosama9.github.io/Portfolio/" className="text-blue-600 hover:text-blue-800 font-semibold">See Project</a>
              </div>
            </div>
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default Project;
