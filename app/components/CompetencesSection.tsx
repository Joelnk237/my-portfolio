'use client';

import { motion, easeOut } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { useTranslation } from "@/app/hooks/useTranslation";  // for Translation
import {
	faCogs,
	faDatabase,
	faCloud,
	faShieldAlt
} from "@fortawesome/free-solid-svg-icons";

export default function CompetencesSection() {
    const t = useTranslation(); // für Traduction

    // Animation konfiguration
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: easeOut,
      },
    }),
  };

  // Die Sektionen Namen in eine Tabelle speichern
  type SectionItem = [string, string[]];

    type Section = {
    icon: IconDefinition;
    title: string;
    items: SectionItem[];
    };
  const sections : Section[] = [
    {
      icon: faCogs,
      title: "API & Architecture",
      items: [
        ["API Gateway", ["RESTful API Design", "CRUD Operations", "API Versioning"]],
        ["Architecture", ["MVC Architecture", "Layered Architecture", "API Versioning"]],
      ],
    },
    {
      icon: faDatabase,
      title: "Data & Databases",
      items: [
        ["Database Modeling", ["Database Modeling", "Database Normalization", "ORM"]],
        ["SQL Optimization", ["SQL Query Optimization", "Data Validation", "Transactions Management"]],
      ],
    },
    {
      icon: faCloud,
      title: "Deployment & DevOps",
      items: [
        ["Containers", ["Containerization (Docker)", "Continuous Deployment"]],
        ["Testing & CI/CD", ["Unit & Integration Testing", "Continuous Integration"]],
      ],
    },
    {
      icon: faShieldAlt,
      title: "Security",
      items: [
        ["Auth", ["Authentication & Authorization", "JWT & OAuth2"]],
        ["API Security", ["Secure API Design (HTTPS, CORS)", "Input Sanitization"]],
      ],
    },
  ];



	return (
        <>
        <section id="competences" className="py-20 px-4 bg-gray-900/50" >
      <div className="max-w-6xl mx-auto">
        {/* Title mit ANimation */}
        <motion.h2
          className="text-3xl font-bold mb-12 text-center text-gray-100"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          {/*Behind the Code*/}{t.competences.title}
        </motion.h2>

        {/* Loop über die Sektionen */}
        <div className="grid grid-cols-1 gap-16">
          {sections.map((section, i) => (
            <motion.div
              key={section.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
            >
              <h3 className="text-xl font-semibold mb-6 text-green-400 flex items-center gap-2">
                <FontAwesomeIcon icon={section.icon} className="w-5 h-5" /> {section.title}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {section.items.map(([subtitle, list], j) => (
                  <motion.div
                    key={subtitle as string}
                    className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 hover:shadow-lg hover:shadow-green-500/10 transition-all"
                    variants={fadeUp}
                    custom={j + i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <h4 className="text-lg font-semibold text-gray-300 mb-2">
                      {subtitle}
                    </h4>
                    <ul className="mt-2 space-y-2 text-gray-400">
                      {list.map((item, k) => (
                        <li key={k}>- {item}</li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    </>



    	);
}