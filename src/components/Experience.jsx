import React from 'react';
import { Cloud, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

const ParticleBackground = React.lazy(() => import('./helperComponents/ParticleBakcground'));

// Real work experience, kept high-level for a public portfolio
const experienceGroups = [
  {
    id: 1,
    icon: <Cloud className="w-12 h-12 text-cyan-400" />,
    title: "Backend Engineer (Contract)",
    subtitle: "Private Client — SaaS Platform",
    period: "Mar 2025 – Present",
    description: "Building and maintaining production backend services on AWS Lambda, with infrastructure managed via Terraform. Working across a large-scale serverless system, including third-party integrations and payment processing.",
    technologies: [
      "Python", "AWS Lambda", "Terraform", "API Gateway"
    ],
    color: "from-cyan-400/20 to-cyan-700/5",
    accent: "border-cyan-400",
    iconBg: "bg-cyan-400/10"
  },
  // {
  //   id: 2,
  //   icon: <Code2 className="w-12 h-12 text-fuchsia-400" />,
  //   title: "Full-Stack Freelance Developer",
  //   subtitle: "waqfalaqsa.org",
  //   period: "2025 – 2026",
  //   description: "Solely designed and built a live production donation platform end-to-end — frontend, backend, and infrastructure — including multi-currency support and a secured admin panel.",
  //   technologies: [
  //     "Next.js", "AWS Lambda", "DynamoDB", "Cloudflare"
  //   ],
  //   color: "from-fuchsia-400/20 to-fuchsia-700/5",
  //   accent: "border-fuchsia-400",
  //   iconBg: "bg-fuchsia-400/10"
  // }
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

const Experience = () => {
  return (
    <section id="experience" className="relative py-24 bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-950">
      {/* Professional High-Tech Grid Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_200px,#00000000,transparent)]"></div>
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
            Experience
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-300 max-w-2xl mx-auto mt-4">
            Where I've applied my skills in production environments.
          </p>
        </motion.div>

        {/* Modern Minimalist List Layout */}
        <div className="max-w-4xl mx-auto space-y-12">
          {experienceGroups.map((group, idx) => (
            <motion.div
              key={group.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
            >
              <div className="flex flex-col md:flex-row gap-8 md:gap-10">
                
                {/* Visual Anchor / Icon Column */}
                <div className="flex-shrink-0 flex flex-col items-center md:items-start">
                  <div className={`p-3 rounded-2xl ${group.iconBg} ring-1 ring-inset ${group.accent} ring-opacity-20 shadow-lg shadow-${group.color.split('-')[1]}/10`}>
                    {group.icon}
                  </div>
                  {idx !== experienceGroups.length - 1 && (
                    <div className="hidden md:block w-px h-full bg-gradient-to-b from-neutral-800 to-transparent my-4 ml-6" />
                  )}
                </div>

                {/* Content Column */}
                <div className="flex-grow">
                  <div className="text-center md:text-left mb-2">
                    <h3 className="text-2xl md:text-3xl font-bold text-neutral-100">
                      {group.title}
                    </h3>
                    <p className="text-primary-400 font-medium mt-1">
                      {group.subtitle} · <span className="text-neutral-500 font-normal">{group.period}</span>
                    </p>
                  </div>
                  
                  <p className="text-neutral-300 text-lg leading-relaxed mb-6 mt-4 text-center md:text-left">
                    {group.description}
                  </p>

                  <div className="flex flex-wrap justify-center md:justify-start gap-3">
                    {group.technologies.map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 text-sm font-medium text-primary-200 bg-neutral-800/50 rounded-md border border-neutral-700/50 hover:bg-neutral-800 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;