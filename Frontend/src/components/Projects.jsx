import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaPlay } from 'react-icons/fa';

const projectsData = [
  {
    title: 'Digital Kohat - Smart City Platform',
    description: 'A comprehensive MERN platform centralizing City services with real-time Socket.IO notifications, multi-level dashboards, and Cloudinary asset management.',
    image: '/P1Thumbnail.png',
    video: 'https://res.cloudinary.com/djnte3lgt/video/upload/v1773295722/FirstProject_hgzys1.mp4',
    tech: ['MERN Stack', 'Socket.io', 'Cloudinary', 'JWT', 'Argon2'],
    github: 'https://github.com/Humnaa-Nadeem/Digital-Kohat.git',
    live: 'https://digital-kohat.vercel.app/'
  },
  {
    title: 'Phone-Zone 📱',
    description: 'A comprehensive MERN stack application for mobile retail featuring brand-wise browsing, functional shopping cart, and a dedicated administrative dashboard.',
    image: '/P2Thumbnail.png',
    video: 'https://res.cloudinary.com/djnte3lgt/video/upload/v1773296715/SecondProject_r8lfqo.mp4',
    tech: ['MERN Stack', 'React', 'Node.js', 'MongoDB', 'Zod', 'Multer'],
    github: 'https://github.com/awaisanwarcode/Phone-Zone.git'
  },
  {
    title: "Restaurant Management System (Khiva's Restaurant) 🍴",
    description: "A full-stack restaurant management platform with interactive menu browsing, real-time cart management, and a comprehensive admin dashboard for order tracking.",
    image: "/P3Thumbnail.png",
    video: "https://res.cloudinary.com/djnte3lgt/video/upload/v1773296858/ThirdProject_jdlzgo.mp4",
    tech: ["MERN Stack", "React", "Node.js", "MongoDB", "Argon2", "JWT"],
    github: "https://github.com/awaisanwarcode/Khiva-s-Resturant.git"
  },
  {
    title: 'Personal Portfolio',
    description: 'A production-ready, highly responsive developer portfolio built using the MERN stack. It features modern design aesthetics like dark mode, glassmorphism, and Framer Motion animations to showcase professional projects. The platform includes integrated contact forms and a clean, visually striking interface designed for high-impact personal branding.',
    image: '/P4Thumbnail.png',
    video: 'https://res.cloudinary.com/djnte3lgt/video/upload/v1773296336/FourthProject_rj7d8x.mp4',
    tech: ['React.js', 'Framer Motion', 'React Icons', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/awaisanwarcode/Protfolio.git'
  }
];

const Projects = () => {
  const [playingIndex, setPlayingIndex] = useState(null);

  return (
    <section id="projects" className="py-20 bg-light dark:bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured <span className="text-primary">Projects</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 italic">
            * Note: Videos may take a few moments to load depending on your connection.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projectsData.map((project, idx) => (
            <motion.div
              key={idx}
              className="bg-white dark:bg-darker overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <div className="relative aspect-video overflow-hidden">
                <div className="absolute inset-0 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                {project.video && playingIndex === idx ? (
                  <video
                    src={project.video}
                    autoPlay
                    muted
                    playsInline
                    onEnded={() => setPlayingIndex(null)}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="relative w-full h-full group/media">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                    />
                    {project.video && (
                      <button
                        onClick={() => setPlayingIndex(idx)}
                        className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover/media:opacity-100 transition-opacity duration-300 z-20"
                      >
                        <div className="w-16 h-16 flex items-center justify-center bg-primary text-white rounded-full transform scale-90 group-hover/media:scale-100 transition-transform duration-300">
                          <FaPlay size={24} className="ml-1" />
                        </div>
                      </button>
                    )}
                  </div>
                )}
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary/10 text-primary dark:bg-primary/20 text-xs font-semibold rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors font-medium"
                  >
                    <FaGithub size={20} />
                    <span>Code</span>
                  </a>
                  {
                    (project.live)
                      ?
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors font-medium"
                      >
                        <FaExternalLinkAlt size={18} />
                        <span>Live Demo</span>
                      </a>
                      :
                      <></>
                  }
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a
            href="https://github.com/awaisanwarcode"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center space-x-2 px-8 py-3 bg-white dark:bg-dark border border-gray-300 dark:border-gray-700 hover:border-primary dark:hover:border-primary text-gray-800 dark:text-white rounded-full font-medium transition-transform transform hover:scale-105"
          >
            <span>View All on GitHub</span>
            <FaGithub />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
