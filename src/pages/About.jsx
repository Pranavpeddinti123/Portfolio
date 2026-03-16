import { motion } from 'framer-motion';
import { education } from '../data/portfolioData';
import { GraduationCap } from 'lucide-react';

const About = () => {
    return (
        <div className="min-h-screen pt-24 pb-16 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
                        About Me
                    </h2>

                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg mb-12">
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                            I am a dedicated Computer Science student at KL University with a strong passion for Full Stack Web Development.
                            My journey in tech has equipped me with a solid foundation in Java and Python, along with modern web technologies
                            like React.js, Node.js, and Tailwind CSS.
                        </p>
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                            I enjoy solving complex problems and building intuitive user interfaces. I am constantly learning and exploring
                            new technologies to stay ahead in the ever-evolving tech landscape. When I'm not coding, I'm exploring data science
                            concepts or working on personal projects to refine my skills.
                        </p>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
                        <GraduationCap className="text-blue-600" /> Education
                    </h3>

                    <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                        {education.map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                            >
                                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-blue-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                    <GraduationCap size={20} className="text-white" />
                                </div>
                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
                                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                                        <h4 className="font-bold text-gray-900 dark:text-white text-lg">{edu.degree}</h4>
                                        <span className="text-sm text-blue-600 dark:text-blue-400 font-medium bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full">
                                            {edu.year}
                                        </span>
                                    </div>
                                    <div className="text-gray-600 dark:text-gray-400 font-medium mb-2">{edu.institution}</div>
                                    <p className="text-gray-500 dark:text-gray-500 text-sm">{edu.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
