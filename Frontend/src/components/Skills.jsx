import { motion } from 'framer-motion';
import { 
  SiHtml5, SiCss, SiJavascript, SiReact,
  SiNodedotjs, SiExpress, SiMongodb, SiMongoose,
  SiGit, SiGithub, SiPostman, SiCanva, SiResend, SiJsonwebtokens
} from 'react-icons/si';
import { FaMobileAlt } from 'react-icons/fa';
import { VscTerminalBash } from 'react-icons/vsc';

const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: 'HTML5', icon: <SiHtml5 className="text-[#E34F26]" /> },
      { name: 'CSS3', icon: <SiCss className="text-[#1572B6]" /> },
      { name: 'JavaScript (ES6+)', icon: <SiJavascript className="text-[#F7DF1E]" /> },
      { name: 'React.js', icon: <SiReact className="text-[#61DAFB]" /> },
      { name: 'Responsive Design', icon: <FaMobileAlt className="text-gray-700 dark:text-gray-300" /> },
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: 'Node.js', icon: <SiNodedotjs className="text-[#339933]" /> },
      { name: 'Express.js', icon: <SiExpress className="text-gray-800 dark:text-white" /> },
      { name: 'REST APIs', icon: <SiNodedotjs className="text-gray-600" /> },
      { name: 'Auth (JWT)', icon: <SiJsonwebtokens className="text-[#FF0088]" /> },
    ]
  },
  {
    category: "Databases",
    skills: [
      { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" /> },
      { name: 'Mongoose', icon: <SiMongoose className="text-[#880000]" /> },
    ]
  },
  {
    category: "Tools & Tech",
    skills: [
      { name: 'Git & GitHub', icon: <SiGithub className="text-gray-800 dark:text-white" /> },
      { name: 'Postman', icon: <SiPostman className="text-[#FF6C37]" /> },
      { name: 'VS Code', icon: <SiReact className="text-blue-500" /> },
      { name: 'npm', icon: <VscTerminalBash className="text-[#CB3837]" /> },
      { name: 'Canva', icon: <SiCanva className="text-[#00C4CC]" /> },
      { name: 'Resend', icon: <SiResend className="text-black dark:text-white" /> },
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="text-primary">Skills</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((group, groupIdx) => (
            <motion.div 
              key={groupIdx}
              className="bg-white/50 dark:bg-black/20 p-8 rounded-3xl border border-gray-100 dark:border-gray-800"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
                {group.category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {group.skills.map((skill, idx) => (
                  <motion.div 
                    key={idx}
                    variants={itemVariants}
                    className="flex flex-col items-center justify-center p-4 bg-light dark:bg-dark rounded-xl hover:shadow-md hover:-translate-y-1 transition-all duration-300 border border-gray-100 dark:border-gray-800 text-center h-full"
                  >
                    <div className="text-4xl mb-3">{skill.icon}</div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
