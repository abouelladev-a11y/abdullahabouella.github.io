import React from "react";
import { Bot, Database, FileBarChart, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { content } from "../data/i18n";

export function WorkBehindScreens() {
  const { language } = useLanguage();
  const t = content[language].behind;
  const icons = [Database, ShieldCheck, FileBarChart, Bot];

  return (
    <section
      id="work-behind-screens"
      className="py-32 sm:py-40 relative z-10 bg-[#F5F0E6]/72 overflow-hidden border-y border-[#B88A2C]/12"
    >
      <div className="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[680px] rounded-full bg-[#B88A2C]/8 blur-[160px] pointer-events-none"></div>
      <div className="max-w-[90rem] mx-auto px-6 lg:px-12 relative z-10">
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

        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-10 items-stretch">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {t.cards.map((card: any, idx: number) => {
              const Icon = icons[idx] || Database;
              return (
                <motion.article
                  key={card.title}
                  initial={{ opacity: 0, y: 36 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-70px" }}
                  transition={{
                    delay: idx * 0.08,
                    duration: 0.75,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="glass-panel rounded-[1.7rem] p-7 border border-[#B88A2C]/14 hover:border-[#B88A2C]/32 transition-all duration-700"
                >
                  <div className="w-12 h-12 rounded-full bg-white/70 border border-[#B88A2C]/18 flex items-center justify-center text-[#8C6724] mb-6 shadow-[0_14px_32px_rgba(74,53,19,0.08)]">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-serif font-light text-[#17110b] mb-4">
                    {card.title}
                  </h3>
                  <p className="text-[#3E3329] text-sm leading-relaxed font-medium whitespace-pre-line">
                    {card.text}
                  </p>
                </motion.article>
              );
            })}
          </div>

          <motion.aside
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ delay: 0.15 }}
            className="glass-panel rounded-[2rem] p-7 sm:p-9 border border-[#B88A2C]/18 flex flex-col justify-between overflow-hidden relative"
          >
            <div className="absolute top-[-14%] end-[-14%] w-64 h-64 rounded-full bg-[#B88A2C]/12 blur-[70px]"></div>
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {t.stats.map((stat: any) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-[#8A641E]/14 bg-white/58 p-5"
                >
                  <p className="text-3xl font-serif text-gradient-gold font-light mb-2">
                    {stat.value}
                  </p>
                  <p className="text-[#3E3329] text-xs font-bold leading-relaxed uppercase tracking-[0.12em]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="relative z-10 rounded-[1.6rem] bg-[#17110b] text-white p-7 shadow-[0_24px_60px_rgba(39,26,10,0.18)] border border-[#D9B96E]/20">
              <div className="flex items-center gap-1.5 mb-6">
                <span className="w-2.5 h-2.5 rounded-full bg-[#D9B96E]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#C9AB67]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#9A6E22]"></span>
              </div>
              <p className="font-serif text-2xl sm:text-3xl font-light leading-tight text-white">
                “{t.quote}”
              </p>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
