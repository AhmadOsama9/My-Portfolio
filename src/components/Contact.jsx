import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-neutral-900 to-neutral-950">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden -z-10 opacity-20">
        <div className="absolute top-1/4 left-[10%] w-64 h-64 rounded-full bg-primary-600/40 blur-[120px]"></div>
        <div className="absolute bottom-1/3 right-[5%] w-72 h-72 rounded-full bg-blue-600/30 blur-[150px]"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-neutral-100 mb-4 relative inline-block">
            Get In Touch
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-300 max-w-2xl mx-auto mt-4">
            Have a project in mind or want to explore opportunities? I'd love to hear from you.
            Feel free to reach out through any of the channels below.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            className="bg-neutral-800 rounded-2xl shadow-xl border border-neutral-700 p-8 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex flex-col xs:flex-row md:flex-row items-center md:items-start gap-2 md:gap-4 text-center md:text-left">
                    <div className="p-3 rounded-lg bg-primary-500/10 text-primary-400 flex-shrink-0 mx-auto md:mx-0">
                      <FaEnvelope className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col items-center md:items-start">
                      <h4 className="text-sm font-medium text-neutral-400 mb-1">Email</h4>
                      <a 
                        href="mailto:ahmedosama.dev@outlook.com" 
                        className="text-white hover:text-primary-400 transition-colors break-all"
                      >
                        ahmedosama.dev@outlook.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex flex-col xs:flex-row md:flex-row items-center md:items-start gap-2 md:gap-4 text-center md:text-left">
                    <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400 flex-shrink-0 mx-auto md:mx-0">
                      <FaLinkedin className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col items-center md:items-start">
                      <h4 className="text-sm font-medium text-neutral-400 mb-1">LinkedIn</h4>
                      <a 
                        href="https://www.linkedin.com/in/ahmedosama975/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white hover:text-blue-400 transition-colors break-all"
                      >
                        linkedin.com/in/ahmedosama975
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex flex-col xs:flex-row md:flex-row items-center md:items-start gap-2 md:gap-4 text-center md:text-left">
                    <div className="p-3 rounded-lg bg-neutral-500/10 text-neutral-300 flex-shrink-0 mx-auto md:mx-0">
                      <FaGithub className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col items-center md:items-start">
                      <h4 className="text-sm font-medium text-neutral-400 mb-1">GitHub</h4>
                      <a 
                        href="https://github.com/AhmadOsama9" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white hover:text-neutral-300 transition-colors break-all"
                      >
                        github.com/AhmadOsama9
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex flex-col xs:flex-row md:flex-row items-center md:items-start gap-2 md:gap-4 text-center md:text-left">
                    <div className="p-3 rounded-lg bg-green-500/10 text-green-400 flex-shrink-0 mx-auto md:mx-0">
                      <FaPhone className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col items-center md:items-start">
                      <h4 className="text-sm font-medium text-neutral-400 mb-1">Phone</h4>
                      <a 
                        href="tel:+201022866424" 
                        className="text-white hover:text-green-400 transition-colors break-all"
                      >
                        +20 1022-866-424
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-6">Let's Work Together</h3>
                <p className="text-base sm:text-lg md:text-xl text-neutral-300 mb-6">
                  Whether you're looking for a developer for your next project, have a question about my work,
                  or just want to connect, I'm always open to new opportunities and conversations.
                </p>
                <p className="text-base sm:text-lg md:text-xl text-neutral-400 mb-6">
                  Currently available for freelance projects and full-time opportunities.
                </p>
                
                <div className="p-4 border border-dashed border-neutral-600 rounded-lg bg-neutral-800/50">
                  <p className="text-base sm:text-lg md:text-xl text-neutral-300 text-sm">
                    <span className="text-primary-400 font-semibold">Quick Response Time:</span> I usually respond to all inquiries within 24 hours.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            className="bg-neutral-800/50 rounded-2xl shadow-lg border border-neutral-700/50 p-6 flex flex-col md:flex-row items-center justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-center md:text-left">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white">Ready to start a project?</h3>
              <p className="text-base sm:text-lg md:text-xl text-neutral-400 mt-1">Let's discuss your ideas</p>
            </div>
            <a
              href="mailto:ahmedosama.dev@outlook.com?subject=Project%20Inquiry"
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-primary-500 to-blue-600 hover:from-primary-600 hover:to-blue-700 text-white font-medium shadow-lg shadow-primary-500/20 transition-all hover:shadow-xl hover:shadow-primary-500/30"
            >
              Email Me
            </a>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;