import React from 'react';
import { Tilt } from "react-tilt";


import '../CSS/About.css';

const About = () => {
  return (
    <section id="about" className="about section bg-primary h-full">
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
            <div className="card3d rounded mb-6 h-[200px] md:h-[300px]">
              <div className="card3d-front p-6">
                <h3 className="text-2xl font-bold mb-4"><span>Front-End</span></h3>
                <p className="text-gray-900 text-xl">
                  <span>I've written</span><span> a lot of front-end projects.</span>
                  <span>starts with vanilla css</span> <span>and js to react and tailwind.</span>
                </p>
              </div>
            </div>
          </Tilt>
      
          <Tilt options={{
            max: 45,
            scale: 1,
            speed: 500,
          }}>
            <div className="card3d rounded mb-6 h-[200px] md:h-[300px]">
              <div className="card3d-front p-6">
                <h3 className="text-2xl font-bold mb-4"><span>Multi-Programming</span> <span>Languages</span></h3>
                <p>
                  <span>My main language</span> <span>is C++ and Java</span><br />
                  <span>Also Write in PYTHON</span><span>, JAVASCRIPT.</span>
                </p>
              </div>
            </div>
          </Tilt>

          <Tilt options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}>
            <div className="card3d rounded mb-6 h-[200px] md:h-[300px]">
              <div className="card3d-front p-6">
                <h3 className="text-2xl font-bold mb-4"><span>Problem Solving</span></h3>
                <p><span>I've</span> <span>solved</span> <span>more than 300</span> <span>Questions on Leetcode.</span></p>
              </div>
            </div>
          </Tilt>

        </div>
      </div>
    </section>
  );
};

export default About;
