import { motion } from 'framer-motion';
import { FEATURES } from '../utils/constants';

function FeatureSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-blue-400 neon-text mb-12"
        >
          Why Visualizer?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="p-6 bg-gray-600 dark:bg-gray-600 rounded-lg shadow-lg hover:shadow-blue-500/70 transition-all"
            >
              <motion.img
                src={feature.image}
                alt={feature.title}
                className="w-20 h-20 mx-auto mb-4 rounded-full neon-glow"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              <h3 className="text-xl font-semibold text-blue-300 neon-text mb-2 text-center">{feature.title}</h3>
              <p className="text-gray-200 mb-4">{feature.description}</p>
              <ul className="list-disc pl-5 text-gray-300">
                {feature.subpoints.map((point, idx) => (
                  <li key={idx} className="text-sm">{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;