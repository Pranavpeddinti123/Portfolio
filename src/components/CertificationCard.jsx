import { Award, Calendar, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const CertificationCard = ({ cert, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ x: 10 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-blue-500 flex items-start gap-4"
        >
            <div className="flex-shrink-0 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-full text-blue-600 dark:text-blue-400">
                <Award size={24} />
            </div>
            <div className="flex-grow">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">{cert.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{cert.issuer}</p>
                <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500">
                        <Calendar size={14} />
                        <span>{cert.date}</span>
                    </div>
                    {cert.link && cert.link !== '#' && (
                        <a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                        >
                            View Certificate <ExternalLink size={14} />
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default CertificationCard;
