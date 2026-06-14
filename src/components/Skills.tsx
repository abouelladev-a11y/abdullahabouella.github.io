import React from "react";
import { Layers, Database, Workflow, Terminal, Building2 } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { content, localizedSkills } from "../data/i18n";

export function Skills() {
  const { language } = useLanguage();
  const t = content[language].skillsView;
  const contentSkills = localizedSkills[language];

  const skillIcons = [
    <Building2
      className="text-[#8C6724]"
      size={24}
      strokeWidth={1.5}
      key="0"
    />,
    <Database className="text-[#8C6724]" size={24} strokeWidth={1.5} key="1" />,
    <Layers className="text-[#8C6724]" size={24} strokeWidth={1.5} key="2" />,
    <Workflow className="text-[#8C6724]" size={24} strokeWidth={1.5} key="3" />,
    <Terminal className="text-[#8C6724]" size={24} strokeWidth={1.5} key="4" />,
  ];

  const skillCategories = contentSkills.map((c, i) => ({
    ...c,
    icon: skillIcons[i],
  }));

  return (
    <section
      id="skills"
      className="py-36 sm:py-40 relative z-10 bg-[#F5F0E6]/72"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#B88A2C]/20 to-transparent"></div>
      <div className="max-w-[90rem] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20 sm:mb-24"
        >
          <span className="text-[#8C6724] text-[10px] tracking-[0.4em] uppercase font-bold mb-6 block">
            {t.badge}
          </span>
          <h2 className="text-5xl md:text-6xl font-serif text-[#17110b] mb-6 font-light leading-tight">
            {t.title[0]}{" "}
            <span className="text-gradient-gold italic">{t.title[1]}</span>
          </h2>
          <p className="text-base text-[#3E3329] max-w-3xl mx-auto font-medium tracking-wide leading-relaxed whitespace-pre-line">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-5">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                delay: idx * 0.08,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="glass-panel p-8 border border-[#B88A2C]/14 hover:border-[#B88A2C]/32 transition-all duration-700 group rounded-2xl flex flex-col"
            >
              <div className="mb-7 opacity-90 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-500">
                {category.icon}
              </div>
              <h3 className="text-[11px] font-extrabold text-[#17110b] mb-4 tracking-[0.2em] uppercase group-hover:text-[#8C6724] transition-colors duration-500 leading-relaxed">
                {category.title}
              </h3>
              {category.description ? (
                <p className="text-[#3E3329] font-medium text-xs leading-relaxed mb-7">
                  {category.description}
                </p>
              ) : null}
              <div className="mt-auto">
                <p className="text-[#8C6724] text-[9px] font-extrabold tracking-[0.25em] uppercase mb-4">
                  {t.toolsLabel || "Tools"}
                </p>
                <ul className="space-y-4">
                  {category.skills.map((skill: string, sIdx: number) => (
                    <li
                      key={sIdx}
                      className="text-[#3E3329] font-medium flex items-center gap-4 text-xs tracking-wide leading-relaxed"
                    >
                      <span className="w-4 h-px bg-[#B88A2C]/25 group-hover:bg-[#B88A2C]/55 transition-colors duration-500"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
