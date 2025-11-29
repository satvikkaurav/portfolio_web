import { motion } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';

export function Contact() {
  return (
    <AnimatedSection className="py-20 bg-gradient-to-b from-gray-900 via-gray-900 to-[#1a1a1a] dark:from-gray-50 dark:via-gray-100 dark:to-gray-200 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-white dark:text-gray-900 mb-2 drop-shadow-[0_0_8px_rgba(147,51,234,0.3)] dark:drop-shadow-none"
        >
          Get In Touch
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-24 h-1.5 bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-500 dark:to-indigo-500 mx-auto mb-12 rounded-full shadow-[0_0_15px_rgba(147,51,234,0.3)] dark:shadow-[0_0_15px_rgba(147,51,234,0.2)]"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 dark:from-purple-600 dark:to-indigo-600 drop-shadow-[0_0_8px_rgba(147,51,234,0.3)] dark:drop-shadow-none mb-6">
              Send me a message
            </h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 dark:text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-gray-800 dark:bg-white border border-gray-700 dark:border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-600 focus:border-transparent text-white dark:text-gray-900"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 dark:text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-gray-800 dark:bg-white border border-gray-700 dark:border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-600 focus:border-transparent text-white dark:text-gray-900"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 dark:text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-800 dark:bg-white border border-gray-700 dark:border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-600 focus:border-transparent text-white dark:text-gray-900"
                  placeholder="Your message"
                />
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-indigo-700 transition-all duration-200 shadow-[0_0_15px_rgba(147,51,234,0.3)]"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h4 className="text-lg font-medium text-white dark:text-gray-900 mb-4">Contact Information</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-300 dark:text-gray-700">
                  <svg className="w-5 h-5 text-purple-400 dark:text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>satvikkaurav10@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 dark:text-gray-700">
                  <svg className="w-5 h-5 text-purple-400 dark:text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Bengaluru, India</span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              {/* <h4 className="text-lg font-medium text-white dark:text-gray-900 mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <motion.a
                  href="https://github.com/satvikkaurav"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-gray-800/50 dark:bg-gray-200 rounded-full text-purple-400 dark:text-purple-600 hover:text-white dark:hover:text-gray-900 hover:bg-purple-600/20 dark:hover:bg-purple-500/30 transition-colors"
                >
                  <span className="sr-only">GitHub</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.79-.26.79-.58v-2.24c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.31 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.31-5.48-1.34-5.48-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.17 0 0 1.01-.32 3.31 1.23a11.5 11.5 0 0 1 6.02 0c2.3-1.55 3.31-1.23 3.31-1.23.65 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.82 1.1.82 2.23v3.29c0 .32.19.7.8.58C20.56 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z" />
                  </svg>
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/satvik-kaurav/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-gray-800/50 dark:bg-gray-200 rounded-full text-purple-400 dark:text-purple-600 hover:text-white dark:hover:text-gray-900 hover:bg-purple-600/20 dark:hover:bg-purple-500/30 transition-colors"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V24h-4V8.5zM8.5 8.5h3.83v2.1h.05c.53-1 1.82-2.1 3.75-2.1 4.01 0 4.75 2.64 4.75 6.08V24h-4v-7.08c0-1.69-.03-3.88-2.37-3.88-2.38 0-2.75 1.86-2.75 3.76V24h-4V8.5z" />
                  </svg>
                </motion.a>
                <motion.a
                  href="https://leetcode.com/satvik-kaurav"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-gray-800/50 dark:bg-gray-200 rounded-full text-purple-400 dark:text-purple-600 hover:text-white dark:hover:text-gray-900 hover:bg-purple-600/20 dark:hover:bg-purple-500/30 transition-colors"
                >
                  <span className="sr-only">LeetCode</span>
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9.8 20.4 6 16.6a1.5 1.5 0 1 1 2.1-2.1l3.1 3.1 4.9-4.9a1.5 1.5 0 0 1 2.1 2.1l-6 6a1.5 1.5 0 0 1-2.1 0z" />
                    <path d="M10.2 3.6 6 7.8a1.5 1.5 0 1 1-2.1-2.1l5-5a1.5 1.5 0 0 1 2.1 0l9 9a1.5 1.5 0 0 1-2.1 2.1l-7.8-7.8z" />
                  </svg>
                </motion.a>
              </div> */}
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
} 