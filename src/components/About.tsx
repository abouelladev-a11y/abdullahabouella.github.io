import React from "react";
import { motion } from "motion/react";
import { CheckCircle2, ArrowUpRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { content } from "../data/i18n";

export function About() {
  const { language, isRtl } = useLanguage();
  const t = content[language].about;

  return (
    <section id="about" className="py-32 sm:py-40 relative z-10 bg-[#FFF9EF]/74 border-t border-[#B88A2C]/14 overflow-hidden">
      <div className="absolute top-[-20%] end-[-15%] w-[720px] h-[720px] rounded-full bg-[#B88A2C]/9 blur-[150px]" />
      <div className="max-w-[92rem] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[0.88fr_1.12fr] gap-12 lg:gap-20 items-start">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} className="rounded-[2rem] section-dark bg-[#12100C] text-white p-7 sm:p-9 border border-[#D8B761]/18 shadow-[0_34px_90px_rgba(18,16,12,0.22)]">
            <div className="flex items-center justify-between gap-4 mb-12">
              <span className="text-[#D8B761] text-[10px] tracking-[0.4em] uppercase font-bold block">{t.badge}</span>
              <ArrowUpRight size={18} className="text-[#D8B761]" />
            </div>
            <h2 className="text-5xl md:text-6xl font-serif text-white mb-8 font-light leading-tight">
              {t.title[0]} <span className="text-[#D8B761] italic">{t.title[1]}</span>
            </h2>
            <p className={`text-[#D8CDBD] text-lg leading-relaxed font-medium whitespace-pre-line ${isRtl ? "font-sans" : ""}`}>{t.body}</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ delay: 0.12 }} className="space-y-5">
            {t.points.map((point: string, index: number) => (
              <div key={point} className="grid grid-cols-[auto_1fr] gap-5 rounded-[1.7rem] border border-[#8A641E]/14 bg-white/70 p-6 sm:p-7 shadow-[0_18px_45px_rgba(54,40,19,0.07)]">
                <div className="w-12 h-12 rounded-2xl bg-[#12100C] text-white flex items-center justify-center shrink-0">
                  <CheckCircle2 size={18} className="text-[#D8B761]" />
                </div>
                <div>
                  <p className="font-mono text-[#8C6724] text-xs mb-2">0{index + 1}</p>
                  <p className="text-[#2E251D] leading-relaxed font-semibold">{point}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
