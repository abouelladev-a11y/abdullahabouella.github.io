import React from "react";
import { Building2, Database, Workflow, Languages, TerminalSquare } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { content } from "../data/i18n";

export function BuilderDNA() {
  const { language } = useLanguage();
  const t = content[language].builder;
  const icons = [Building2, Database, Workflow, Languages];

  return (
    <section id="builder-dna" className="py-28 sm:py-36 relative z-10 section-dark bg-[#12100C] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(rgba(216,183,97,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(216,183,97,0.5)_1px,transparent_1px)] bg-[size:58px_58px]" />
      <div className="absolute top-[-16%] start-[-10%] w-[600px] h-[600px] rounded-full bg-[#B88A2C]/20 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[-24%] end-[-8%] w-[620px] h-[620px] rounded-full bg-white/8 blur-[140px] pointer-events-none" />

      <div className="max-w-[92rem] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[0.72fr_1.28fr] gap-12 lg:gap-16 items-start">
          <motion.div initial={{ opacity: 0, y: 34 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} className="lg:sticky lg:top-32">
            <span className="text-[#D8B761] text-[10px] tracking-[0.4em] uppercase font-extrabold mb-6 block">{t.badge}</span>
            <h2 className="text-5xl md:text-6xl font-serif text-white mb-7 font-light leading-tight">
              {t.title[0]} <span className="text-[#D8B761] italic">{t.title[1]}</span>
            </h2>
            <p className="text-[#D8CDBD] text-lg leading-relaxed font-medium max-w-xl whitespace-pre-line">{t.subtitle}</p>

            <div className="mt-10 rounded-[1.7rem] p-6 border border-[#D8B761]/18 bg-white/[0.055] overflow-hidden">
              <div className="flex items-center gap-3 mb-5 text-[#D8B761]">
                <TerminalSquare size={18} />
                <span className="text-[10px] font-extrabold uppercase tracking-[0.28em]">Builder Console</span>
              </div>
              <div className="space-y-3 font-mono text-[12px] leading-relaxed">
                <p><span className="text-[#D8B761]">input:</span> <span className="text-[#F7EFE2]">{t.console.input}</span></p>
                <p><span className="text-[#D8B761]">thinking:</span> <span className="text-[#F7EFE2]">{t.console.thinking}</span></p>
                <p><span className="text-[#D8B761]">output:</span> <span className="text-[#F7EFE2]">{t.console.output}</span></p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {t.cards.map((card: any, idx: number) => {
              const Icon = icons[idx] || Building2;
              return (
                <motion.article key={card.title} initial={{ opacity: 0, y: 34 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-70px" }} transition={{ delay: idx * 0.08, duration: 0.75, ease: [0.16, 1, 0.3, 1] }} className="group rounded-[1.8rem] p-7 sm:p-8 border border-[#D8B761]/15 bg-white/[0.06] hover:bg-white/[0.09] hover:border-[#D8B761]/32 transition-all duration-700 min-h-[320px] flex flex-col">
                  <div className="flex items-center justify-between mb-10">
                    <div className="w-13 h-13 rounded-2xl bg-[#D8B761]/12 border border-[#D8B761]/18 flex items-center justify-center text-[#D8B761] shadow-[0_14px_32px_rgba(0,0,0,0.14)] group-hover:-translate-y-1 transition-transform duration-500">
                      <Icon size={22} strokeWidth={1.5} />
                    </div>
                    <span className="font-mono text-[#D8B761]/70 text-xs">0{idx + 1}</span>
                  </div>
                  <h3 className="text-2xl font-serif font-light text-white mb-5 group-hover:text-[#D8B761] transition-colors">{card.title}</h3>
                  <p className="text-[#D8CDBD] text-sm leading-relaxed font-medium whitespace-pre-line mt-auto">{card.text}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
