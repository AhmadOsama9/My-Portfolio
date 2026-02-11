import React from 'react';
import { motion } from 'framer-motion';

const About = () => {

  return (
    <section id="about" className="py-24 bg-neutral-900 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-neutral-100 mb-6 flex items-center gap-3">
                About Me
                <span className="w-12 h-1 bg-primary-500 rounded-full hidden md:block"></span>
              </h2>
              
              <div className="space-y-6 text-lg text-neutral-300 leading-relaxed font-light">
                <p>
                  I’m a backend engineer dedicated to building scalable, serverless systems on AWS. 
                  I am an <strong className="text-primary-400 font-medium">AWS Certified Developer – Associate</strong> and a graduate of <span className="text-neutral-100">Cairo University (FCAI)</span>, where I honed my problem-solving skills and computer science fundamentals.
                </p>
                <p>
                  My work centers on <span className="text-neutral-100">Python</span> and cloud-native architectures. I leverage services like Lambda, API Gateway, and S3, orchestrating them with <span className="text-neutral-100">Terraform</span> to ensure infrastructure is reproducible and robust. I thrive on the challenges of production environments—debugging complex issues and designing APIs that just work.
                </p>
              </div>
            </motion.div>

            {/* Principles Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-xl font-bold text-neutral-100 mb-4">Engineering Philosophy</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Clean, Maintainable Code",
                  "Scalable System Design",
                  "Infrastructure as Automation",
                  "Holistic Architecture"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-neutral-800/30 p-3 rounded-lg border border-neutral-800">
                    <div className="w-2 h-2 rounded-full bg-primary-500"></div>
                    <span className="text-neutral-300">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

             <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="pt-6 border-t border-neutral-800"
              >
                <p className="text-neutral-400 text-sm md:text-base">
                  <span className="text-primary-400 font-semibold">// Full Stack Context:</span> While my heart is in the backend, I am proficient with <strong>React and Next.js</strong>. This frontend fluency allows me to collaborate seamlessly with UI teams and design backend APIs that are intuitive for consumers.
                </p>
              </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;