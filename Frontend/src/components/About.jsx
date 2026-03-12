import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white/50 dark:bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About <span className="text-primary">Me</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-light dark:bg-dark p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 text-center">
                <h3 className="text-4xl font-bold text-primary mb-2">1+</h3>
                <p className="text-gray-600 dark:text-gray-400 font-medium">Years Experience</p>
              </div>
              <div className="bg-light dark:bg-dark p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 text-center">
                <h3 className="text-4xl font-bold text-secondary mb-2">Full</h3>
                <p className="text-gray-600 dark:text-gray-400 font-medium">Stack Expertise</p>
              </div>
              <div className="bg-light dark:bg-dark p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 text-center col-span-2">
                <h3 className="text-4xl font-bold text-green-500 mb-2">Multiple</h3>
                <p className="text-gray-600 dark:text-gray-400 font-medium">Robust Systems Built</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4">A Passionate Full Stack Web Developer</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I am a passionate Full Stack Web Developer who enjoys building modern, scalable, and user-friendly web applications. My journey into development started with curiosity about how websites work, which quickly grew into a strong passion for creating digital solutions.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I have experience working with both frontend and backend technologies, allowing me to build complete web platforms from scratch. I enjoy solving complex problems, improving user experience, and designing systems that are efficient and maintainable.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Currently, I am focused on developing full-stack applications, learning advanced system design, and exploring modern technologies that improve performance and scalability.
            </p>
            
            <a 
              href="#contact" 
              className="inline-block px-8 py-3 bg-primary hover:bg-blue-600 text-white rounded-full font-medium transition-colors"
            >
              Let's Talk
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
