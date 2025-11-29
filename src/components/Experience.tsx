import { motion } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';

const experiences = [
  {
    title: 'Software Engineer',
    company: 'Kloudspot Inc.',
    period: 'Jun 2024 - Present',
    description: 'Worked on Facial Recognition System, ANPR',
  },
  {
    title: 'Software Developer Intern',
    company: 'Kloudspot Inc.',
    period: 'Feb 2024 - May 2024',
    description: 'Developed applications using GStreamer, DLStreamer utilizing C++',
  },
  {
    title: 'Full Stack Developer Intern',
    company: 'Triluxo Technologies Pvt. Ltd ',
    period: 'Dec 2023 - Jan 2024',
    description: 'Developed and maintained web applications using Next.js frameworks.',
  },
  // Add more experiences as needed
];

const cardVariants = {
  hidden: { opacity: 0, x: 50, y: -10 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: "easeOut",
      type: "spring",
      stiffness: 100,
    },
  }),
};

export function Experience() {
  return (
    <AnimatedSection className="py-20 bg-gradient-to-b from-gray-900 via-gray-900 to-[#1a1a1a] dark:from-gray-50 dark:via-gray-100 dark:to-gray-200 transition-colors duration-300" id="experience">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-white dark:text-gray-900 mb-2 drop-shadow-[0_0_8px_rgba(147,51,234,0.3)] dark:drop-shadow-none"
        >
          Experience
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-24 h-1.5 bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-500 dark:to-indigo-500 mx-auto mb-16 rounded-full shadow-[0_0_15px_rgba(147,51,234,0.3)] dark:shadow-[0_0_15px_rgba(147,51,234,0.2)]"
        />

        <div className="relative ml-8 md:ml-12">
          {/* Timeline line with gradient background */}
          <div 
            className="absolute left-[7px] top-[28px] bottom-8 w-0.5"
            style={{
              background: 'linear-gradient(to bottom, #9333ea, #6366f1)',
              boxShadow: '0 0 10px rgba(147,51,234,0.3)'
            }}
          />
          
          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative group">
                {/* Timeline dot with pulse effect */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, type: "spring" }}
                  className="absolute left-0 top-6 flex items-center justify-center"
                >
                  {/* Outer glowing circle */}
                  <div className="absolute w-7 h-7 rounded-full bg-purple-600/20 group-hover:bg-purple-600/30 transition-colors duration-300" />
                  {/* Inner gradient circle */}
                  <div className="absolute w-5 h-5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 shadow-[0_0_10px_rgba(147,51,234,0.5)] transform scale-75 group-hover:scale-100 transition-transform duration-300" />
                  {/* Center dot */}
                  <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                </motion.div>

                {/* Experience Card */}
                <motion.div
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={cardVariants}
                  whileHover={{ scale: 1.02 }}
                  className="ml-12 relative bg-gray-800/50 dark:bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 dark:border-gray-300/30 shadow-[0_0_25px_rgba(0,0,0,0.3)] dark:shadow-[0_0_25px_rgba(0,0,0,0.1)] p-6"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-indigo-600/5 dark:from-purple-500/20 dark:to-indigo-500/20" />
                  <div className="relative">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 dark:from-purple-600 dark:to-indigo-600 drop-shadow-[0_0_8px_rgba(147,51,234,0.3)] dark:drop-shadow-none">
                          {exp.title}
                        </h3>
                        <p className="text-purple-400 dark:text-purple-600 font-medium mt-1">{exp.company}</p>
                      </div>
                      <div className="mt-2 md:mt-0">
                        <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-purple-500/10 dark:bg-purple-500/20 text-purple-300 dark:text-purple-700 border border-purple-500/20 dark:border-purple-500/30">
                          {exp.period}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-300 dark:text-gray-700 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
} 