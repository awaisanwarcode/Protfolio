import { motion } from 'framer-motion';

const experienceData = [
  {
    year: '2026',
    title: 'Full Stack Developer Intern',
    company: 'KUST Incubation Center [KIC] (Collaborating with Team DSCH)',
    description: 'Currently interning and collaborating with the DSCH (Digital Smart Cities Hub) team to build an extensive, large-scale full-stack project. Focused on scalable backend architecture, multi-role authentication, and clean UI design for community services.',
  },
  {
    year: '2025',
    title: 'Full Stack Developer Training',
    company: '6-Month Intensive Learning',
    description: 'Expanded skills into full stack development focusing on complete application architecture. Practiced React.js, Node.js, Express, MongoDB, and built JWT-based authentication systems.',
  },
  {
    year: '2025',
    title: 'Self-Taught Web Developer',
    company: 'Started My Journey',
    description: 'Developed a solid foundation in HTML, CSS, and JavaScript. Quickly progressed from basic static websites to interactive web applications through consistent project-based learning.',
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white/50 dark:bg-black/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience & <span className="text-primary">Journey</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative border-l-2 border-primary/30 ml-3 md:ml-0 md:pl-0">
          {experienceData.map((item, idx) => (
            <motion.div
              key={idx}
              className={`mb-12 relative ${idx === experienceData.length - 1 ? 'mb-0' : ''}`}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              {/* Timeline Dot */}
              <div className="absolute w-6 h-6 bg-primary rounded-full -left-[1.05rem] border-4 border-light dark:border-dark top-1"></div>

              <div className="pl-8">
                <span className="text-sm font-bold text-secondary tracking-wider uppercase mb-1 block">
                  {item.year}
                </span>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-1">
                  {item.title}
                </h3>
                <h4 className="text-lg font-medium text-gray-600 dark:text-gray-400 mb-4">
                  {item.company}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed bg-white dark:bg-darker p-6 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
