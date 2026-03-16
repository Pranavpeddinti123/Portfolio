import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData';
import SkillCard from '../components/SkillCard';

const Skills = () => {
    return (
        <div className="min-h-screen pt-24 pb-16 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-6xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
                        Technical Skills
                    </h2>
                    <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
                        A comprehensive overview of my technical expertise and tools I use to build digital solutions.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {skills.map((skillGroup, index) => (
                            <SkillCard
                                key={skillGroup.category}
                                category={skillGroup.category}
                                items={skillGroup.items}
                                index={index}
                            />
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Skills;
