import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { personalDetails } from '../data/portfolioData';

const SocialLinks = ({ className = "" }) => {
    return (
        <div className={`flex gap-4 ${className}`}>
            <motion.a
                href={personalDetails.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, color: "#3b82f6" }}
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
                <Github size={24} />
            </motion.a>
            <motion.a
                href={personalDetails.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, color: "#0a66c2" }}
                className="text-gray-600 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-500 transition-colors"
            >
                <Linkedin size={24} />
            </motion.a>
            <motion.a
                href={`mailto:${personalDetails.email}`}
                whileHover={{ y: -3, color: "#ef4444" }}
                className="text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors"
            >
                <Mail size={24} />
            </motion.a>
        </div>
    );
};

export default SocialLinks;
