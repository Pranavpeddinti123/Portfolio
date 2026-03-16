import { motion } from 'framer-motion';
import { certifications } from '../data/portfolioData';
import CertificationCard from '../components/CertificationCard';

const Certifications = () => {
    return (
        <div className="min-h-screen pt-24 pb-16 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
                        Certifications
                    </h2>
                    <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
                        Professional certifications and achievements that validate my technical knowledge.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {certifications.map((cert, index) => (
                            <CertificationCard key={cert.id} cert={cert} index={index} />
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Certifications;
