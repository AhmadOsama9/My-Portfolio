import React from 'react';
import { Tilt } from 'react-tilt';

import { projects } from "../assets/projects";


const Project = () => {
  return (
    <section id="projects" className="section bg-n-8 h-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-200 tracking-tight sm:text-4xl mb-6">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {projects.map((project, index) => (
            <Tilt key={index} options={{ max: 45, scale: 1, speed: 450 }}>
              <div className="bg-primary rounded mb-6 border-2 border-gray-700  h-[600px] md:h-[400px] lg:h-[500px]">
                <div className="card3d-front p-6">
                  <img src={project.image} alt={project.title} />
                  <h3 className="text-2xl font-bold mb-4 text-gray-200">
                    {project.title}
                  </h3>
                  <p className="text-gray-200 mb-4">{project.technologies}</p>
                  <p className="text-gray-200 mb-4"></p>
                  <a
                    href={project.link}
                    className="text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    See Project
                  </a>
                </div>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
