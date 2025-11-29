import { motion } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';
import Image from 'next/image';

const certifications = [
  {
    title: 'Accelerated Computer Science Fundamentals',
    organization: 'Coursera',
    date: 'Certification',
    image: '/images/certifications/cs-fundamentals.png',
    link: '#',
  },
  {
    title: 'Mathematics for Machine Learning',
    organization: 'Coursera',
    date: 'Certification',
    image: '/images/certifications/math-ml.png',
    link: '#',
  },
];

export function Certifications() {
  return (
    <AnimatedSection className="py-20 bg-gray-900 dark:bg-gray-50 transition-colors duration-300" id="certifications">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-white dark:text-gray-900 mb-2"
        >
          Certifications
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-20 h-1 bg-teal-500 dark:bg-teal-600 mx-auto mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.a
              key={cert.title}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="block bg-gray-800 dark:bg-white rounded-xl overflow-hidden shadow-lg dark:shadow-md hover:shadow-2xl dark:hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white dark:text-gray-900 mb-2">
                  {cert.title}
                </h3>
                <p className="text-teal-400 dark:text-teal-600 mb-1">{cert.organization}</p>
                <p className="text-gray-400 dark:text-gray-600 text-sm">{cert.date}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
} 