import { motion } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';

const profiles = [
  {
    platform: 'LeetCode',
    username: 'satvik-kaurav',
    stats: '500+ problems solved',
    link: 'https://leetcode.com/satvik-kaurav',
    color: 'from-orange-500 to-yellow-500',
  },
  {
    platform: 'GeeksforGeeks',
    username: 'satvik-kaurav',
    // stats: '500+ problems solved',
    link: 'https://www.geeksforgeeks.org/profile/satvikkaurav10',
    color: 'from-green-500 to-emerald-500',
  },
  {
    platform: 'GitHub',
    username: 'satvikkaurav',
    stats: 'Open-source projects & experiments',
    link: 'https://github.com/satvikkaurav',
    color: 'from-slate-700 to-slate-900',
  },
];

export function Profiles() {
  return (
    <AnimatedSection className="py-20 bg-gray-900 dark:bg-gray-50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white dark:text-gray-900 mb-12">Coding Profiles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {profiles.map((profile, index) => (
            <motion.a
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              key={profile.platform}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`block p-6 rounded-xl bg-gradient-to-br ${profile.color} transform transition-all duration-300 hover:shadow-xl`}
            >
              <h3 className="text-2xl font-bold text-white mb-2">{profile.platform}</h3>
              <p className="text-white opacity-90 mb-1">@{profile.username}</p>
              <p className="text-white opacity-75">{profile.stats}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
} 