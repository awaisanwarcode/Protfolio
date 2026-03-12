import { FaGithub, FaLinkedin, FaTwitter, FaHeart, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-darker border-t border-gray-200 dark:border-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <span className="text-2xl font-bold text-primary dark:text-white tracking-tighter">
              Dev<span className="text-dark dark:text-primary">Portfolio</span>
            </span>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Building the future of the web, one component at a time.
            </p>
          </div>

          <div className="flex space-x-6">
            <a 
              href="https://github.com/awaisanwarcode" 
              target="_blank" 
              rel="noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-light dark:bg-dark text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition-all shadow-sm"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a 
              href="https://wa.me/+923173441884" 
              target="_blank" 
              rel="noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-light dark:bg-dark text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition-all shadow-sm"
              aria-label="Whatsapp"
            >
              <FaWhatsapp size={20} />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-light dark:bg-dark text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition-all shadow-sm"
              aria-label="Twitter"
            >
              <FaTwitter size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Awais Anwar. All rights reserved.
          </p>
          <p className="text-gray-600 dark:text-gray-500 text-sm flex items-center">
            Made with <FaHeart className="mx-1 text-red-500" /> globally
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
