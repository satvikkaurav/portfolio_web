import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from './ThemeProvider';
import Link from 'next/link';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const navItemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.replace('#', ''));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out bg-gray-900 dark:bg-white ${
        isScrolled 
          ? 'backdrop-blur-xl shadow-2xl shadow-purple-500/10 dark:shadow-gray-900/20 border-b border-purple-500/20 dark:border-gray-200' 
          : 'backdrop-blur-md border-b border-purple-500/10 dark:border-gray-200/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group cursor-pointer"
            >
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                SK
              </div>
              <motion.div
                className="absolute -inset-2 rounded-lg bg-gradient-to-r from-purple-500/30 via-indigo-500/30 to-purple-500/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item, i) => (
              <motion.div
                key={item.name}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={navItemVariants}
              >
                <Link href={item.href}>
                  <motion.span
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                    className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                      activeSection === item.href.replace('#', '')
                        ? 'text-purple-400 dark:text-purple-600'
                        : 'text-white dark:text-gray-900 hover:text-white dark:hover:text-gray-900'
                    }`}
                  >
                    <span className="relative z-10">{item.name}</span>
                    {activeSection === item.href.replace('#', '') && (
                      <>
                        <motion.div
                          layoutId="activeSection"
                          className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gradient-to-r from-purple-400 to-indigo-400"
                          initial={false}
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                        <motion.div
                          className="absolute inset-0 bg-purple-500/10 dark:bg-purple-500/20 rounded-lg"
                          layoutId="activeBg"
                          initial={false}
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      </>
                    )}
                    <motion.div
                      className="absolute inset-0 bg-white/5 dark:bg-gray-900/10 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ opacity: 1 }}
                    />
                  </motion.span>
                </Link>
              </motion.div>
            ))}
            
            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="relative ml-4 p-2.5 rounded-xl bg-gradient-to-br from-white/10 to-white/5 dark:from-gray-900/10 dark:to-gray-900/5 backdrop-blur-sm border border-white/20 dark:border-gray-300/20 text-white dark:text-gray-900 hover:text-white dark:hover:text-gray-900 hover:border-purple-500/30 dark:hover:border-purple-500/50 transition-all duration-300 overflow-hidden group"
            >
              <div className="relative z-10 text-lg">
                {theme === 'dark' ? '🌙' : '☀️'}
              </div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-indigo-500/20 to-purple-500/20"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative p-2.5 rounded-xl text-white dark:text-gray-900 hover:text-white dark:hover:text-gray-900 group bg-gradient-to-br from-white/10 to-white/5 dark:from-gray-900/10 dark:to-gray-900/5 backdrop-blur-sm border border-white/20 dark:border-gray-300/20 hover:border-purple-500/30 dark:hover:border-purple-500/50 transition-all duration-300"
          >
            <div className="relative z-10">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <motion.path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  variants={{
                    open: { d: "M6 18L18 6M6 6l12 12" },
                    closed: { d: "M4 6h16M4 12h16M4 18h16" }
                  }}
                  initial="closed"
                  animate={isMobileMenuOpen ? "open" : "closed"}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                />
              </svg>
            </div>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-indigo-500/20 to-purple-500/20 rounded-xl"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden overflow-hidden"
            >
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="py-4 space-y-2 border-t border-purple-500/10 dark:border-gray-200/50 bg-gradient-to-b from-gray-900/50 dark:from-white/50 to-transparent"
              >
                {navItems.map((item, i) => (
                  <Link key={item.name} href={item.href}>
                    <motion.span
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.3 }}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 relative ${
                        activeSection === item.href.replace('#', '')
                          ? 'text-purple-400 dark:text-purple-600 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 dark:from-purple-500/30 dark:to-indigo-500/30 border border-purple-500/20 dark:border-purple-500/30'
                          : 'text-white dark:text-gray-900 hover:text-white dark:hover:text-gray-900 hover:bg-white/10 dark:hover:bg-gray-900/10 border border-transparent hover:border-white/10 dark:hover:border-gray-300/10'
                      }`}
                    >
                      {item.name}
                      {activeSection === item.href.replace('#', '') && (
                        <motion.div
                          className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 rounded-r-full bg-gradient-to-b from-purple-400 to-indigo-400"
                          layoutId="mobileActive"
                          initial={false}
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </motion.span>
                  </Link>
                ))}
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.05, duration: 0.3 }}
                  onClick={() => {
                    toggleTheme();
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full mt-2 px-4 py-3 text-left text-base font-medium text-white dark:text-gray-900 hover:text-white dark:hover:text-gray-900 hover:bg-white/10 dark:hover:bg-gray-900/10 rounded-lg transition-all duration-300 border border-transparent hover:border-white/10 dark:hover:border-gray-300/10"
                >
                  <span className="text-lg mr-2">{theme === 'dark' ? '🌙' : '☀️'}</span>
                  {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}