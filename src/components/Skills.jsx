import React from 'react';
import { FaReact, FaNodeJs, FaAws, FaDocker, FaPython, FaJava } from 'react-icons/fa';
import { SiTypescript, SiPostgresql, SiMongodb, SiNestjs, SiCplusplus, SiGo, SiExpress, SiSolidity, SiGithubactions } from 'react-icons/si';
import { RiTailwindCssFill } from 'react-icons/ri';
import { motion } from 'framer-motion';

const skills = [
  { id: 1, icon: <FaReact className="w-8 h-8 text-blue-400" />, name: "React", level: 90 },
  { id: 2, icon: <FaNodeJs className="w-8 h-8 text-green-500" />, name: "Node.js", level: 90 },
  { id: 3, icon: <SiTypescript className="w-8 h-8 text-blue-500" />, name: "TypeScript", level: 70 },
  { id: 4, icon: <SiPostgresql className="w-8 h-8 text-blue-500" />, name: "PostgreSQL", level: 85 },
  { id: 5, icon: <SiMongodb className="w-8 h-8 text-green-700" />, name: "MongoDB", level: 85 },
  { id: 6, icon: <FaAws className="w-8 h-8 text-yellow-500" />, name: "AWS", level: 30 },
  { id: 7, icon: <FaDocker className="w-8 h-8 text-blue-400" />, name: "Docker", level: 75 },
  { id: 8, icon: <SiNestjs className="w-8 h-8 text-red-500" />, name: "NestJS", level: 65 },
  { id: 9, icon: <FaPython className="w-8 h-8 text-yellow-400" />, name: "Python", level: 90 },
  { id: 10, icon: <SiCplusplus className="w-8 h-8 text-blue-500" />, name: "C++", level: 70 },
  { id: 11, icon: <FaJava className="w-8 h-8 text-red-600" />, name: "Java", level: 75 },
  { id: 12, icon: <SiGo className="w-8 h-8 text-blue-500" />, name: "Go", level: 65 },
  { id: 13, icon: <SiExpress className="w-8 h-8 text-gray-500" />, name: "Express", level: 90 },
  { id: 14, icon: <SiSolidity className="w-8 h-8 text-blue-500" />, name: "Solidity", level: 80 },
  { id: 15, icon: <SiGithubactions className="w-8 h-8 text-gray-500" />, name: "GitHub Actions", level: 80 },
  { id: 16, icon: <RiTailwindCssFill className="w-8 h-8 text-blue-400" />, name: "Tailwind CSS", level: 75 },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-neutral-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-neutral-100 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
            A showcase of the technologies I’ve mastered and how I’ve applied them in my projects.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.id}
              className="bg-neutral-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-neutral-700">
                  {skill.icon}
                </div>
              </div>

              {/* Skill Name */}
              <h3 className="text-xl font-bold text-neutral-100 text-center mb-4">
                {skill.name}
              </h3>

              {/* Progress Bar */}
              <div className="w-full bg-neutral-700 rounded-full h-2">
                <motion.div
                  className="bg-primary-500 h-2 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  viewport={{ once: true, amount: 0.5 }}
                />
              </div>

              {/* Skill Level */}
              <p className="text-sm text-neutral-300 text-center mt-2">
                {skill.level}% Proficiency
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;