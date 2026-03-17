import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';
import SocialLinks from '../components/SocialLinks';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle | sending | success | error

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            await emailjs.sendForm(
                'service_v9j3h8v',
                'template_gj6x3gn',
                formRef.current,
                'nlAM_66u0FQMHxje4'
            );
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setStatus('idle'), 5000);
        } catch (error) {
            console.error('EmailJS Error:', error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

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
                        Get In Touch
                    </h2>
                    <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
                        Have a project in mind or want to discuss new opportunities? I'd love to hear from you.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full">
                                            <Mail size={20} />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                                            <a href={`mailto:${personalDetails.email}`} className="text-gray-900 dark:text-white font-medium hover:text-blue-600 transition-colors">
                                                {personalDetails.email}
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full">
                                            <Phone size={20} />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                                            <a href={`tel:${personalDetails.phone}`} className="text-gray-900 dark:text-white font-medium hover:text-blue-600 transition-colors">
                                                {personalDetails.phone}
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full">
                                            <MapPin size={20} />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                                            <p className="text-gray-900 dark:text-white font-medium">
                                                {personalDetails.location}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 pt-8 border-t border-gray-100 dark:border-gray-700">
                                    <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-4">Connect with me</h4>
                                    <SocialLinks />
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <form
                            ref={formRef}
                            onSubmit={handleSubmit}
                            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md space-y-6"
                        >
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    id="message"
                                    required
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"
                                    placeholder="Your message..."
                                />
                            </div>

                            {/* Status Messages */}
                            {status === 'success' && (
                                <div className="flex items-center gap-2 text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                                    <CheckCircle size={18} />
                                    <span className="text-sm font-medium">Message sent successfully!</span>
                                </div>
                            )}
                            {status === 'error' && (
                                <div className="flex items-center gap-2 text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                                    <AlertCircle size={18} />
                                    <span className="text-sm font-medium">Failed to send message. Please try again.</span>
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="w-full py-3 px-6 rounded-lg bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white font-medium flex items-center justify-center gap-2 transition-colors shadow-lg shadow-blue-500/30"
                            >
                                {status === 'sending' ? (
                                    <>Sending...</>
                                ) : (
                                    <>Send Message <Send size={18} /></>
                                )}
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
