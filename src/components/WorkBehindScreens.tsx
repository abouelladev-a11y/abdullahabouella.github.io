import React from "react";
import { Bot, Database, FileBarChart, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { content } from "../data/i18n";

export function WorkBehindScreens() {
  const { language, isRtl } = useLanguage();
  const t = content[language].behind;
  const icons = [Database, ShieldCheck, FileBarChart, Bot];

  return (
    <section id="work-behind-screens" className="py-32 sm:py-40 relative z-10 section-dark bg-[#12100C] text-white overflow-hidden border-y border-[#D8B761]/12">
      <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(rgba(216,183,97,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(216,183,97,0.5)_1px,transparent_1px)] bg-[size:54px_54px]" />
      <div className="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[680px] rounded-full bg-[#B88A2C]/16 blur-[160px] pointer-events-none" />
      <div className="max-w-[92rem] mx-auto px-6 lg:px-12 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} className="grid grid-cols-1 lg:grid-cols-[0.78fr_1.22fr] gap-8 lg:gap-16 mb-16 sm:mb-20 items-end">
          <div>
            <span className="text-[#D8B761] text-[10px] tracking-[0.4em] uppercase font-extrabold mb-6 block">{t.badge}</span>
            <h2 className="text-5xl md:text-6xl font-serif text-white mb-0 font-light leading-tight">
              {t.title[0]} <span className="text-[#D8B761] italic">{t.title[1]}</span>
            </h2>
          </div>
          <p className="text-base text-[#D8CDBD] max-w-3xl font-medium tracking-wide leading-relaxed whitespace-pre-line">{t.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-10 items-stretch">
          <div className="rounded-[2rem] border border-[#D8B761]/16 bg-white/[0.055] p-5 sm:p-7 lg:p-8">
            <div className="space-y-4">
              {t.cards.map((card: any, idx: number) => {
                const Icon = icons[idx] || Database;
                return (
                  <motion.article key={card.title} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-70px" }} transition={{ delay: idx * 0.08, duration: 0.75, ease: [0.16, 1, 0.3, 1] }} className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-5 rounded-[1.5rem] border border-white/10 bg-white/[0.055] p-6 hover:bg-white/[0.08] transition-all duration-700">
                    <div className="w-14 h-14 rounded-2xl bg-[#D8B761]/12 border border-[#D8B761]/18 flex items-center justify-center text-[#D8B761] shadow-[0_14px_32px_rgba(0,0,0,0.14)]">
                      <Icon size={21} strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-[#D8B761] text-[10px] font-black tracking-[0.26em] uppercase mb-2">0{idx + 1} / Layer</p>
                      <h3 className="text-2xl font-serif font-light text-white mb-3">{card.title}</h3>
                      <p className="text-[#D8CDBD] text-sm leading-relaxed font-medium whitespace-pre-line">{card.text}</p>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>

          <motion.aside initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-70px" }} transition={{ delay: 0.15 }} className="rounded-[2rem] p-7 sm:p-9 border border-[#D8B761]/18 flex flex-col justify-between overflow-hidden relative bg-[#F4EDDF] text-[#12100C]">
            <div className="absolute top-[-14%] end-[-14%] w-64 h-64 rounded-full bg-[#B88A2C]/20 blur-[70px]" />
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {t.stats.map((stat: any) => (
                <div key={stat.label} className="rounded-2xl border border-[#8A641E]/14 bg-white/58 p-5">
                  <p className="text-3xl font-serif text-gradient-gold font-light mb-2">{stat.value}</p>
                  <p className="text-[#3E3329] text-xs font-black leading-relaxed uppercase tracking-[0.12em]">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="relative z-10 rounded-[1.6rem] bg-[#12100C] text-white p-7 shadow-[0_24px_60px_rgba(39,26,10,0.18)] border border-[#D9B96E]/20">
              <div className="flex items-center gap-1.5 mb-6">
                <span className="w-2.5 h-2.5 rounded-full bg-[#D9B96E]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#C9AB67]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#9A6E22]" />
              </div>
              <p className={`${isRtl ? "font-serif text-[1.8rem] sm:text-[2.35rem] lg:text-[2.75rem] leading-[1.85] font-normal" : "font-serif text-2xl sm:text-3xl font-light leading-tight"} text-white`}>
                “{t.quote}”
              </p>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
