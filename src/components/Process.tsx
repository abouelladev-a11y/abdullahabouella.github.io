import React from "react";
import { Search, Database, GitBranch, LayoutDashboard, Bot } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { content } from "../data/i18n";

export function Process() {
  const { language } = useLanguage();
  const t = content[language].process;
  const icons = [Search, Database, GitBranch, LayoutDashboard, Bot];

  return (
    <section id="process" className="py-32 sm:py-40 relative z-10 overflow-hidden bg-[#F4EDDF]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#A97717]/26 to-transparent" />
      <div className="max-w-[92rem] mx-auto px-6 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} className="grid grid-cols-1 lg:grid-cols-[0.72fr_1.28fr] gap-8 lg:gap-16 mb-16 sm:mb-20 items-end">
          <div>
            <span className="text-[#714B0D] text-[10px] tracking-[0.4em] uppercase font-extrabold mb-6 block">{t.badge}</span>
            <h2 className="text-5xl md:text-6xl font-serif text-[#12100C] font-light leading-tight">
              {t.title[0]} <span className="text-gradient-gold italic">{t.title[1]}</span>
            </h2>
          </div>
          <p className="text-base text-[#3E3329] max-w-3xl font-medium tracking-wide leading-relaxed whitespace-pre-line lg:pb-2">{t.subtitle}</p>
        </motion.div>

        <div className="relative rounded-[2.2rem] border border-[#8A641E]/18 bg-[#FFF9EF]/76 shadow-[0_28px_80px_rgba(54,40,19,0.10)] p-5 sm:p-7 lg:p-9 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.13] bg-[linear-gradient(rgba(122,82,15,0.22)_1px,transparent_1px),linear-gradient(90deg,rgba(122,82,15,0.18)_1px,transparent_1px)] bg-[size:48px_48px]" />
          <div className="relative z-10">
            <div className="hidden xl:block absolute top-[5.3rem] start-[8%] end-[8%] h-px bg-gradient-to-r from-transparent via-[#7A520F]/35 to-transparent" />
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-5 lg:gap-4">
              {t.steps.map((step: any, idx: number) => {
                const Icon = icons[idx] || Search;
                return (
                  <motion.article key={step.label} initial={{ opacity: 0, y: 38 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-70px" }} transition={{ delay: idx * 0.08, duration: 0.75, ease: [0.16, 1, 0.3, 1] }} className="relative rounded-[1.6rem] p-7 border border-[#8A641E]/14 bg-white/64 hover:bg-white/90 hover:border-[#8A641E]/30 transition-all duration-700">
                    <div className="flex items-center justify-between mb-8">
                      <span className="text-[#714B0D] text-[10px] font-extrabold tracking-[0.3em] uppercase">{step.label}</span>
                      <div className="w-12 h-12 rounded-2xl bg-[#12100C] text-white flex items-center justify-center shadow-[0_18px_42px_rgba(57,39,16,0.18)] relative z-10">
                        <Icon size={18} strokeWidth={1.5} />
                      </div>
                    </div>
                    <h3 className="text-xl font-serif font-light text-[#12100C] mb-4">{step.title}</h3>
                    <p className="text-[#3E3329] text-sm leading-relaxed font-medium whitespace-pre-line">{step.text}</p>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-12 flex justify-center">
          <p className="inline-flex text-center rounded-full border border-[#B88A2C]/22 bg-[#12100C] px-7 py-4 text-white text-sm font-extrabold tracking-[0.12em] uppercase shadow-[0_18px_45px_rgba(18,16,12,0.16)]">{t.closing}</p>
        </motion.div>
      </div>
    </section>
  );
}
