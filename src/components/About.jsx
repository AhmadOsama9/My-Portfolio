import { useState, useEffect, useRef } from 'react';
import { Tilt } from "react-tilt";

import '../CSS/About.css';


const About = () => {

  const [isHovered, setIsHovered] = useState(false);
  const aboutRef = useRef(null);

  const handleIntersection = (entries) => {
    const isInViewPort = entries[0].isIntersecting;

    setIsHovered(isInViewPort);
  }

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      threshold: 0.2,
    });

    if (aboutRef.current) 
      observer.observe(aboutRef.current);

    return () => {
      if (aboutRef.current) 
        observer.unobserve(aboutRef.current);
    }

  }, [aboutRef]);

  return (
    <section
      id="about"
      ref={aboutRef}
      className={`about section bg-primary h-full ${isHovered ? 'hovered' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-n-1 tracking-tight sm:text-4xl mb-6">
          About Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <Tilt options={{ max: 45, scale: 1, speed: 450 }}>
            <div className="card3d rounded mb-6 h-[250px] md:h-[400px] lg:h-[320px]">
              <div className="card3d-front p-6">
                <h3 className="text-2xl font-bold mb-4"><span>Full-Stack Development</span></h3>
                <p className="text-xl sm:text-sm md:text-lg lg:text-xl xl:text-2xl">
                  <span>Experienced full-stack developer</span><span> with a passion for creating robust applications.</span>
                  <span>Specializing in the MERN stack (MongoDB, Express.js, React, Node.js).</span>
                </p>
              </div>
            </div>
          </Tilt>
      
          <Tilt options={{ max: 45, scale: 1, speed: 500 }}>
            <div className="card3d rounded mb-6 h-[250px] md:h-[400px] lg:h-[320px]">
              <div className="card3d-front p-6">
                <h3 className="text-2xl font-bold mb-4"><span>Multi-Programming</span> <span>Languages</span></h3>
                <p className="text-xl sm:text-sm md:text-lg lg:text-xl xl:text-2xl">
                  <span>Proficient in various programming languages</span><span> including C++, Java, Python, and JavaScript.</span>
                </p>
              </div>
            </div>
          </Tilt>

          <Tilt options={{ max: 45, scale: 1, speed: 450 }}>
            <div className="card3d rounded mb-6 h-[250px] md:h-[400px] lg:h-[320px]">
              <div className="card3d-front p-6">
                <h3 className="text-2xl font-bold mb-4"><span>Problem Solving</span></h3>
                <p className="text-xl sm:text-sm md:text-lg lg:text-xl xl:text-2xl">
                  <span>Dedicated problem solver</span><span> with a track record of solving over 300 problems on LeetCode.</span>
                </p>
              </div>
            </div>
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
