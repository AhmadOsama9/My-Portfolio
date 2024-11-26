import React from "react";
import { FaReact, FaNodeJs, FaDocker, FaJava, FaPython } from "react-icons/fa";
import { SiPostgresql, SiMongodb, SiTypescript, SiCplusplus, SiGo, SiNestjs, SiExpress, SiSolidity, SiGithubactions } from "react-icons/si";
import { FaAws, } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

// Updated styles with semi-3D effect
const skills = [
  { name: "React", icon: <FaReact className="semi-3d-icon text-blue-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="semi-3d-icon text-green-500" /> },
  { name: "TypeScript", icon: <SiTypescript className="semi-3d-icon text-blue-500" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="semi-3d-icon text-blue-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="semi-3d-icon text-green-700" /> },
  { name: "Docker", icon: <FaDocker className="semi-3d-icon text-blue-400" /> },
  { name: "Python", icon: <FaPython className="semi-3d-icon text-yellow-400" /> },
  { name: "C++", icon: <SiCplusplus className="semi-3d-icon text-blue-500" /> },
  { name: "Java", icon: <FaJava className="semi-3d-icon text-red-600" /> },
  { name: "Go", icon: <SiGo className="semi-3d-icon text-blue-500" /> },
  { name: "NestJS", icon: <SiNestjs className="semi-3d-icon text-red-500" /> },
  { name: "Express", icon: <SiExpress className="semi-3d-icon text-gray-500" /> },
  { name: "Solidity", icon: <SiSolidity className="semi-3d-icon text-blue-500" /> },
{ name: "GitHub Actions", icon: <SiGithubactions className="semi-3d-icon text-gray-500" /> },
{ name: "Tailwind CSS", icon: <RiTailwindCssFill className="semi-3d-icon text-blue-400" /> },
{ name: "AWS", icon: <FaAws className="semi-3d-icon text-yellow-500" /> },

];

const Skills = () => (
  <section id="skills" className="section bg-n-8 py-10 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-gray-200 tracking-tight sm:text-4xl mb-6">
        Skills
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-n-7 rounded-lg p-4 shadow-lg hover:scale-105 transition-transform"
          >
            {skill.icon}
            <p className="text-xl text-gray-300 mt-4">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
