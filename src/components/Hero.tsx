import React from "react";
import { openCalendly } from "../utils/calendly";
import { ArrowRight, FileText, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { content } from "../data/i18n";

export function Hero() {
  const { language, isRtl } = useLanguage();
  const t = content[language].hero;

  return (
    <section className="relative min-h-[100svh] flex items-center pt-32 pb-20 overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-6 lg:px-12 relative z-10 w-full">
        <div className="max-w-6xl mx-auto text-center hero-copy-wrap">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8 flex flex-col items-center"
          >
            {t.eyebrow && (
              <span className="text-[#714B0D] text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.32em] mb-5">
                {t.eyebrow}
              </span>
            )}
            <span className="inline-flex items-center gap-3 rounded-full border border-[#8A641E]/22 bg-white/70 px-5 py-3 shadow-[0_18px_45px_rgba(54,40,19,0.10)] backdrop-blur-md">
              <img
                src="/abdo-logo.jpg"
                alt="Abdo logo"
                className="w-8 h-8 rounded-full object-cover border border-[#B88A2C]/35"
              />
              <span className="text-[#17110b] text-[11px] font-black uppercase tracking-[0.25em]">
                {t.brand}
              </span>
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 38 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={`hero-title text-[clamp(3.1rem,8.2vw,8rem)] leading-[0.98] tracking-tight mb-9 text-center mx-auto ${isRtl ? "hero-title-rtl font-serif" : ""}`}
          >
            <span className="block text-[#17110b] font-sans font-black tracking-[-0.075em] mx-auto">
              {t.title[0]}
            </span>
            <span className="block text-gradient-gold font-serif italic font-light mt-4 tracking-[-0.035em] mx-auto">
              {t.title[1]}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className={`text-[#33281E] text-lg sm:text-xl leading-relaxed max-w-4xl mx-auto mb-10 font-medium whitespace-pre-line ${isRtl ? "font-sans" : ""}`}
          >
            {t.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 w-full mb-12 justify-center"
          >
            <a
              href="#projects"
              className="group relative px-10 py-5 bg-[#17110b] text-white font-bold uppercase tracking-[0.2em] text-[11px] rounded-full overflow-hidden transition-all duration-700 hover:scale-[1.02] hover:shadow-[0_24px_55px_rgba(57,39,16,0.24)] flex items-center justify-center w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center gap-3">
                {t.exploreBtn}
                <ArrowRight
                  size={16}
                  className={`${isRtl ? "rotate-180 group-hover:-translate-x-1" : "group-hover:translate-x-1"} transition-transform duration-500`}
                />
              </span>
              <div className="absolute inset-0 bg-[#A97717] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]"></div>
            </a>

            <button
              onClick={openCalendly}
              className="group flex items-center justify-center gap-3 px-10 py-5 border border-[#A97717]/45 text-[#17110b] bg-white/70 font-bold uppercase tracking-[0.2em] text-[11px] rounded-full transition-all duration-700 hover:border-[#A97717]/75 hover:bg-white/95 w-full sm:w-auto hover:text-[#7A520F] shadow-[0_18px_45px_rgba(54,40,19,0.08)]"
            >
              {t.bookBtn}
            </button>

            <a
              href="/Abdullah_Abouella_Resume.docx"
              download="Abdullah_Abouella_Resume.docx"
              className="flex items-center justify-center gap-3 text-[#4B4035] hover:text-[#7A520F] px-4 py-4 uppercase tracking-[0.2em] text-[10px] font-extrabold transition-colors duration-500 sm:w-auto"
            >
              <FileText size={14} />
              <span className="border-b border-[#A97717]/30 hover:border-[#A97717] transition-all pb-1 duration-500">
                {t.resumeBtn}
              </span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto max-w-5xl rounded-[1.6rem] border border-[#8A641E]/18 bg-white/68 shadow-[0_28px_70px_rgba(54,40,19,0.12)] backdrop-blur-xl p-4 sm:p-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {t.proofPoints.map((point: string) => (
                <div
                  key={point}
                  className={`flex items-center gap-3 rounded-2xl border border-[#8A641E]/12 bg-[#FFF9F0]/70 px-4 py-4 text-[#2E251D] text-[12px] font-bold leading-snug ${isRtl ? "justify-end" : ""}`}
                >
                  <CheckCircle2 size={16} className="text-[#8C6724] shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
