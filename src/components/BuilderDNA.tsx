import React from "react";
import {
  Brain,
  Database,
  Network,
  Sparkles,
  TerminalSquare,
} from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { content } from "../data/i18n";

export function BuilderDNA() {
  const { language } = useLanguage();
  const t = content[language].builder;
  const icons = [Brain, Database, Network, Sparkles];

  return (
    <section
      id="builder-dna"
      className="py-28 sm:py-36 relative z-10 bg-[#F9F4EB]/64 border-y border-[#B88A2C]/12 overflow-hidden"
    >
      <div className="absolute top-[-18%] start-[-10%] w-[520px] h-[520px] rounded-full bg-[#B88A2C]/10 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-22%] end-[-8%] w-[620px] h-[620px] rounded-full bg-white/46 blur-[130px] pointer-events-none"></div>

      <div className="max-w-[90rem] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="text-[#714B0D] text-[10px] tracking-[0.4em] uppercase font-extrabold mb-6 block">
              {t.badge}
            </span>
            <h2 className="text-5xl md:text-6xl font-serif text-[#17110b] mb-7 font-light leading-tight">
              {t.title[0]}{" "}
              <span className="text-gradient-gold italic">{t.title[1]}</span>
            </h2>
            <p className="text-[#33281E] text-lg leading-relaxed font-medium max-w-xl whitespace-pre-line">
              {t.subtitle}
            </p>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.16 }}
              className="mt-10 glass-panel rounded-[1.7rem] p-6 border border-[#B88A2C]/16 overflow-hidden"
            >
              <div className="flex items-center gap-3 mb-5 text-[#714B0D]">
                <TerminalSquare size={18} />
                <span className="text-[10px] font-extrabold uppercase tracking-[0.28em]">
                  Builder Console
                </span>
              </div>
              <div className="space-y-3 font-mono text-[12px] leading-relaxed">
                <p className="text-[#2E251D]">
                  <span className="text-[#8C6724]">input:</span>{" "}
                  {t.console.input}
                </p>
                <p className="text-[#2E251D]">
                  <span className="text-[#8C6724]">thinking:</span>{" "}
                  {t.console.thinking}
                </p>
                <p className="text-[#2E251D]">
                  <span className="text-[#8C6724]">output:</span>{" "}
                  {t.console.output}
                </p>
              </div>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {t.cards.map((card: any, idx: number) => {
              const Icon = icons[idx] || Sparkles;
              return (
                <motion.article
                  key={card.title}
                  initial={{ opacity: 0, y: 34 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-70px" }}
                  transition={{
                    delay: idx * 0.08,
                    duration: 0.75,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="glass-panel rounded-[1.7rem] p-7 sm:p-8 border border-[#B88A2C]/14 hover:border-[#B88A2C]/32 transition-all duration-700 group"
                >
                  <div className="w-13 h-13 rounded-full bg-white/70 border border-[#B88A2C]/18 flex items-center justify-center text-[#8C6724] mb-7 shadow-[0_14px_32px_rgba(74,53,19,0.08)] group-hover:-translate-y-1 transition-transform duration-500">
                    <Icon size={22} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-serif font-light text-[#17110b] mb-4 group-hover:text-[#714B0D] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-[#3E3329] text-sm leading-relaxed font-medium whitespace-pre-line">
                    {card.text}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
