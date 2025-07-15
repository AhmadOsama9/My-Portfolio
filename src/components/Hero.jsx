import React, { Suspense, useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
const ParticleBackground = React.lazy(() => import('./helperComponents/ParticleBakcground'));

const Hero = React.memo(() => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const preRef = useRef(null);
  
  // Enhanced professional code sample with modern patterns
  const codeString = `// Enterprise-grade Cloud Architecture
import { useQuery, useMutation } from '@tanstack/react-query';
import { useState, useCallback, useContext, useEffect } from 'react';
import { AuthContext } from '@/contexts/AuthContext';
import { fetchWithAuth, API_ENDPOINTS } from '@/lib/api';
import { ErrorBoundary } from '@/components/ErrorBoundary';

/**
 * Custom hook for managing distributed system data flow
 * with optimistic updates and error handling
 * @param {Object} options - Configuration options for the query
 * @returns {Object} Data management utilities and state
 */
export function useDistributedDataFlow(options = {}) {
  const { user, getAccessToken } = useContext(AuthContext);
  const [optimisticData, setOptimisticData] = useState([]);
  const [analyticsReady, setAnalyticsReady] = useState(false);
  
  // Initialize analytics tracking
  useEffect(() => {
    if (user?.id && !analyticsReady) {
      // Track user interactions with the data flow
      analytics.track('data_flow_initialized', {
        userId: user.id,
        timestamp: Date.now()
      });
      setAnalyticsReady(true);
    }
    
    return () => {
      // Cleanup analytics when component unmounts
      if (analyticsReady) {
        analytics.track('data_flow_terminated');
      }
    };
  }, [user, analyticsReady]);
  
  // Smart caching with stale-while-revalidate strategy
  const {
    data = [],
    isLoading,
    error,
    refetch
  } = useQuery({
    queryKey: ['distributed-data', user?.id],
    queryFn: async () => {
      const token = await getAccessToken();
      return fetchWithAuth(
        \`\${API_ENDPOINTS.DATA}/\${user.id}\`,
        { headers: { Authorization: \`Bearer \${token}\` } }
      );
    },
    enabled: !!user,
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: (failureCount, error) => {
      // Intelligent retry logic based on error type
      if (error.status === 429) return false; // Don't retry rate limiting
      return failureCount < 3;
    },
    ...options
  });

  // Optimistic mutations with rollback
  const { mutate, isLoading: isMutating } = useMutation({
    mutationFn: async (newData) => {
      const token = await getAccessToken();
      return fetchWithAuth(
        API_ENDPOINTS.DATA,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: \`Bearer \${token}\`
          },
          body: JSON.stringify(newData)
        }
      );
    },
    onMutate: (newData) => {
      // Store previous state for potential rollback
      const previousData = [...data];
      
      // Apply optimistic update
      setOptimisticData([...data, {
        ...newData,
        status: 'pending',
        _optimistic: true
      }]);
      
      return { previousData };
    },
    onSuccess: (result, variables) => {
      // Sync with server data
      refetch();
      
      // Analytics tracking
      if (analyticsReady) {
        analytics.track('data_item_added', {
          itemId: result.id,
          timestamp: Date.now()
        });
      }
    },
    onError: (err, variables, context) => {
      // Rollback on error
      setOptimisticData(context.previousData);
      console.error("Operation failed:", err);
      
      // Show user-friendly error notification
      notify({
        type: 'error',
        message: 'Failed to add item. Please try again.',
        details: err.message
      });
    }
  });

  const addItem = useCallback((item) => {
    if (!user?.id) {
      notify({
        type: 'warning',
        message: 'Please log in to add items'
      });
      return;
    }
    
    mutate({
      id: crypto.randomUUID(),
      timestamp: new Date().toISOString(),
      userId: user.id,
      ...item
    });
  }, [mutate, user]);

  return {
    data: optimisticData.length > 0 ? optimisticData : data,
    isLoading: isLoading || isMutating,
    error,
    addItem,
    refetch
  };
}`;

  // Auto-scroll to follow typing
  useEffect(() => {
    if (preRef.current) {
      preRef.current.scrollTop = preRef.current.scrollHeight;
    }
  }, [text]);

  // Enhanced typing effect with variable speed
  useEffect(() => {
    if (index < codeString.length) {
      // Vary typing speed based on character type
      let typingSpeed = 10; // base speed
      const char = codeString.charAt(index);
      
      // Slow down for special characters/structures to make it feel more human
      if (['{', '}', '(', ')', ';', '\n'].includes(char)) {
        typingSpeed = 50 + Math.random() * 100;
      } else if (char === ' ' && Math.random() > 0.8) {
        // Occasional pause at spaces
        typingSpeed = 120;
      } else {
        typingSpeed = Math.random() * 15 + 5;
      }
      
      const timeout = setTimeout(() => {
        setText(prev => prev + char);
        setIndex(index + 1);
      }, typingSpeed);
      
      return () => clearTimeout(timeout);
    }
  }, [index, codeString]);

  // Animation variants for consistent animations
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="hero" className="relative w-full min-h-screen bg-neutral-900 overflow-hidden pt-10 sm:pt-16 md:pt-24 pb-4 sm:pb-8 md:pb-12">
      {/* Add syntax highlighting styles */}
      <style jsx global>{`
        .code-comment { color: #6b7280; }
        .code-keyword { color: #c084fc; }
        .code-string { color: #4ade80; }
        .code-bracket { color: #facc15; }
        .code-function { color: #34d399; }
        .code-path { color: #60a5fa; }
        .code-boolean { color: #fb923c; }
        .code-number { color: #22d3ee; }
        .code-default { color: #93c5fd; }
        .code-operator { color: #f472b6; }
        .code-jsdoc { color: #818cf8; }
        
        .line-highlight {
          background-color: rgba(59, 130, 246, 0.06);
          border-left: 2px solid #3b82f6;
        }
        
        .cursor-blink {
          animation: cursor-blink 1.2s infinite;
        }
        
        @keyframes cursor-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>

      {/* Optimized Particle Background */}
      <Suspense fallback={<div className="absolute inset-0 bg-neutral-900"></div>}>
        <ParticleBackground id="hero-particles" particleCount={40} />
      </Suspense>

      {/* Hero Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-screen flex flex-col lg:flex-row items-center justify-center text-center lg:text-left relative z-10">
        {/* Text Content */}
        <motion.div
          className="space-y-8 lg:w-1/2 mt-[-2rem]"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { 
              transition: { 
                staggerChildren: 0.2
              }
            }
          }}
          style={{ willChange: "transform" }}
        >
          {/* Pre-heading */}
          <motion.p 
            className="text-primary-400 font-medium tracking-wider text-lg uppercase"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            Full-Stack & Cloud Engineer
          </motion.p>
          
          {/* Main Heading */}
          <motion.h1 
            className="text-2xl sm:text-3xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-neutral-100 leading-tight"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            Building Scalable Systems from
            <span className="text-primary-400 relative"> Vision</span> to
            <br />
            <span className="text-primary-400 relative inline-block">Execution</span>
          </motion.h1>
          
          {/* Description */}
          <motion.p 
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-300 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            I'm a software engineer with a full-stack foundation and a backend-first mindset. I build reliable cloud-native applications using modern frameworks and AWS infrastructure.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start pt-4"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <a href="#projects" className="group">
              <button className="bg-primary-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center justify-center w-full sm:w-auto transition-all duration-300 hover:bg-primary-600 hover:shadow-primary-500/20 hover:shadow-xl">
                <span className="mr-2">View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </a>
            <a href="#contact">
              <button className="bg-transparent border-2 border-primary-500 text-primary-500 px-6 py-3 rounded-lg flex items-center justify-center w-full sm:w-auto transition-all duration-300 hover:bg-primary-500/10">
                <span>Contact Me</span>
              </button>
            </a>
          </motion.div>
          
          {/* Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-6 max-w-lg mx-auto lg:mx-0"
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-neutral-800/50 p-4 rounded-lg backdrop-blur-sm border border-neutral-700/50 hover:border-primary-500/50 transition-all duration-300 group">
                <p className="text-primary-400 text-2xl font-bold group-hover:scale-110 transition-transform duration-300">3+</p>
                <p className="text-neutral-400 text-sm">Years Coding</p>
              </div>
              <div className="bg-neutral-800/50 p-4 rounded-lg backdrop-blur-sm border border-neutral-700/50 hover:border-primary-500/50 transition-all duration-300 group">
                <p className="text-primary-400 text-2xl font-bold group-hover:scale-110 transition-transform duration-300">7+</p>
                <p className="text-neutral-400 text-sm">Projects Built</p>
              </div>
              <div className="bg-neutral-800/50 p-4 rounded-lg backdrop-blur-sm border border-neutral-700/50 hover:border-primary-500/50 transition-all duration-300 group col-span-2 md:col-span-1">
                <p className="text-primary-400 text-2xl font-bold group-hover:scale-110 transition-transform duration-300">10+</p>
                <p className="text-neutral-400 text-sm">Technologies</p>
              </div>
          </motion.div>
        </motion.div>

        {/* Enhanced Animated Code Editor with Professional Code */}
        <motion.div
          className="hidden lg:block lg:w-1/2 pl-8 mt-10 lg:mt-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative rounded-xl overflow-hidden shadow-2xl border border-neutral-700 group hover:border-primary-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary-500/5">
            {/* Editor top bar with enhanced styling */}
            <div className="bg-neutral-800 py-2 px-4 flex items-center">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="mx-auto text-neutral-400 text-sm flex items-center">
                <span className="mr-2 opacity-70">~/projects/cloud-architecture/</span>
                <span className="font-medium">distributed-data-hook.tsx</span>
              </div>
            </div>
            
            {/* Enhanced code area with smooth scrolling */}
            <div className="bg-neutral-900 p-6 font-mono text-sm overflow-hidden relative h-[450px]">
              {/* Subtle code line highlights */}
              <div className="absolute left-0 right-0 h-6 top-[84px] bg-primary-500/5 border-l-2 border-primary-400"></div>
              <div className="absolute left-0 right-0 h-6 top-[192px] bg-yellow-500/5 border-l-2 border-yellow-400"></div>
              <div className="absolute left-0 right-0 h-6 top-[288px] bg-green-500/5 border-l-2 border-green-400"></div>
              
              <pre 
                ref={preRef} 
                className="text-left overflow-y-auto h-full scrollbar-thin scrollbar-thumb-neutral-700 scrollbar-track-neutral-900 pr-4"
              >
                {text.split('\n').map((line, i) => {
                  // Add specific line highlight classes
                  const isSpecialLine = [8, 26, 42, 88].includes(i + 1);
                  return (
                    <div 
                      key={i} 
                      className={`line group flex hover:bg-white/5 transition-colors ${isSpecialLine ? 'line-highlight' : ''}`}
                    >
                      <span className="line-number w-8 text-right pr-4 text-neutral-600 group-hover:text-neutral-500 select-none">
                        {i + 1}
                      </span>
                      <span className="code-default">
                        {formatLineWithSyntax(line)}
                      </span>
                    </div>
                  );
                })}
                {index >= codeString.length ? (
                  <span className="inline-block w-2 h-5 bg-primary-400 cursor-blink"></span>
                ) : null}
              </pre>
              
              {/* Editor Annotations */}
              {index > codeString.length * 0.5 && (
                <motion.div 
                  className="absolute top-32 -right-2 bg-neutral-800/90 backdrop-blur-sm px-3 py-2 rounded-l-lg border border-neutral-700 max-w-[200px] shadow-xl"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, type: "spring" }}
                >
                  <div className="text-xs text-neutral-400">Best Practice</div>
                  <div className="text-primary-400 text-sm font-medium mt-1">
                    Optimistic updates improve UX by showing immediate feedback
                  </div>
                </motion.div>
              )}
              
              {/* Cursor blink - shows after typing is complete */}
              {index >= codeString.length && (
                <motion.div 
                  className="absolute bottom-6 right-6 bg-neutral-800/80 backdrop-blur-sm px-3 py-2 rounded-lg border border-neutral-700"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <motion.span 
                    className="text-primary-400 font-medium"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Expertise in modern React patterns
                  </motion.span>
                </motion.div>
              )}
            </div>
            
            {/* Enhanced status bar at bottom */}
            <div className="bg-neutral-800 py-1 px-4 text-xs flex justify-between text-neutral-400">
              <div className="flex items-center space-x-4">
                <span className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-blue-500 mr-1.5"></span>
                  TypeScript
                </span>
                <span>UTF-8</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="px-1.5 py-0.5 bg-neutral-700/50 rounded text-[10px]">ES2023</span>
                <span>{Math.min(Math.floor((index / codeString.length) * 100), 100)}%</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

// Enhanced syntax highlighting function with better typing support
function formatLineWithSyntax(line) {
  // Handle comments first
  if (line.trimStart().startsWith('//')) {
    return <span className="code-comment">{line}</span>;
  }
  
  // Handle JSDoc comments
  if (line.trimStart().startsWith('/*') || line.trimStart().startsWith(' *')) {
    return <span className="code-jsdoc">{line}</span>;
  }
  
  // Break the line into words and symbols for proper highlighting
  const parts = [];
  let currentWord = '';
  let insideString = false;
  let stringDelimiter = '';
  
  const keywords = ['import', 'from', 'export', 'function', 'const', 'let', 'var', 'return', 
                    'async', 'await', 'try', 'catch', 'finally', 'if', 'else', 'for', 'while', 
                    'useQuery', 'useMutation', 'useState', 'useCallback', 'useContext', 'useEffect'];
  const booleanValues = ['true', 'false', 'null', 'undefined'];
  const operators = ['=>', '===', '!==', '+=', '-=', '*=', '/=', '&&', '||', '??', '?', ':'];
  
  function commitCurrentWord() {
    if (currentWord) {
      if (keywords.includes(currentWord)) {
        parts.push(<span key={parts.length} className="code-keyword">{currentWord}</span>);
      } else if (booleanValues.includes(currentWord)) {
        parts.push(<span key={parts.length} className="code-boolean">{currentWord}</span>);
      } else if (/^\d+$/.test(currentWord)) {
        parts.push(<span key={parts.length} className="code-number">{currentWord}</span>);
      } else if (currentWord.startsWith('@')) {
        parts.push(<span key={parts.length} className="code-path">{currentWord}</span>);
      } else if (/^[A-Z][a-zA-Z0-9]*$/.test(currentWord)) {
        // Detect component/class names (PascalCase)
        parts.push(<span key={parts.length} className="code-function">{currentWord}</span>);
      } else {
        parts.push(<span key={parts.length}>{currentWord}</span>);
      }
      currentWord = '';
    }
  }
  
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    
    // Handle string literals
    if ((char === '"' || char === "'" || char === '`') && (i === 0 || line[i-1] !== '\\')) {
      if (insideString && char === stringDelimiter) {
        // Closing the string
        currentWord += char;
        parts.push(<span key={parts.length} className="code-string">{currentWord}</span>);
        currentWord = '';
        insideString = false;
      } else if (!insideString) {
        // Starting a new string
        commitCurrentWord();
        currentWord = char;
        insideString = true;
        stringDelimiter = char;
      } else {
        // Different quote inside a string
        currentWord += char;
      }
      continue;
    }
    
    if (insideString) {
      currentWord += char;
      continue;
    }
    
    // Handle brackets and other special characters
    if (/[\{\}\(\)\[\]]/.test(char)) {
      commitCurrentWord();
      parts.push(<span key={parts.length} className="code-bracket">{char}</span>);
      continue;
    }
    
    // Check for operators
    let foundOperator = false;
    for (const op of operators) {
      if (line.substring(i, i + op.length) === op) {
        commitCurrentWord();
        parts.push(<span key={parts.length} className="code-operator">{op}</span>);
        i += op.length - 1;
        foundOperator = true;
        break;
      }
    }
    
    if (foundOperator) continue;
    
    // Handle standard word boundaries
    if (/\s/.test(char) || /[^\w@]/.test(char)) {
      commitCurrentWord();
      parts.push(<span key={parts.length}>{char}</span>);
    } else {
      currentWord += char;
    }
  }
  
  // Process any remaining text
  commitCurrentWord();
  
  return <>{parts}</>;
}

export default Hero;