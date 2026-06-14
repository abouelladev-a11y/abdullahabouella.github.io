import React from "react";
import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { content } from "../data/i18n";

export function About() {
  const { language, isRtl } = useLanguage();
  const t = content[language].about;

  return (
    <section
      id="about"
      className="py-32 sm:py-40 relative z-10 bg-[#F9F4EB]/70 border-t border-[#B88A2C]/14"
    >
      <div className="max-w-[90rem] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="text-[#8C6724] text-[10px] tracking-[0.4em] uppercase font-bold mb-6 block">
              {t.badge}
            </span>
            <h2 className="text-5xl md:text-6xl font-serif text-[#17110b] mb-8 font-light leading-tight">
              {t.title[0]}{" "}
              <span className="text-gradient-gold italic">{t.title[1]}</span>
            </h2>
            <p
              className={`text-[#33281E] text-lg leading-relaxed font-medium whitespace-pre-line ${isRtl ? "font-sans" : ""}`}
            >
              {t.body}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.12 }}
            className="glass-panel rounded-[2rem] p-8 sm:p-10"
          >
            <div className="space-y-5">
              {t.points.map((point: string) => (
                <div
                  key={point}
                  className="flex gap-4 rounded-2xl border border-[#8A641E]/12 bg-white/58 p-5"
                >
                  <CheckCircle2
                    className="text-[#8C6724] shrink-0 mt-1"
                    size={18}
                  />
                  <p className="text-[#2E251D] leading-relaxed font-medium">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
