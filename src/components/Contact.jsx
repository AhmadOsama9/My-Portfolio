import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiArrowRight, HiOutlineCheckCircle } from 'react-icons/hi';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Simulate form submission with delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // For actual implementation, replace with your form submission logic
      // For example, using EmailJS or a backend API
      
      setIsSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
    } catch (err) {
      setError("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
          <h2 className="text-4xl font-bold text-neutral-100 mb-4 relative inline-block">
            Get In Touch
            <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-400 to-blue-500 rounded-full"></span>
          </h2>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto mt-4">
            Have a project in mind or want to explore opportunities? I'd love to hear from you.
            Let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            className="bg-neutral-800 rounded-2xl shadow-xl border border-neutral-700 p-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>

            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                  <HiOutlineCheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Message Sent!</h4>
                <p className="text-neutral-400">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                <button 
                  className="mt-6 text-primary-400 hover:text-primary-300 flex items-center gap-1 transition-colors"
                  onClick={() => setIsSubmitted(false)}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="block w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-neutral-400"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="block w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-neutral-400"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="block w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-neutral-400"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                {error && (
                  <div className="p-3 mb-6 bg-red-900/40 border border-red-500/50 rounded-lg text-red-300 text-sm">
                    {error}
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all ${
                    isSubmitting 
                      ? "bg-neutral-600 text-neutral-300 cursor-not-allowed" 
                      : "bg-gradient-to-r from-primary-500 to-blue-600 hover:from-primary-600 hover:to-blue-700 text-white shadow-lg shadow-primary-500/20"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <HiArrowRight className="ml-1" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-neutral-800 rounded-2xl shadow-xl border border-neutral-700 p-8 mb-8">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary-500/10 text-primary-400">
                    <FaEnvelope className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-neutral-400 mb-1">Email</h4>
                    <a 
                      href="mailto:ahmedosama.dev@outlook.com" 
                      className="text-white hover:text-primary-400 transition-colors"
                    >
                      ahmedosama.dev@outlook.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400">
                    <FaLinkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-neutral-400 mb-1">LinkedIn</h4>
                    <a 
                      href="https://www.linkedin.com/in/ahmedosama975/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white hover:text-blue-400 transition-colors"
                    >
                      linkedin.com/in/ahmedosama975
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-neutral-500/10 text-neutral-300">
                    <FaGithub className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-neutral-400 mb-1">GitHub</h4>
                    <a 
                      href="https://github.com/AhmadOsama9" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white hover:text-neutral-300 transition-colors"
                    >
                      github.com/AhmadOsama9
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-neutral-800 rounded-2xl shadow-xl border border-neutral-700 p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Let's Work Together</h3>
              <p className="text-neutral-300 mb-6">
                Whether you're looking for a developer for your next project, have a question about my work,
                or just want to connect, I'm always open to new opportunities and conversations.
              </p>
              <p className="text-neutral-400">
                Currently available for freelance projects and full-time opportunities.
              </p>
              
              <div className="mt-8 p-4 border border-dashed border-neutral-600 rounded-lg bg-neutral-800/50">
                <p className="text-neutral-300 text-sm">
                  <span className="text-primary-400 font-semibold">Quick Response Time:</span> I usually respond to all inquiries within 24 hours.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    
    </section>
  );
};

export default Contact;