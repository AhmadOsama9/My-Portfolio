import React, { Suspense } from 'react';
import { Database, Cloud, Cpu, Code, Settings, Shield } from 'lucide-react';
import { motion, useTransform, useScroll } from 'framer-motion';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
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
    parallaxSpeed: 10,
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
    parallaxSpeed: -20,
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
    parallaxSpeed: 15,
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
    parallaxSpeed: -20,
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
    parallaxSpeed: 20,
  },
];

const Experience = () => {
  const { scrollYProgress } = useScroll();
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [1, 0.5, 0.2, 0.5, 1]);

  return (
    <ParallaxProvider>
      <section id="experience" className="relative overflow-hidden py-24 min-h-screen bg-neutral-900">
        {/* Particle Background */}
        <Suspense fallback={<div className="loading-spinner">Loading...</div>}>
          <ParticleBackground id="experience-particles" particleCount={50} />
        </Suspense>

        {/* Dynamic Background Gradient */}
        <motion.div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background: `linear-gradient(to bottom right, var(--primary-400), var(--accent-blue-500))`,
            opacity: backgroundOpacity,
          }}
        />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <Parallax speed={-10}>
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-neutral-100 mb-4">
                Technologies & Expertise
              </h2>
              <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
                A showcase of the technologies I’ve worked with and how I’ve applied them in my projects.
              </p>
            </motion.div>
          </Parallax>

          {/* Experience Cards */}
          <div className="space-y-16 md:space-y-24">
            {experienceGroups.map((group, index) => {
              const Icon = group.icon;
              return (
                <Parallax key={group.id} speed={group.parallaxSpeed}>
                  <motion.div
                    className={`
                      relative p-8 md:p-12 rounded-3xl 
                      shadow-lg overflow-hidden
                      flex flex-col items-center gap-8
                      bg-neutral-800/50 backdrop-blur-sm
                      mx-auto w-full max-w-2xl
                    `}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true, amount: 0.5 }}
                  >
                    {/* Icon Container */}
                    <div className="relative z-10 w-24 h-24 flex items-center justify-center rounded-full bg-white/20">
                      {Icon}
                    </div>

                    {/* Title & Description */}
                    <div className="relative z-10 flex-1 text-center text-white">
                      <h3 className="text-2xl font-bold mb-4">{group.title}</h3>
                      <p className="opacity-90 mb-6">{group.description}</p>

                      {/* Technologies List */}
                      <div className="space-y-4">
                        {group.technologies.map((tech, i) => (
                          <div key={i} className="text-left">
                            <p className="font-semibold text-neutral-100">{tech.name}</p>
                            <p className="text-neutral-300">{tech.usage}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </Parallax>
              );
            })}
          </div>
        </div>
      </section>
    </ParallaxProvider>
  );
};

export default Experience;