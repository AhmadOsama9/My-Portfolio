import React, { Suspense } from 'react';
import { Database, Cloud, Cpu, Code, Settings, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const ParticleBackground = React.lazy(() => import('./helperComponents/ParticleBakcground'));

const experienceGroups = [
  {
    id: 1,
    icon: <Database className="w-12 h-12 text-blue-400" />,
    title: "Databases",
    description: "Designed and managed relational and NoSQL databases for scalable and efficient data storage.",
    technologies: [
      { name: "PostgreSQL", usage: "Used for complex relational data in the Education Platform and TikTok-like Backend." },
      { name: "MongoDB", usage: "Implemented for flexible schema designs in the Social Media Clone." },
      { name: "MySQL", usage: "Utilized for structured data in smaller projects." },
    ],
    parallaxSpeed: -10,
    color: "from-blue-500/20 to-blue-700/5",
    accent: "border-blue-400",
    iconBg: "bg-blue-500/10"
  },
  {
    id: 2,
    icon: <Cloud className="w-12 h-12 text-yellow-500" />,
    title: "Cloud & DevOps",
    description: "Deployed and managed cloud infrastructure using modern DevOps practices.",
    technologies: [
      { name: "AWS", usage: "Used S3, Lambda, RDS, and CloudFront for scalable cloud solutions." },
      { name: "Docker", usage: "Containerized applications for consistent development and deployment environments." },
      { name: "GitHub Actions", usage: "Implemented CI/CD pipelines for automated deployments." },
      { name: "Nginx", usage: "Configured as a reverse proxy and load balancer for backend services." },
    ],
    parallaxSpeed: 50,
    color: "from-yellow-500/20 to-yellow-700/5",
    accent: "border-yellow-400",
    iconBg: "bg-yellow-500/10"
  },
  {
    id: 3,
    icon: <Cpu className="w-12 h-12 text-green-500" />,
    title: "Backend Development",
    description: "Built robust and scalable backend services using modern frameworks and tools.",
    technologies: [
      { name: "Node.js", usage: "Developed RESTful APIs and real-time features for multiple projects." },
      { name: "Express.js", usage: "Used for building lightweight and efficient backend services." },
      { name: "NestJS", usage: "Implemented for modular and maintainable backend architectures." },
      { name: "Swagger", usage: "Integrated for API documentation and testing." },
    ],
    parallaxSpeed: 80,
    color: "from-green-500/20 to-green-700/5",
    accent: "border-green-400",
    iconBg: "bg-green-500/10"
  },
  {
    id: 4,
    icon: <Code className="w-12 h-12 text-red-500" />,
    title: "Frontend Development",
    description: "Created dynamic and responsive user interfaces for seamless user experiences.",
    technologies: [
      { name: "React", usage: "Built interactive UIs for the Education Platform and Social Media Clone." },
      { name: "Tailwind CSS", usage: "Used for styling and creating responsive designs." },
      { name: "TypeScript", usage: "Leveraged for type-safe development and improved code quality." },
    ],
    parallaxSpeed: 40,
    color: "from-red-500/20 to-red-700/5",
    accent: "border-red-400",
    iconBg: "bg-red-500/10"
  },
  {
    id: 5,
    icon: <Settings className="w-12 h-12 text-purple-500" />,
    title: "System Integration",
    description: "Seamlessly integrated new software with existing systems for streamlined workflows.",
    technologies: [
      { name: "Docker Compose", usage: "Orchestrated multi-container setups for local development." },
      { name: "CI/CD Pipelines", usage: "Automated build and deployment processes using GitHub Actions." },
      { name: "API Gateways", usage: "Configured Nginx as a reverse proxy for backend services." },
    ],
    parallaxSpeed: 50,
    color: "from-purple-500/20 to-purple-700/5",
    accent: "border-purple-400",
    iconBg: "bg-purple-500/10"
  },
  {
    id: 6,
    icon: <Shield className="w-12 h-12 text-blue-500" />,
    title: "Security & Optimization",
    description: "Implemented security measures and optimized performance for scalable applications.",
    technologies: [
      { name: "JWT Authentication", usage: "Used for secure user authentication in backend services." },
      { name: "AWS IAM", usage: "Managed access control for cloud resources." },
      { name: "Query Optimization", usage: "Improved database performance with optimized queries." },
    ],
    parallaxSpeed: 55,
    color: "from-blue-500/20 to-blue-700/5",
    accent: "border-blue-400",
    iconBg: "bg-blue-500/10"
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      type: "spring",
      damping: 20,
      stiffness: 100
    }
  }
};

const techItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

const Experience = () => {
  return (
    <section id="experience" className="relative py-24 bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-950">
      {/* Particle Background (Lazy Loaded) */}
      <Suspense fallback={<div className="absolute inset-0 bg-neutral-900"></div>}>
        <ParticleBackground id="experience-particles" particleCount={40} />
      </Suspense>

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-[10%] w-72 h-72 rounded-full bg-primary-500/10 blur-[150px] opacity-60"></div>
        <div className="absolute bottom-1/4 right-[10%] w-80 h-80 rounded-full bg-blue-500/10 blur-[150px] opacity-60"></div>
      </div>

      {/* Section Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Gradient Underline */}
        <motion.div 
          className="text-center mb-16 relative"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-100 mb-4 inline-block relative">
            Technologies & Expertise
            <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-400 to-blue-500 rounded-full"></span>
          </h2>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto mt-4">
            A showcase of the technologies I've mastered and how I've applied them in my projects.
          </p>
        </motion.div>

        {/* Experience Cards with Animations */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {experienceGroups.map((group) => (
            <motion.div
              key={group.id}
              className={`relative p-8 rounded-xl backdrop-blur-sm bg-gradient-to-br ${group.color} 
                border border-white/10 shadow-xl overflow-hidden group transition-all duration-500 hover:shadow-2xl
                hover:border-opacity-30 hover:border-primary-500/30`}
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
              }}
            >
              {/* Background Glow Effect */}
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br from-white/5 to-transparent 
                opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Icon Container */}
              <div className={`relative z-10 w-20 h-20 flex items-center justify-center rounded-2xl 
                ${group.iconBg} shadow-lg mb-6 border border-white/10 group-hover:scale-110 
                transition-transform duration-500 group-hover:border-white/20`}>
                <motion.div
                  animate={{ 
                    rotate: [0, 5, 0, -5, 0],
                    scale: [1, 1.05, 1, 1.05, 1] 
                  }}
                  transition={{ 
                    duration: 6,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  {group.icon}
                </motion.div>
              </div>

              {/* Title & Description */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-primary-400 transition-colors duration-300">
                  {group.title}
                </h3>
                <p className="text-neutral-300 mb-6 leading-relaxed text-sm md:text-base">{group.description}</p>

                {/* Technologies List */}
                <motion.div 
                  className="space-y-4"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
                    }
                  }}
                >
                  {group.technologies.map((tech, i) => (
                    <motion.div 
                      key={i} 
                      className={`border-l-2 ${group.accent} pl-4 py-1 bg-black/10 rounded-r-md backdrop-blur-sm
                        hover:bg-black/20 transition-all duration-300 hover:pl-5`}
                      variants={techItemVariants}
                    >
                      <p className="font-medium text-white">{tech.name}</p>
                      <p className="text-neutral-400 text-sm mt-1">{tech.usage}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-br from-primary-500/20 to-transparent 
                rounded-tl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Summary Section */}
        <motion.div
          className="mt-16 p-8 rounded-xl bg-neutral-800/50 border border-neutral-700 backdrop-blur-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">Continuous Learning & Growth</h3>
          <p className="text-neutral-300 leading-relaxed">
            My journey in technology is driven by a passion for continuous learning and improvement.
            I regularly explore new technologies and frameworks to expand my skillset and stay current
            with industry best practices. This approach allows me to tackle diverse challenges and
            deliver innovative solutions that meet modern development standards.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;