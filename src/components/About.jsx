import { useState, useEffect, useRef } from 'react';
import { Tilt } from "react-tilt";
import '../CSS/About.css';

const About = () => {
  const [isHovered, setIsHovered] = useState(false);
  const aboutRef = useRef(null);

  const handleIntersection = (entries) => {
    const isInViewPort = entries[0].isIntersecting;
    setIsHovered(isInViewPort);
  };

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
    };
  }, [aboutRef]);

  return (
    <section
      id="about"
      ref={aboutRef}
      className={`about section bg-n-8 h-full ${isHovered ? 'hovered' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xl sm:text-sm md:text-lg lg:text-xl xl:text-2xl">
        <h2 className="text-3xl font-extrabold text-n-1 tracking-tight sm:text-4xl mb-6">
          About Me
        </h2>

        <p className="text-gray-300 text-base leading-relaxed max-w-3xl text-xl sm:text-sm md:text-lg lg:text-xl xl:text-2xl">
          I am a <span className="text-color-7 font-semibold">Full-Stack Developer</span> and 
          <span className="text-color-7 font-semibold"> Software Engineer</span> specializing in web development. 
          With expertise in multiple programming languages like 
          <span className="text-blue-400 font-medium"> C++, Python, JavaScript, TypeScript,</span> and 
          <span className="text-blue-400 font-medium"> Go</span>, I have built efficient, scalable, and innovative solutions 
          using frameworks such as <span className="text-blue-400 font-medium">React, Node.js, Express.js, Nest.js, PostgreSQL,</span> and 
          <span className="text-blue-400 font-medium"> MongoDB</span>. My focus is on creating seamless user experiences 
          and solving complex problems efficiently for scalable web applications.
        </p>

        <p className="text-gray-300 text-base leading-relaxed max-w-3xl mt-4 text-xl sm:text-sm md:text-lg lg:text-xl xl:text-2xl">
          I am committed to delivering high-quality, well-optimized solutions for modern web applications, ensuring that 
          clients' needs are met with precision. My problem-solving skills, honed through competitive programming and real-world experience, 
          help me tackle challenges efficiently, driving success for both clients and users.
        </p>

        <p className="text-gray-300 text-base leading-relaxed max-w-3xl mt-4 text-xl sm:text-sm md:text-lg lg:text-xl xl:text-2xl">
          You can view my resume <a href="https://drive.google.com/file/d/1YWmNin1ZNw2R1EzuZVuCbYDQ79IMoce5/view?usp=sharing" className="text-blue-400 underline" target="_blank">here</a>.
        </p>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-6">
          
          {/* Full-Stack Web Development Card */}
          <Tilt options={{ max: 45, scale: 1, speed: 450 }}>
            <div className="card3d rounded mb-6 h-[300px] md:h-[450px] lg:h-[400px]">
              <div className="card3d-front p-6">
                <h3 className="text-2xl font-bold mb-4">Full-Stack Web Development</h3>
                <p className="text-xl sm:text-sm md:text-lg lg:text-xl xl:text-2xl">
                  I specialize in building complete web applications from front-end to back-end, 
                  using technologies like <span className="text-blue-400">React, Node.js, Express,</span> and 
                  <span className="text-blue-400"> PostgreSQL</span>. My goal is to create seamless, user-friendly experiences 
                  with scalable back-end systems.
                </p>
              </div>
            </div>
          </Tilt>
      
          {/* Efficient Problem Solving Card */}
          <Tilt options={{ max: 45, scale: 1, speed: 500 }}>
            <div className="card3d rounded mb-6 h-[300px] md:h-[450px] lg:h-[400px]">
              <div className="card3d-front p-6">
                <h3 className="text-2xl font-bold mb-4">Efficient Problem Solving</h3>
                <p className="text-xl sm:text-sm md:text-lg lg:text-xl xl:text-2xl">
                  Solving complex problems efficiently is my strength. With over 300 problems solved on 
                  <span className="text-blue-400"> LeetCode</span> and experience in algorithm design, I apply 
                  these skills to optimize solutions for web and back-end challenges.
                </p>
              </div>
            </div>
          </Tilt>

          {/* Scalable Solutions Card */}
          <Tilt options={{ max: 45, scale: 1, speed: 450 }}>
            <div className="card3d rounded mb-6 h-[300px] md:h-[450px] lg:h-[400px]">
              <div className="card3d-front p-6">
                <h3 className="text-2xl font-bold mb-4">Scalable & Optimized Solutions</h3>
                <p className="text-xl sm:text-sm md:text-lg lg:text-xl xl:text-2xl">
                  My focus is on developing scalable solutions that meet business needs. I use modern tools and 
                  frameworks to ensure both scalability and maintainability, whether it’s for cloud deployments 
                  using <span className="text-blue-400">AWS</span> or containerization with <span className="text-blue-400">Docker</span>.
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
