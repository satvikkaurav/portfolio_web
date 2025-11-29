import { motion } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';

const skills = [
  { name: 'React/Next.js', level: 90 },
  { name: 'TypeScript', level: 85 },
  { name: 'Node.js', level: 80 },
  { name: 'Python', level: 85 },
  { name: 'MongoDB', level: 75 },
  { name: 'AWS', level: 50 },
  { name: 'Pytorch', level: 80 },
  { name: 'GStreamer', level: 80 },
  { name: 'DLStreamer', level: 80 },
  { name: 'Computer Vision', level: 80 },
  { name: 'Machine Learning', level: 80 },
  { name: 'Deep Learning', level: 80 },
];

export function Skills() {
  return (
    <AnimatedSection className="py-20 bg-gray-900 dark:bg-gray-50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white dark:text-gray-900 mb-12">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex justify-between text-white dark:text-gray-900">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="h-3 bg-gray-700 dark:bg-gray-300 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-teal-500 dark:bg-teal-600"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
} 