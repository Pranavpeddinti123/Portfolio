import { motion } from 'framer-motion';
import { projects } from '../data/portfolioData';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
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
                        Featured Projects
                    </h2>
                    <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
                        A collection of projects that demonstrate my skills in full-stack development and problem-solving.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Projects;
