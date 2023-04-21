import React from 'react';
import { Tilt } from "react-tilt";


const About = () => {
  return (
    <section id="about" className="section bg-primary h-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-200 tracking-tight sm:text-4xl mb-6">
          About Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <Tilt options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}>
            <div className="card3d bg-gray-200 rounded mb-6">
              <div className="card3d-front p-6">
                <h3 className="text-2xl font-bold mb-4">Front-End</h3>
                <p className="text-gray-600">
                  I've written a lot of websites, as you can see in My Project<br />
                  have a little knowledge in Back-End<br />
                  So I know a little about the backend.
                  <br />I've also written Web Apps using React
                </p>
              </div>
            </div>
          </Tilt>
      
          <Tilt options={{
            max: 45,
            scale: 1,
            speed: 500,
          }}>
            <div className="card3d bg-gray-200 rounded mb-6">
              <div className="card3d-front p-6">
                <h3 className="text-2xl font-bold mb-4">Multi-Programming Languages</h3>
                <p className="text-gray-600">
                  My main language is C++ and Java<br />
                  Also Write in PYTHON, HTML, CSS, JAVASCRIPT.
                </p>
              </div>
            </div>
          </Tilt>

          <Tilt options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}>
            <div className="card3d bg-gray-200 rounded mb-6">
              <div className="card3d-front p-6">
                <h3 className="text-2xl font-bold mb-4">Problem Solving</h3>
                <p className="text-gray-600">I've solved more than 300 Questions on Leetcode</p>
              </div>
            </div>
          </Tilt>

        </div>
      </div>
    </section>
  );
};

export default About;
