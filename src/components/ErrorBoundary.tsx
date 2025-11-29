import React, { Component, ErrorInfo, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = { hasError: false, error: null };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  private handleRefresh = () => {
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-[#232526] to-[#414345] flex items-center justify-center px-4 font-sans">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="max-w-lg w-full bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-10 text-center border border-white/20"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              className="inline-block mb-6"
            >
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="mx-auto">
                <circle cx="32" cy="32" r="32" fill="#F87171" fillOpacity="0.15" />
                <path d="M32 18v18" stroke="#F87171" strokeWidth="3" strokeLinecap="round" />
                <circle cx="32" cy="44" r="2" fill="#F87171" />
              </svg>
            </motion.div>
            <h1 className="text-3xl font-extrabold text-white mb-2 tracking-tight" style={{ fontFamily: 'Inter, sans-serif' }}>
              Something went wrong
            </h1>
            <p className="text-lg text-gray-200 mb-6">
              {this.state.error?.message || 'An unexpected error occurred. Please try refreshing the page.'}
            </p>
            <motion.button
              whileHover={{ scale: 1.04, backgroundColor: '#14b8a6', color: '#fff' }}
              whileTap={{ scale: 0.97 }}
              onClick={this.handleRefresh}
              className="px-7 py-3 bg-gradient-to-r from-teal-400 to-cyan-500 text-white font-semibold rounded-xl shadow-lg hover:from-teal-500 hover:to-cyan-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2"
            >
              Refresh Page
            </motion.button>
          </motion.div>
        </div>
      );
    }
    return this.props.children;
  }
} 