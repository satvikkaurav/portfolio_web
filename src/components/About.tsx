import { motion } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';
import Image from 'next/image';

export function About() {
  return (
    <AnimatedSection className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 dark:from-gray-50 dark:to-gray-100 transition-colors duration-300" id="about">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-white dark:text-gray-900 mb-2 drop-shadow-[0_0_8px_rgba(147,51,234,0.3)] dark:drop-shadow-none"
        >
          About Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-24 h-1.5 bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-500 dark:to-indigo-500 mx-auto mb-12 rounded-full shadow-[0_0_15px_rgba(147,51,234,0.3)] dark:shadow-[0_0_15px_rgba(147,51,234,0.2)]"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-gray-800/50 dark:bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 dark:border-gray-300/30 shadow-[0_0_25px_rgba(0,0,0,0.3)] dark:shadow-[0_0_25px_rgba(0,0,0,0.1)]"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-indigo-600/10 dark:from-purple-500/20 dark:to-indigo-500/20" />
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center p-8 md:p-12">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative w-64 h-64 mx-auto"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 blur-2xl opacity-50 animate-pulse" />
              <div className="relative w-full h-full rounded-full border-4 border-white/10 overflow-hidden shadow-[0_0_30px_rgba(147,51,234,0.3)]">
                <Image
                  src="/images/profile.jpg"
                  alt="Profile"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full hover:scale-110 transition-transform duration-500"
                />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 drop-shadow-[0_0_8px_rgba(147,51,234,0.3)]">
                Software Engineer · Backend, Computer Vision & Full-Stack
              </h3>

              {/* Summary */}
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-gray-300 dark:text-gray-700 leading-relaxed text-lg"
              >
                I&apos;m a Software Engineer at Kloudspot, where I work on low-latency computer vision systems,
                facial recognition, and large-scale backend services. I enjoy designing systems that are both
                performant and reliable, from real-time streaming pipelines to production-ready APIs.
              </motion.p>

              {/* Education */}
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-gray-300 dark:text-gray-700 leading-relaxed text-lg"
              >
                I completed my B.Tech in Information Technology (Artificial Intelligence &amp; Robotics) from
                Madhav Institute of Technology and Science, Gwalior. During this time I focused on data
                structures &amp; algorithms, computer vision, and machine learning, while also building
                full-stack applications and research-oriented projects.
              </motion.p>

              {/* What I work with */}
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-gray-300 dark:text-gray-700 leading-relaxed text-lg"
              >
                My core toolkit includes Python, C++, JavaScript/TypeScript, React/Next.js, Node.js, AWS,
                OpenCV, PyTorch, OpenVINO, GStreamer and DLStreamer. I love working at the intersection
                of backend engineering, distributed systems, and applied AI.
              </motion.p>

              {/* Stats / Highlights */}
              <div className="grid grid-cols-2 gap-6 pt-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-4 bg-gray-800 dark:bg-gray-100 rounded-lg"
                >
                  <h4 className="text-teal-500 dark:text-teal-600 text-lg font-semibold">Experience</h4>
                  <p className="text-white dark:text-gray-900 text-2xl font-bold">2+ Years</p>
                  <p className="mt-1 text-sm text-gray-400 dark:text-gray-600">
                    Kloudspot &amp; Triluxo · Computer Vision &amp; Full‑Stack
                  </p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-4 bg-gray-800 dark:bg-gray-100 rounded-lg"
                >
                  <h4 className="text-teal-500 dark:text-teal-600 text-lg font-semibold">Problem Solving</h4>
                  <p className="text-white dark:text-gray-900 text-2xl font-bold">500+ Problems</p>
                  <p className="mt-1 text-sm text-gray-400 dark:text-gray-600">
                    Across LeetCode &amp; GeeksforGeeks
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
} 