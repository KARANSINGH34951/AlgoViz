import { motion } from 'framer-motion';
import img from '../utils/Homeimgs/img.jpg'

function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-screen flex items-center justify-center dark:bg-gray-900 bg-cover bg-center"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="absolute inset-0 bg-black/20" />
      <div className="text-center px-4 relative z-10"> {/* Added z-index */}
        <motion.h1
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-6xl font-bold text-white mb-4 neon-text"
        >
          Visualize Algorithms with Sammy
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-200 mb-8"
        >
          Dive into interactive 3D visualizations guided by a sci-fi bot.
        </motion.p>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 text-lg rounded-full shadow-lg hover:shadow-blue-500/50 transition-all neon-button"
        >
          <a href="/visualizer" className="block">Start Exploring</a>
        </button>
      </div>
    </motion.section>
  );
}

export default HeroSection;