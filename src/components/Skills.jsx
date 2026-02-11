import React, { useState, useEffect } from 'react';
import { FaReact, FaNodeJs, FaAws, FaDocker, FaPython, FaJava, FaGitAlt, FaDatabase } from 'react-icons/fa';
import { SiTypescript, SiPostgresql, SiMongodb, SiNestjs, SiExpress, SiGithubactions, SiJavascript, SiJest, SiRedux, SiTerraform, SiPostman, SiMysql } from 'react-icons/si';
import { RiTailwindCssFill } from 'react-icons/ri';
import { motion } from 'framer-motion';
import { Tab } from '@headlessui/react';
import { useSwipeable } from 'react-swipeable';

// Group skills by category for better organization
const skillCategories = [
  {
    name: "Cloud & DevOps",
    icon: <FaAws className="text-yellow-400" />,
    description: "Designed and operated production-ready serverless systems on AWS using Lambda, API Gateway, CloudWatch, S3, and IAM. Managed infrastructure with Terraform, focusing on scalability, reliability, and cost efficiency.",
    skills: [
      { icon: <FaAws className="text-yellow-400" />, name: "AWS (API Gateway, Lambda, CloudWatch, CloudFront, Edge Lambda, S3, IAM)" },
      { icon: <SiTerraform className="text-purple-400" />, name: "Terraform" },
      { icon: <FaDocker className="text-blue-400" />, name: "Docker" },
      { icon: <SiGithubactions className="text-gray-200" />, name: "CI/CD" },
      { icon: <SiPostgresql className="text-blue-500" />, name: "File Storage" },
      { icon: <SiPostgresql className="text-blue-500" />, name: "CDN, Cloudflare, Render, Postman" },
    ]
  },
  {
    name: "Backend Engineering",
    icon: <FaPython className="text-blue-400" />,
    description: "Built and maintained backend services and APIs primarily in Python, with experience in Node.js and Express. Focused on scalability, reliability, and performance.",
    skills: [
      { icon: <FaPython className="text-blue-400" />, name: "Python" },
      { icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
      { icon: <SiExpress className="text-gray-500" />, name: "Express" },
      { icon: <SiJavascript className="text-yellow-400" />, name: "REST APIs" },
      { icon: <SiJavascript className="text-yellow-400" />, name: "GraphQL" },
    ]
  },
  {
    name: "Frontend Engineering",
    icon: <FaReact className="text-blue-400" />,
    description: "Developing modern, responsive UIs with Next.js, React, Tailwind CSS, and TypeScript.",
    skills: [
      { icon: <FaReact className="text-blue-400" />, name: "React" },
      { icon: <SiTypescript className="text-blue-600" />, name: "TypeScript" },
      { icon: <RiTailwindCssFill className="text-blue-400" />, name: "Tailwind CSS" },
      { icon: <SiJavascript className="text-yellow-400" />, name: "JavaScript" },
      { icon: <SiRedux className="text-purple-500" />, name: "Redux" },
      { icon: <SiNestjs className="text-red-500" />, name: "Next.js" },
    ]
  },
  {
    name: "SaaS & Automation",
    icon: <FaDocker className="text-blue-400" />,
    description: "Supported backend delivery using Docker, CI/CD pipelines, Infrastructure as Code, and managed platforms like Render.",
    skills: [
      { icon: <FaDocker className="text-blue-400" />, name: "Docker" },
      { icon: <SiGithubactions className="text-gray-200" />, name: "CI/CD" },
      { icon: <SiTerraform className="text-purple-400" />, name: "IaC" },
      { icon: <SiPostgresql className="text-blue-500" />, name: "Render" },
      { icon: <SiPostgresql className="text-blue-500" />, name: "Automation" },
    ]
  }
];

const levelToExpertise = (level) => {
  if (level >= 90) return { text: "Expert", color: "text-green-400" };
  if (level >= 70) return { text: "Advanced", color: "text-blue-400" };
  if (level >= 40) return { text: "Intermediate", color: "text-yellow-400" };
  return { text: "Beginner", color: "text-red-400" };
};

const skillIcons = [
  { icon: <FaPython className="text-blue-400" />, glow: 'bg-blue-300/80' },
  { icon: <FaGitAlt className="text-orange-600" />, glow: 'bg-orange-500/80' },
  { icon: <FaAws className="text-yellow-400" />, glow: 'bg-yellow-300/80' },
  { icon: <SiTerraform className="text-purple-400" />, glow: 'bg-purple-300/80' },
  { icon: <SiPostman className="text-orange-500" />, glow: 'bg-orange-400/80' },
  { icon: <SiMysql className="text-blue-500" />, glow: 'bg-blue-400/80' },
  { icon: <FaReact className="text-blue-400" />, glow: 'bg-blue-400/80' },
  { icon: <FaNodeJs className="text-green-500" />, glow: 'bg-green-400/80' },
  { icon: <FaDocker className="text-blue-400" />, glow: 'bg-blue-300/80' },
  { icon: <FaJava className="text-orange-500" />, glow: 'bg-orange-400/80' },
  { icon: <FaDatabase className="text-orange-500" />, glow: 'bg-orange-400/80' },
  { icon: <SiTypescript className="text-blue-600" />, glow: 'bg-blue-500/80' },
  { icon: <SiPostgresql className="text-blue-500" />, glow: 'bg-blue-400/80' },
  { icon: <SiMongodb className="text-green-700" />, glow: 'bg-green-500/80' },
  { icon: <SiExpress className="text-gray-500" />, glow: 'bg-gray-400/80' },
  { icon: <SiGithubactions className="text-gray-200" />, glow: 'bg-gray-300/80' },
  { icon: <SiJavascript className="text-yellow-400" />, glow: 'bg-yellow-300/80' },
  { icon: <RiTailwindCssFill className="text-blue-400" />, glow: 'bg-blue-300/80' },
];

const Skills = () => {
  const [glowStates, setGlowStates] = useState(Array(skillIcons.length).fill(false));
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-neutral-900 to-neutral-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-neutral-100 mb-4 relative inline-block">
            Skills
          </h2>
          <p className="text-base text-neutral-300 max-w-3xl mx-auto mt-4">
            A visual showcase of the technologies and tools I use to build modern, scalable solutions.
          </p>
        </motion.div>
        {/* Icon Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-8 justify-items-center">
          {skillIcons.map((item, i) => (
            <div
              key={i}
              className="relative flex items-center justify-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl cursor-pointer"
              onClick={() => {
                setGlowStates(prev => {
                  const newStates = [...prev];
                  newStates[i] = !newStates[i];
                  return newStates;
                });
              }}
            >
              {/* Glow effect toggled by click/tap */}
              <span className={`absolute inset-0 m-auto w-12 h-12 rounded-full blur-2xl transition-opacity duration-300 pointer-events-none ${item.glow} ${glowStates[i] ? 'opacity-100' : 'opacity-0'}`}></span>
              {item.icon}
            </div>
          ))}
        </div>
      </div>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10 opacity-40">
        <div className="absolute top-[10%] left-[5%] w-32 h-32 rounded-full bg-primary-600 blur-[100px]"></div>
        <div className="absolute bottom-[20%] right-[10%] w-48 h-48 rounded-full bg-blue-600 blur-[120px]"></div>
      </div>
    </section>
  );
};

export default Skills;