import React, { Suspense } from 'react';
import { Database, Cloud, Cpu, Code, Settings, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const ParticleBackground = React.lazy(() => import('./helperComponents/ParticleBakcground'));

// Update experienceGroups to reflect new skills and categories
const experienceGroups = [
  {
    id: 1,
    icon: <Cloud className="w-12 h-12 text-cyan-400" />,
    title: "Cloud & DevOps",
    description: "Architected and automated cloud infrastructure using AWS (API Gateway, Lambda, CloudWatch, CloudFront, Edge Lambda, S3, IAM), Terraform, Cloudflare, Render, and more. Delivered scalable, secure, and cost-effective solutions.",
    technologies: [
      "AWS API Gateway", "AWS Lambda", "CloudWatch", "CloudFront", "Edge Lambda", "S3", "IAM", "Terraform", "Cloudflare", "Render", "Postman", "File Storage", "CDN"
    ],
    color: "from-cyan-400/20 to-cyan-700/5",
    accent: "border-cyan-400",
    iconBg: "bg-cyan-400/10"
  },
  {
    id: 2,
    icon: <Cpu className="w-12 h-12 text-emerald-400" />,
    title: "Backend Engineering",
    description: "Built robust APIs and backend services with Python, Node.js, Express, and both REST & GraphQL. Focused on reliability, scalability, and performance.",
    technologies: [
      "Python", "Node.js", "Express", "REST APIs", "GraphQL"
    ],
    color: "from-emerald-400/20 to-emerald-700/5",
    accent: "border-emerald-400",
    iconBg: "bg-emerald-400/10"
  },
  {
    id: 3,
    icon: <Code className="w-12 h-12 text-fuchsia-400" />,
    title: "Frontend Engineering",
    description: "Developed modern, responsive UIs with Next.js, React, Tailwind CSS, and TypeScript. Bridged backend power with beautiful user experiences.",
    technologies: [
      "Next.js", "React", "Tailwind CSS", "TypeScript"
    ],
    color: "from-fuchsia-400/20 to-fuchsia-700/5",
    accent: "border-fuchsia-400",
    iconBg: "bg-fuchsia-400/10"
  },
  {
    id: 4,
    icon: <Settings className="w-12 h-12 text-orange-400" />,
    title: "SaaS & Automation",
    description: "Accelerated delivery with SaaS platforms (Render), CI/CD, Docker, Infrastructure as Code, and workflow automation.",
    technologies: [
      "Render", "CI/CD", "Docker", "IaC", "Automation"
    ],
    color: "from-orange-400/20 to-orange-700/5",
    accent: "border-orange-400",
    iconBg: "bg-orange-400/10"
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-neutral-100 mb-4 inline-block relative">
            Technologies & Expertise
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-300 max-w-2xl mx-auto mt-4">
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
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 text-white group-hover:text-primary-400 transition-colors duration-300">
                  {group.title}
                </h3>
                <p className="text-base sm:text-lg md:text-xl text-neutral-300 mb-6 leading-relaxed">{group.description}</p>

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
                      <p className="font-medium text-white">{tech}</p>
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