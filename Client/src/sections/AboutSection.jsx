import { motion } from 'framer-motion';

function AboutSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-20 bg-gray-900 dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-blue-400 mb-6">About Visualizer</h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Visualizer makes learning algorithms fun and intuitive. Join Sammy, our 3D sci-fi bot, to explore complex concepts through interactive visualizations.
        </p>
      </div>
    </motion.section>
  );
}

export default AboutSection;