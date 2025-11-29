import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Custom500() {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-[#1a1a1a] flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full text-center"
      >
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-8xl mb-8 font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-400 drop-shadow-[0_0_8px_rgba(248,113,113,0.3)]"
        >
          500
        </motion.div>
        <h1 className="text-3xl font-bold text-white mb-4">Server Error</h1>
        <p className="text-gray-400 mb-8">
          Oops! Something went wrong on our servers. Please try again later.
        </p>
        <div className="flex justify-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleRefresh}
            className="px-6 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-200 shadow-[0_0_15px_rgba(147,51,234,0.3)]"
          >
            Try Again
          </motion.button>
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 border border-purple-500 text-purple-400 rounded-lg hover:bg-purple-500/10 transition-colors"
            >
              Go Back Home
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
} 