import React from "react";
import { CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { content } from "../data/i18n";

export function WhyWorkWithMe() {
  const { language } = useLanguage();
  const t = content[language].why;

  return (
    <section className="py-28 sm:py-36 relative z-10 bg-[#F5F0E6]/72 border-t border-[#B88A2C]/14">
      <div className="max-w-[90rem] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.12 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {t.cards.map((card: string, idx: number) => (
              <div
                key={card}
                className="glass-panel rounded-[1.5rem] p-6 border border-[#B88A2C]/14 flex gap-4 items-start"
              >
                <CheckCircle2
                  className="text-[#8C6724] shrink-0 mt-1"
                  size={18}
                />
                <p className="text-[#2E251D] leading-relaxed font-bold text-sm">
                  {card}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
