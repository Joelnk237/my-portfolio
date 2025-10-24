import { motion } from "framer-motion";

export default function SkillsSection() {
	//const skills = ['JavaScript', 'TypeScript', 'React', 'Node.js', 'Next.js', 'TailwindCSS', 'PostgreSQL', 'GraphQL', 'Git'];
	const skills = [
    'JavaScript',
    'TypeScript',
    'React',
    'Node.js',
    'Next.js',
    'TailwindCSS',
    'PostgreSQL',
	'GraphQL',
    'Git'
  ];

  // Animation "container" (coordonne les enfants)
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1, // délai entre chaque carte
      },
    },
  };

  // Animation des cartes individuelles
  const item = {
    hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 150, damping: 10 },
  },
  };

	return (
		<>
		<section id="skills" className="bg-gray-900/50 py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Titre animé */}
        <motion.h2
          className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Skills & Technologies
        </motion.h2>

        {/* Grille animée */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, i) => (
            <motion.div
              key={skill}
              variants={item}
              className="bg-gray-700 p-4 sm:p-6 rounded-lg shadow-sm text-center text-sm sm:text-base text-gray-200 hover:shadow-md hover:shadow-gray-500 transition-all"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
		</>
	);
}
