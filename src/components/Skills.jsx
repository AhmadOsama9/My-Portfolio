import React, { useState } from 'react';
import { FaReact, FaNodeJs, FaAws, FaDocker, FaPython, FaJava, FaGitAlt, FaDatabase } from 'react-icons/fa';
import { SiTypescript, SiPostgresql, SiMongodb, SiNestjs, SiExpress, SiGithubactions, SiJavascript, SiJest, SiRedux, SiTerraform } from 'react-icons/si';
import { RiTailwindCssFill } from 'react-icons/ri';
import { motion } from 'framer-motion';
import { Tab } from '@headlessui/react';

// Group skills by category for better organization
const skillCategories = [
  {
    name: "Frontend",
    skills: [
      { icon: <FaReact className="text-blue-400" />, name: "React", level: 90, description: "Component architecture, hooks, context API" },
      { icon: <SiRedux className="text-purple-500" />, name: "Redux", level: 85, description: "State management, middleware, Redux Toolkit" },
      { icon: <SiTypescript className="text-blue-600" />, name: "TypeScript", level: 70, description: "Type safety, interfaces, generics" },
      { icon: <RiTailwindCssFill className="text-blue-400" />, name: "Tailwind CSS", level: 75, description: "Utility-first styling, responsive design" },
      { icon: <SiJavascript className="text-yellow-400" />, name: "JavaScript", level: 95, description: "ES6+, async/await, closures" },
    ]
  },
  {
    name: "Backend",
    skills: [
      { icon: <FaNodeJs className="text-green-500" />, name: "Node.js", level: 90, description: "Server-side JavaScript, event-driven architecture" },
      { icon: <SiExpress className="text-gray-500" />, name: "Express", level: 90, description: "REST APIs, middleware, routing" },
      { icon: <SiNestjs className="text-red-500" />, name: "NestJS", level: 80, description: "Module system, dependency injection" },
    ]
  },
  {
    name: "Databases",
    skills: [
      { icon: <SiPostgresql className="text-blue-500" />, name: "PostgreSQL", level: 85, description: "Relational database, complex queries, indexing" },
      { icon: <SiMongodb className="text-green-700" />, name: "MongoDB", level: 85, description: "NoSQL, document model, aggregation pipelines" },
      { icon: <FaDatabase className="text-orange-500" />, name: "Redis", level: 70, description: "In-memory data structure store, caching" },
    ]
  },
  {
    name: "DevOps",
    skills: [
      { icon: <FaDocker className="text-blue-400" />, name: "Docker", level: 75, description: "Containerization, Docker Compose" },
      { icon: <FaAws className="text-yellow-500" />, name: "AWS", level: 75, description: "Api gateway, S3, Lambda, DynamoDB" },
      { icon: <SiTerraform className="text-purple-400" />, name: "Terraform", level: 75, description: "Infrastructure as code, cloud provisioning" },
      { icon: <SiGithubactions className="text-gray-200" />, name: "CI/CD", level: 80, description: "Automated testing, deployment pipelines" },
      { icon: <FaGitAlt className="text-orange-600" />, name: "Git", level: 90, description: "Version control, branching strategies" },
      { icon: <SiJest className="text-red-600" />, name: "Testing", level: 75, description: "Unit testing, integration testing" },
    ]
  }
];

const levelToExpertise = (level) => {
  if (level >= 90) return { text: "Expert", color: "text-green-400" };
  if (level >= 70) return { text: "Advanced", color: "text-blue-400" };
  if (level >= 40) return { text: "Intermediate", color: "text-yellow-400" };
  return { text: "Beginner", color: "text-red-400" };
};

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

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
          <h2 className="text-4xl font-bold text-neutral-100 mb-4 relative inline-block">
            Technical Expertise
            <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-400 to-blue-500 rounded-full"></span>
          </h2>
          <p className="text-lg text-neutral-300 max-w-3xl mx-auto mt-4">
            My toolkit of technologies and frameworks I've mastered through years of building 
            robust applications and solving complex problems.
          </p>
        </motion.div>

        {/* Tab Categories */}
        <Tab.Group>
          <Tab.List className="flex space-x-2 rounded-xl bg-neutral-800/50 p-1 mb-12 max-w-3xl mx-auto">
            {skillCategories.map((category) => (
              <Tab
                key={category.name}
                className={({ selected }) =>
                  `w-full rounded-lg py-3 text-sm font-medium leading-5 transition-all duration-300 
                  ${
                    selected
                      ? "bg-primary-500 text-white shadow"
                      : "text-neutral-300 hover:bg-neutral-700/30 hover:text-white"
                  }`
                }
              >
                {category.name}
              </Tab>
            ))}
          </Tab.List>
          
          <Tab.Panels>
            {skillCategories.map((category, idx) => (
              <Tab.Panel key={idx}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.skills.map((skill, index) => {
                    const expertise = levelToExpertise(skill.level);
                    return (
                      <motion.div
                        key={skill.name}
                        className="relative bg-neutral-800 rounded-xl overflow-hidden border border-neutral-700 hover:border-primary-500/50 group"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        onMouseEnter={() => setHoveredSkill(skill.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                      >
                        {/* Glowing effect on hover */}
                        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        
                        <div className="p-6 relative z-10">
                          {/* Icon and Name */}
                          <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-neutral-700/50 text-2xl">
                              {skill.icon}
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-white">{skill.name}</h3>
                              <p className={`text-sm ${expertise.color}`}>
                                {expertise.text}
                              </p>
                            </div>
                          </div>
                          
                          {/* Description */}
                          <p className="text-neutral-400 text-sm mb-4">
                            {skill.description}
                          </p>
                          
                          {/* Progress Bar */}
                          <div className="h-1.5 w-full bg-neutral-700 rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-gradient-to-r from-primary-500 to-blue-500"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: index * 0.1 }}
                              viewport={{ once: true }}
                            />
                          </div>
                          <div className="flex justify-between mt-2 text-xs text-neutral-500">
                            <span>Proficiency</span>
                            <span>{skill.level}%</span>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
        
        {/* Skills Overview */}
        <motion.div 
          className="mt-20 bg-neutral-800/50 rounded-xl p-8 border border-neutral-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">My Skill Development Approach</h3>
          <p className="text-neutral-300 leading-relaxed">
            I believe in continuously expanding my technical repertoire while deepening my expertise in core technologies.
            My focus is on mastering both the fundamentals and advanced concepts of each technology I work with,
            enabling me to build robust, scalable, and maintainable solutions for complex problems.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {["Frontend", "Backend", "Databases", "DevOps"].map((area, i) => (
              <div key={i} className="bg-neutral-700/30 rounded-lg p-4">
                <h4 className="font-semibold text-primary-400 mb-2">{area} Development</h4>
                <p className="text-sm text-neutral-400">
                  {i === 0 && "Building responsive, interactive UIs with modern JavaScript frameworks"}
                  {i === 1 && "Developing scalable APIs and server-side applications"}
                  {i === 2 && "Designing efficient data models and optimizing queries"}
                  {i === 3 && "Automating deployment and ensuring system reliability"}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
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