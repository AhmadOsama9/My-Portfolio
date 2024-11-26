import React from 'react';
import { Tilt } from 'react-tilt';
import { projects } from '../assets/projects';

const Project = () => {
  return (
    <section id="projects" className="section bg-n-8 h-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-200 tracking-tight sm:text-4xl mb-6">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Tilt key={index} options={{ max: 25, scale: 1.05, speed: 400 }}>
              <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden border border-gray-700">
                <div className="h-52 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover h-full w-full hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-200 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-2">
                    <strong>Technologies:</strong> {project.technologies}
                  </p>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <p className="text-gray-400 text-sm">
                    <strong>Completion Date:</strong> {project.date}
                  </p>
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
