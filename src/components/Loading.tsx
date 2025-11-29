import { motion } from 'framer-motion';

export function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-[#1a1a1a] flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center"
      >
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full mx-auto mb-4 shadow-[0_0_15px_rgba(147,51,234,0.3)]"
        />
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white text-lg font-medium"
        >
          Loading...
        </motion.p>
      </motion.div>
    </div>
  );
} 