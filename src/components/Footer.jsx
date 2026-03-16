import SocialLinks from './SocialLinks';

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-gray-900 py-8 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                    © {new Date().getFullYear()} Pranav Peddinti. All rights reserved.
                </p>
                <SocialLinks />
            </div>
        </footer>
    );
};

export default Footer;
