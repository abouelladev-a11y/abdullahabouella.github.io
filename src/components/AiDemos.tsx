import React from "react";
import { localizedAiDemos } from "../data/projects";
import {
  Bot,
  ExternalLink,
  Mic,
  Workflow,
  CalendarCheck,
  MessagesSquare,
} from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { content } from "../data/i18n";

export function AiDemos() {
  const { language, isRtl } = useLanguage();
  const t = content[language].demos;
  const aiDemos = localizedAiDemos[language];
  const icons = [MessagesSquare, Workflow, CalendarCheck];

  return (
    <section
      id="ai-systems"
      className="py-36 sm:py-40 relative z-10 overflow-hidden bg-[#F9F4EB]/78"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#B88A2C]/20 to-transparent"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[#B88A2C]/8 blur-[160px] rounded-[100%] z-0 pointer-events-none"></div>

      <div className="max-w-[90rem] mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20 sm:mb-24"
        >
          <span className="text-[#8C6724] text-[10px] tracking-[0.4em] uppercase font-bold mb-6 block">
            {t.badge}
          </span>
          <h2 className="text-5xl md:text-6xl font-serif text-[#17110b] mb-8 font-light">
            {t.title[0]}
            {t.title[1] ? (
              <>
                {" "}
                <span className="text-gradient-gold italic">{t.title[1]}</span>
              </>
            ) : null}
          </h2>
          <p className="text-base text-[#3E3329] font-medium max-w-3xl mx-auto tracking-wide leading-relaxed whitespace-pre-line">
            {t.subtitle}
          </p>
          {t.note ? (
            <p className="text-xs text-[#6A5845] font-semibold max-w-2xl mx-auto mt-5 tracking-wide">
              {t.note}
            </p>
          ) : null}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          className="glass-panel rounded-[2rem] p-7 sm:p-9 mb-10 sm:mb-14 border border-[#B88A2C]/16 overflow-hidden relative"
        >
          <div className="absolute top-[-35%] end-[-10%] w-80 h-80 rounded-full bg-[#B88A2C]/12 blur-[80px] pointer-events-none"></div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[0.72fr_1.28fr] gap-8 lg:gap-10 items-start">
            <div className="flex gap-5 items-start">
              <div className="w-16 h-16 rounded-full bg-[#17110b] text-white flex items-center justify-center shadow-[0_22px_55px_rgba(57,39,16,0.22)] border border-[#D9B96E]/20 shrink-0">
                <Bot size={27} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-3xl font-serif font-light text-[#17110b] mb-3">
                  {t.laraTitle}
                </h3>
                <p className="text-[#3E3329] text-sm font-medium tracking-wide leading-relaxed whitespace-pre-line">
                  {t.laraText}
                </p>
              </div>
            </div>
            <div>
              <p className="text-[#6A5845] text-[10px] font-extrabold uppercase tracking-[0.28em] mb-4">
                {t.laraSubtitle}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {t.prompts.map((prompt: string) => (
                  <div
                    key={prompt}
                    className="rounded-2xl border border-[#8A641E]/14 bg-white/62 px-5 py-4 text-[#2E251D] text-sm font-semibold leading-relaxed"
                  >
                    “{prompt}”
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {aiDemos.map((demo, idx) => {
            const Icon = icons[idx] || Mic;
            return (
              <motion.article
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: idx * 0.12,
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -8 }}
                className="relative glass-panel p-10 sm:p-12 flex flex-col group overflow-hidden rounded-2xl transition-all duration-700 hover:shadow-[0_30px_70px_rgba(77,54,20,0.16)] border border-[#B88A2C]/12 hover:border-[#B88A2C]/28"
              >
                <div
                  className={`absolute top-0 w-40 h-40 bg-[#B88A2C]/10 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none -translate-y-1/2 ${isRtl ? "start-0 -translate-x-1/2" : "end-0 translate-x-1/2"}`}
                ></div>
                <div className="relative z-10 w-14 h-14 bg-white/65 flex items-center justify-center mb-10 border border-[#B88A2C]/18 group-hover:border-[#B88A2C]/35 transition-all duration-500 rounded-full text-[#8C6724] shadow-[0_14px_35px_rgba(74,53,19,0.08)]">
                  <Icon size={22} strokeWidth={1.5} />
                </div>
                <h3 className="relative z-10 text-2xl font-serif text-[#17110b] mb-5 group-hover:text-[#8C6724] transition-colors tracking-tight font-light">
                  {demo.title}
                </h3>
                <p className="relative z-10 text-[#3E3329] text-[14px] mb-10 flex-grow tracking-wide font-medium leading-relaxed">
                  {demo.description}
                </p>
                <a
                  href={demo.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="relative z-10 flex items-center justify-between text-[10px] tracking-[0.3em] uppercase font-bold text-[#17110b] border-t border-[#B88A2C]/14 pt-6 group-hover:border-[#B88A2C]/28 transition-all duration-500 hover:text-[#8C6724]"
                >
                  <span>{t.launch}</span>
                  <ExternalLink
                    size={14}
                    strokeWidth={1.5}
                    className={`${isRtl ? "group-hover:-translate-x-1" : "group-hover:translate-x-1"} transition-transform duration-500`}
                  />
                </a>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
