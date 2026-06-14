import React from "react";
import { localizedAiDemos } from "../data/projects";
import { Bot, ExternalLink, Mic, Workflow, CalendarCheck, MessagesSquare } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { content } from "../data/i18n";

export function AiDemos() {
  const { language, isRtl } = useLanguage();
  const t = content[language].demos;
  const aiDemos = localizedAiDemos[language];
  const icons = [MessagesSquare, Workflow, CalendarCheck];

  const labMeta = language === "ar"
    ? [
        ["Trigger", "سؤال أو مكالمة أو عميل جديد"],
        ["Logic", "تصنيف النية + قواعد العمل"],
        ["Output", "رد واضح + إجراء منظم"],
      ]
    : [
        ["Trigger", "Question, call, or new lead"],
        ["Logic", "Intent + rules + routing"],
        ["Output", "Answer + structured action"],
      ];

  return (
    <section id="ai-systems" className="py-36 sm:py-40 relative z-10 overflow-hidden bg-[#F4EDDF]">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#B88A2C]/20 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[#B88A2C]/8 blur-[160px] rounded-[100%] z-0 pointer-events-none" />

      <div className="max-w-[92rem] mx-auto px-6 lg:px-12 relative z-10">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} className="grid grid-cols-1 lg:grid-cols-[0.78fr_1.22fr] gap-8 lg:gap-16 mb-16 sm:mb-20 items-end">
          <div>
            <span className="text-[#8C6724] text-[10px] tracking-[0.4em] uppercase font-bold mb-6 block">{t.badge}</span>
            <h2 className="text-5xl md:text-6xl font-serif text-[#12100C] mb-0 font-light leading-tight">
              {t.title[0]} {t.title[1] ? <span className="text-gradient-gold italic">{t.title[1]}</span> : null}
            </h2>
          </div>
          <p className="text-base text-[#3E3329] font-medium max-w-3xl tracking-wide leading-relaxed whitespace-pre-line">{t.subtitle}</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-70px" }} className="rounded-[2rem] p-6 sm:p-8 mb-10 sm:mb-14 border border-[#12100C]/12 overflow-hidden relative bg-[#12100C] text-white shadow-[0_34px_90px_rgba(18,16,12,0.20)]">
          <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(rgba(216,183,97,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(216,183,97,0.5)_1px,transparent_1px)] bg-[size:44px_44px]" />
          <div className="absolute top-[-35%] end-[-10%] w-80 h-80 rounded-full bg-[#B88A2C]/18 blur-[80px] pointer-events-none" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[0.72fr_1.28fr] gap-8 lg:gap-10 items-start">
            <div className="flex gap-5 items-start">
              <div className="w-16 h-16 rounded-2xl bg-[#D8B761]/12 text-[#D8B761] flex items-center justify-center shadow-[0_22px_55px_rgba(0,0,0,0.22)] border border-[#D9B96E]/20 shrink-0">
                <Bot size={27} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-3xl font-serif font-light text-white mb-3">{t.laraTitle}</h3>
                <p className="text-[#D8CDBD] text-sm font-medium tracking-wide leading-relaxed whitespace-pre-line">{t.laraText}</p>
              </div>
            </div>
            <div>
              <p className="text-[#D8B761] text-[10px] font-extrabold uppercase tracking-[0.28em] mb-4">{t.laraSubtitle}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {t.prompts.map((prompt: string) => (
                  <div key={prompt} className="rounded-2xl border border-white/10 bg-white/[0.055] px-5 py-4 text-[#F4EADB] text-sm font-semibold leading-relaxed">“{prompt}”</div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {aiDemos.map((demo, idx) => {
            const Icon = icons[idx] || Mic;
            return (
              <motion.article key={idx} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ delay: idx * 0.12, duration: 0.8, ease: [0.16, 1, 0.3, 1] }} whileHover={{ y: -8 }} className="relative p-8 sm:p-9 flex flex-col group overflow-hidden rounded-[1.8rem] transition-all duration-700 hover:shadow-[0_30px_70px_rgba(77,54,20,0.16)] border border-[#8A641E]/14 hover:border-[#8A641E]/32 bg-[#FFF9EF]/78">
                <div className={`absolute top-0 w-40 h-40 bg-[#B88A2C]/10 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none -translate-y-1/2 ${isRtl ? "start-0 -translate-x-1/2" : "end-0 translate-x-1/2"}`} />
                <div className="relative z-10 flex items-center justify-between mb-8">
                  <div className="w-14 h-14 bg-[#12100C] flex items-center justify-center border border-[#B88A2C]/18 rounded-2xl text-white shadow-[0_14px_35px_rgba(74,53,19,0.12)]">
                    <Icon size={22} strokeWidth={1.5} />
                  </div>
                  <span className="font-mono text-[#8C6724] text-xs">LAB / 0{idx + 1}</span>
                </div>
                <h3 className="relative z-10 text-2xl font-serif text-[#12100C] mb-4 group-hover:text-[#8C6724] transition-colors tracking-tight font-light">{demo.title}</h3>
                <p className="relative z-10 text-[#3E3329] text-[14px] mb-7 flex-grow tracking-wide font-medium leading-relaxed">{demo.description}</p>
                <div className="relative z-10 grid gap-2 mb-8">
                  {labMeta.map(([label, value]) => (
                    <div key={label} className="grid grid-cols-[5.2rem_1fr] gap-3 rounded-xl border border-[#8A641E]/12 bg-white/58 px-3 py-2 text-xs">
                      <span className="text-[#8C6724] font-black uppercase tracking-[0.16em]">{label}</span>
                      <span className="text-[#2E251D] font-semibold">{value}</span>
                    </div>
                  ))}
                </div>
                <a href={demo.url} target="_blank" rel="noreferrer noopener" className="relative z-10 flex items-center justify-between text-[10px] tracking-[0.3em] uppercase font-bold text-[#12100C] border-t border-[#B88A2C]/14 pt-6 group-hover:border-[#B88A2C]/28 transition-all duration-500 hover:text-[#8C6724]">
                  <span>{t.launch}</span>
                  <ExternalLink size={14} strokeWidth={1.5} className={`${isRtl ? "group-hover:-translate-x-1" : "group-hover:translate-x-1"} transition-transform duration-500`} />
                </a>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
