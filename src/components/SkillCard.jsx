import { motion } from 'framer-motion';

const SkillCard = ({ category, items, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
        >
            <h3 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-4 border-b border-gray-100 dark:border-gray-700 pb-2">
                {category}
            </h3>
            <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                    <span
                        key={item}
                        className="px-3 py-1.5 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-default"
                    >
                        {item}
                    </span>
                ))}
            </div>
        </motion.div>
    );
};

export default SkillCard;
