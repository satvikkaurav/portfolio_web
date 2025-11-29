import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectProps {
  data: {
    name: string;
    description: string[];
    image: string;
    link: string;
    technologies?: string[];
  };
  flag: boolean;
}

export function Project({ data, flag }: ProjectProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative grid grid-cols-1 md:grid-cols-2 gap-8 p-6 bg-gray-800 dark:bg-white rounded-xl overflow-hidden shadow-lg dark:shadow-md transition-colors duration-300"
    >
      {/* Project Image */}
      <motion.div
        className={`relative h-64 md:h-full rounded-lg overflow-hidden ${
          flag ? 'md:order-2' : ''
        }`}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src={data.image}
          alt={data.name}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </motion.div>

      {/* Project Info */}
      <div className={`flex flex-col justify-center ${flag ? 'md:order-1' : ''}`}>
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold text-white dark:text-gray-900 mb-4"
        >
          {data.name}
        </motion.h3>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="space-y-2 mb-6"
        >
          {data.description.map((desc, index) => (
            <p key={index} className="text-gray-300 dark:text-gray-700">
              {desc}
            </p>
          ))}
        </motion.div>

        {data.technologies && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-2 mb-6"
          >
            {data.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm bg-gray-700 dark:bg-gray-200 text-teal-400 dark:text-teal-600 rounded-full"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Link href={data.link} target="_blank">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors"
            >
              View Project
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
} 