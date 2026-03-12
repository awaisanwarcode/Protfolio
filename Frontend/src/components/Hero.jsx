import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl -z-10 animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center gap-12">
        <motion.div 
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-400 mb-2">
            Hello, I am
          </motion.h2>
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-4 tracking-tight"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Awais Anwar
          </motion.h1>
          <motion.h3 
            className="text-2xl md:text-4xl font-bold text-gradient mb-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Full Stack Web Developer
          </motion.h3>
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Building scalable web applications and digital platforms that solve real-world problems.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <a 
              href="#projects" 
              className="px-8 py-3 bg-primary hover:bg-blue-600 text-white rounded-full font-medium transition-transform transform hover:scale-105 shadow-lg shadow-primary/30"
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 bg-white dark:bg-dark border border-gray-300 dark:border-gray-700 hover:border-primary dark:hover:border-primary text-gray-800 dark:text-white rounded-full font-medium transition-transform transform hover:scale-105"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        <motion.div 
          className="flex-1 flex justify-center mt-10 md:mt-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Profile Image */}
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-[3rem] rotate-6 opacity-70 animate-pulse"></div>
            <img 
              src="/ProfileImg.jpeg" 
              alt="Awais Anwar" 
              className="relative rounded-[3rem] object-cover w-full h-full border-4 border-white dark:border-dark shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
