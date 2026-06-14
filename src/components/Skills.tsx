import React from "react";
import { Layers, Database, Workflow, Terminal, Building2 } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { content, localizedSkills } from "../data/i18n";

export function Skills() {
  const { language } = useLanguage();
  const t = content[language].skillsView;
  const contentSkills = localizedSkills[language];
  const iconMap = [Building2, Database, Layers, Workflow, Terminal];

  return (
    <section id="skills" className="py-36 sm:py-40 relative z-10 bg-[#F4EDDF]">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#B88A2C]/20 to-transparent" />
      <div className="max-w-[92rem] mx-auto px-6 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} className="grid grid-cols-1 lg:grid-cols-[0.75fr_1.25fr] gap-8 lg:gap-16 mb-20 sm:mb-24 items-end">
          <div>
            <span className="text-[#8C6724] text-[10px] tracking-[0.4em] uppercase font-bold mb-6 block">{t.badge}</span>
            <h2 className="text-5xl md:text-6xl font-serif text-[#12100C] font-light leading-tight">
              {t.title[0]} <span className="text-gradient-gold italic">{t.title[1]}</span>
            </h2>
          </div>
          <p className="text-base text-[#3E3329] max-w-3xl font-medium tracking-wide leading-relaxed whitespace-pre-line">{t.subtitle}</p>
        </motion.div>

        <div className="rounded-[2.2rem] border border-[#8A641E]/16 bg-[#FFF9EF]/78 shadow-[0_30px_80px_rgba(54,40,19,0.10)] overflow-hidden">
          {contentSkills.map((category, idx) => {
            const Icon = iconMap[idx] || Layers;
            return (
              <motion.div key={category.title} initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ delay: idx * 0.06, duration: 0.7, ease: [0.16, 1, 0.3, 1] }} className="grid grid-cols-1 lg:grid-cols-[0.36fr_0.35fr_1fr] gap-5 lg:gap-8 p-6 sm:p-8 border-b last:border-b-0 border-[#8A641E]/12 hover:bg-white/45 transition-all duration-500">
                <div className="flex items-center gap-4">
                  <div className="w-13 h-13 rounded-2xl bg-[#12100C] text-white flex items-center justify-center shadow-[0_16px_36px_rgba(18,16,12,0.16)]">
                    <Icon size={22} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-mono text-[#8C6724] text-xs mb-1">0{idx + 1}</p>
                    <h3 className="text-lg sm:text-xl font-serif font-light text-[#12100C]">{category.title}</h3>
                  </div>
                </div>
                <p className="text-[#3E3329] font-medium text-sm leading-relaxed">{category.description}</p>
                <div className="flex flex-wrap gap-2 lg:justify-end items-start">
                  {category.skills.map((skill: string) => (
                    <span key={skill} className="text-[10px] font-black tracking-[0.14em] uppercase text-[#493D31] bg-white/72 border border-[#8A641E]/18 px-4 py-2 rounded-full">{skill}</span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
