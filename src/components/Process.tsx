import React from "react";
import {
  Search,
  Database,
  GitBranch,
  LayoutDashboard,
  Bot,
} from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { content } from "../data/i18n";

export function Process() {
  const { language } = useLanguage();
  const t = content[language].process;
  const icons = [Search, Database, GitBranch, LayoutDashboard, Bot];

  return (
    <section
      id="process"
      className="py-32 sm:py-40 relative z-10 overflow-hidden"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#A97717]/26 to-transparent"></div>
      <div className="max-w-[90rem] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16 sm:mb-20"
        >
          <span className="text-[#714B0D] text-[10px] tracking-[0.4em] uppercase font-extrabold mb-6 block">
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

        <div className="relative">
          <div className="hidden lg:block absolute top-16 start-0 end-0 h-px bg-gradient-to-r from-transparent via-[#B88A2C]/35 to-transparent"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-4">
            {t.steps.map((step: any, idx: number) => {
              const Icon = icons[idx] || Search;
              return (
                <motion.article
                  key={step.label}
                  initial={{ opacity: 0, y: 38 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-70px" }}
                  transition={{
                    delay: idx * 0.08,
                    duration: 0.75,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="relative glass-panel rounded-[1.6rem] p-7 border border-[#B88A2C]/14 hover:border-[#B88A2C]/32 transition-all duration-700"
                >
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-[#714B0D] text-[10px] font-extrabold tracking-[0.3em] uppercase">
                      {step.label}
                    </span>
                    <div className="w-12 h-12 rounded-full bg-[#17110b] text-white flex items-center justify-center shadow-[0_18px_42px_rgba(57,39,16,0.18)]">
                      <Icon size={18} strokeWidth={1.5} />
                    </div>
                  </div>
                  <h3 className="text-xl font-serif font-light text-[#17110b] mb-4">
                    {step.title}
                  </h3>
                  <p className="text-[#3E3329] text-sm leading-relaxed font-medium whitespace-pre-line">
                    {step.text}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="inline-flex rounded-full border border-[#B88A2C]/22 bg-white/64 px-7 py-4 text-[#17110b] text-sm font-extrabold tracking-[0.12em] uppercase shadow-[0_18px_45px_rgba(54,40,19,0.08)]">
            {t.closing}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
