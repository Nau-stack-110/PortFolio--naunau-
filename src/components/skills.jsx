import { motion } from "framer-motion";
import { skills } from "../data/skills";
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};
const Skills = () => {
  return (
    <div>
     <motion.section id="skills" className="py-12 bg-gray-50 dark:bg-[#0f172a]"
       initial="hidden"
       whileInView="visible"
       viewport={{ once: true, amount: 0.2 }}
       variants={containerVariants}
      >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.id} className="cursor-pointer flex flex-col p-4 justify-center items-center rounded-xl shadow-md dark:bg-gray-700 bg-white hover:shadow-lg transition"
              initial={{opacity:1, scale:0.8, y:50}}
              whileInView={{opacity:1, scale:1, y:0}}
              transition={{duration:0.5, delay:i * 0.05}}
              viewport={{once:true}}
              whileHover={{scale:1.2}}
              >
              <skill.Icon size={45} color={skill.color} />
              <p className="mt-3 text-sm font-medium text-gray-900 dark:text-white"> {skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
     </motion.section>  
    </div>
  );
}

export default Skills;
