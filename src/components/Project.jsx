import React from 'react';
import { Tilt } from 'react-tilt';

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
            <div className="card3d bg-primary rounded mb-6 border-2">
              <div className="card3d-front p-6">
                <img src="../public/webpage1.png" alt="Summarized Image" />
                <h3 className="text-2xl font-bold mb-4">Summarized</h3>
                <p className="text-gray-200 mb-4">Technologies: HTML, Vanilla CSS, Vanilla JS</p>
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
            <div className="card3d bg-primary rounded mb-6 border-2">
              <div className="card3d-front p-6">
                <img src="../public/SimpleReactApps.png" alt="SimpleReactApps" />
                <h3 className="text-2xl font-bold mb-4">Simple React Apps</h3>
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
            <div className="card3d bg-primary rounded mb-6 border-2">
              <div className="card3d-front p-6">
                <img src="../public/WebGames_ver2.png" alt="WebGames"/>
                <h3 className="text-2xl font-bold mb-4">Simple Vanilla JS</h3>
                <p className="text-gray-200 mb-4">Technologies: HMTL, Vanilla JS, Vanilla CSS</p>
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
            <div className="card3d bg-primary rounded mb-6 border-2">
              <div className="card3d-front p-6">
                <img src="../public/2D_Portfolio.png" alt="WebGames"/>
                <h3 className="text-2xl font-bold mb-4">My 2D portfolio</h3>
                <p className="text-gray-200 mb-4">Technologies: HMTL, Vanilla JS, Vanilla CSS</p>
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
