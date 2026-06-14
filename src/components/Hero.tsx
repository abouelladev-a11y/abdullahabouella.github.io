import React from "react";
import { openCalendly } from "../utils/calendly";
import {
  ArrowRight,
  FileText,
  Search,
  Database,
  ServerCog,
  LayoutDashboard,
  Bot,
  Rocket,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { content } from "../data/i18n";

export function Hero() {
  const { language, isRtl } = useLanguage();
  const t = content[language].hero;

  const buildSteps = language === "ar"
    ? [
        { icon: Search, label: "فهم التشغيل", detail: "الاحتياج، الأدوار، المشاكل، والاستثناءات" },
        { icon: Database, label: "تصميم البيانات", detail: "Schema، علاقات، صلاحيات، وحالات" },
        { icon: ServerCog, label: "بناء المنطق", detail: "Backend، قواعد العمل، والربط" },
        { icon: LayoutDashboard, label: "الواجهة والتقارير", detail: "شاشات، لوحات، وتجربة استخدام واضحة" },
        { icon: Bot, label: "الأتمتة والإطلاق", detail: "AI، Webhooks، واستخدام فعلي داخل الشركة" },
      ]
    : [
        { icon: Search, label: "Understand the operation", detail: "business need, users, pain points, exceptions" },
        { icon: Database, label: "Design the data model", detail: "schema, relations, permissions, states" },
        { icon: ServerCog, label: "Build the backend logic", detail: "rules, actions, integrations, security" },
        { icon: LayoutDashboard, label: "Create the interface + reports", detail: "screens, dashboards, visibility, bilingual UX" },
        { icon: Bot, label: "Automate and launch", detail: "AI, webhooks, handoff, a system ready to run" },
      ];

  const capabilityCards = language === "ar"
    ? [
        { value: "0 → 100", label: "من احتياج العمل إلى نظام يعمل فعلاً" },
        { value: "Full-stack", label: "قاعدة بيانات، Backend، UI، تقارير، وأتمتة" },
        { value: "Custom", label: "مبني حول طريقة عمل الشركة، لا قالب جاهز" },
      ]
    : [
        { value: "0 → 100", label: "from business need to working system" },
        { value: "Full-stack", label: "database, backend, UI, reports, automation" },
        { value: "Custom", label: "built around the business, not around a template" },
      ];

  const rightIntro = language === "ar"
    ? "أبني المنتج كمنظومة واحدة: قاعدة بيانات واضحة، منطق تشغيل مضبوط، واجهة عملية، تقارير مفهومة، وتكاملات أو أتمتة عندما تضيف قيمة حقيقية."
    : "I build the product as one connected system: clear data, solid logic, practical screens, useful reports, and automation only where it creates real value.";

  const outputLine = language === "ar"
    ? "الناتج: نظام مخصص جاهز للتشغيل والنمو"
    : "Output: a custom system ready to run and grow";

  const stackLine = "React · Supabase · Oracle · SQL · .NET · AI Automation";

  return (
    <section className="relative min-h-[96svh] flex items-center pt-32 sm:pt-36 pb-24 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-[78%] bg-[radial-gradient(circle_at_12%_18%,rgba(184,138,44,0.20),transparent_34%),radial-gradient(circle_at_86%_12%,rgba(18,16,12,0.12),transparent_30%)] pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#7A520F]/22 to-transparent" />

      <div className="max-w-[94rem] mx-auto px-6 lg:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 xl:grid-cols-[1.08fr_0.92fr] gap-14 xl:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className={`${isRtl ? "text-right" : "text-left"}`}
          >
            <div className="mb-10 max-w-4xl">
              <p className="text-[#8C6724] text-[9px] sm:text-[10px] lg:text-[11px] font-extrabold uppercase tracking-[0.18em] sm:whitespace-nowrap mb-4">
                {t.eyebrow}
              </p>
              <div className="inline-flex items-center gap-4 rounded-full border border-[#8A641E]/18 bg-[#FFF9EF]/76 px-5 py-3 shadow-[0_18px_42px_rgba(54,40,19,0.08)]">
                <div className="w-11 h-11 rounded-full border border-[#B88A2C]/30 bg-white/70 flex items-center justify-center shrink-0">
                  <img src="/abdo-logo.jpg" alt="Abdo logo" className="w-8 h-8 rounded-full object-cover" />
                </div>
                <p className="text-[#17110b] text-sm sm:text-[15px] font-semibold tracking-[0.18em] uppercase whitespace-nowrap">
                  {t.brand}
                </p>
              </div>
            </div>

            <h1 className={`hero-title text-[clamp(3.35rem,7.3vw,7.6rem)] leading-[0.92] tracking-tight mb-8 ${isRtl ? "hero-title-rtl" : ""}`}>
              <span className="block text-[#12100C] font-sans font-black tracking-[-0.08em] max-w-[11ch]">
                {t.title[0]}
              </span>
              <span className="block text-gradient-gold font-serif italic font-light mt-4 tracking-[-0.035em] max-w-[12ch]">
                {t.title[1]}
              </span>
            </h1>

            <p className="text-[#33281E] text-lg sm:text-[1.34rem] leading-relaxed max-w-3xl mb-10 font-medium whitespace-pre-line">
              {t.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 w-full mb-10">
              <a href="#projects" className="group relative px-10 py-5 bg-[#12100C] text-white font-bold uppercase tracking-[0.2em] text-[11px] rounded-full overflow-hidden transition-all duration-700 hover:scale-[1.02] hover:shadow-[0_24px_55px_rgba(18,16,12,0.25)] flex items-center justify-center w-full sm:w-auto">
                <span className="relative z-10 flex items-center gap-3">
                  {t.exploreBtn}
                  <ArrowRight size={16} className={`${isRtl ? "rotate-180 group-hover:-translate-x-1" : "group-hover:translate-x-1"} transition-transform duration-500`} />
                </span>
                <div className="absolute inset-0 bg-[#B88A2C] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
              </a>

              <button onClick={openCalendly} className="group flex items-center justify-center gap-3 px-10 py-5 border border-[#A97717]/45 text-[#17110b] bg-[#FFF9EF]/82 font-bold uppercase tracking-[0.2em] text-[11px] rounded-full transition-all duration-700 hover:border-[#A97717]/75 hover:bg-white w-full sm:w-auto hover:text-[#7A520F] shadow-[0_18px_45px_rgba(54,40,19,0.08)]">
                {t.bookBtn}
              </button>

              <a href="/Abdullah_Abouella_Resume.docx" download="Abdullah_Abouella_Resume.docx" className="flex items-center justify-center gap-3 text-[#4B4035] hover:text-[#7A520F] px-4 py-4 uppercase tracking-[0.2em] text-[10px] font-extrabold transition-colors duration-500 sm:w-auto">
                <FileText size={14} />
                <span className="border-b border-[#A97717]/30 hover:border-[#A97717] transition-all pb-1 duration-500">{t.resumeBtn}</span>
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-4xl">
              {capabilityCards.map((card) => (
                <div key={card.value} className="rounded-[1.2rem] border border-[#8A641E]/18 bg-[#FFF9EF]/76 px-5 py-5 shadow-[0_14px_34px_rgba(54,40,19,0.07)]">
                  <p className="text-[#12100C] text-xl font-serif font-light mb-2">{card.value}</p>
                  <p className="text-[#4B4035] text-[11px] font-extrabold uppercase tracking-[0.14em] leading-relaxed">{card.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 34, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="hero-showcase relative xl:pt-8"
          >
            <div className="hero-showcase-glow" />
            <article className="relative rounded-[2.5rem] bg-[#12100C] text-[#F7EFE2] border border-[#D9B96E]/24 shadow-[0_44px_120px_rgba(24,18,10,0.38)] overflow-hidden">
              <div className="absolute inset-0 opacity-[0.11] bg-[linear-gradient(rgba(216,183,97,0.36)_1px,transparent_1px),linear-gradient(90deg,rgba(216,183,97,0.34)_1px,transparent_1px)] bg-[size:40px_40px]" />
              <div className="absolute top-[-18%] end-[-10%] w-96 h-96 rounded-full bg-[#B88A2C]/24 blur-[95px]" />
              <div className="absolute bottom-[-22%] start-[-14%] w-[32rem] h-[32rem] rounded-full bg-white/[0.05] blur-[120px]" />

              <div className="relative z-10 p-6 sm:p-8 lg:p-9">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-[#D9B96E]/18 pb-6 mb-7">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#D9B96E]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#8C6724]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#F4EDDF]" />
                  </div>
                  <span className="text-[#D8B761] text-[10px] font-black uppercase tracking-[0.28em]">
                    {language === "ar" ? "بناء النظام من البداية للنهاية" : "End-to-end system delivery"}
                  </span>
                </div>

                <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.05] p-6 sm:p-7 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#D8B761]/14 border border-[#D8B761]/22 flex items-center justify-center text-[#D8B761] shrink-0">
                      <Rocket size={18} strokeWidth={1.7} />
                    </div>
                    <div>
                      <p className="text-[#D8B761] text-[10px] font-black uppercase tracking-[0.24em] mb-2">
                        {language === "ar" ? "ما الذي أبنيه" : "What I deliver"}
                      </p>
                      <h2 className="section-dark-heading text-[1.9rem] sm:text-[2.35rem] font-serif font-light leading-tight mb-3 text-white">
                        {language === "ar" ? "من الاحتياج إلى نظام كامل" : "From business need to complete system"}
                      </h2>
                      <p className="text-[#D8CDBD] text-sm sm:text-[15px] leading-relaxed font-medium">
                        {rightIntro}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative rounded-[1.7rem] border border-white/10 bg-[#17130f]/84 p-5 sm:p-6">
                  <div className={`absolute ${isRtl ? "right-[1.95rem]" : "left-[1.95rem]"} top-8 bottom-8 w-px bg-gradient-to-b from-[#D8B761]/0 via-[#D8B761]/38 to-[#D8B761]/0`} />
                  <div className="space-y-4 relative z-10">
                    {buildSteps.map(({ icon: Icon, label, detail }, index) => (
                      <div key={label} className="grid grid-cols-[auto_1fr] gap-4 rounded-[1.2rem] border border-white/8 bg-white/[0.03] p-4 hover:border-[#D8B761]/28 transition-all duration-500">
                        <div className="relative z-10 w-11 h-11 rounded-2xl bg-[#D8B761]/14 border border-[#D8B761]/22 flex items-center justify-center text-[#D8B761] shadow-[0_12px_28px_rgba(0,0,0,0.18)]">
                          <Icon size={17} strokeWidth={1.6} />
                        </div>
                        <div>
                          <div className="flex items-center justify-between gap-4 mb-1.5">
                            <p className="text-[#F7EFE2] text-sm font-black uppercase tracking-[0.1em]">{label}</p>
                            <span className="text-[#D8B761]/78 text-[10px] font-mono">0{index + 1}</span>
                          </div>
                          <p className="text-[#D8CDBD] text-xs sm:text-sm leading-relaxed font-medium">{detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="rounded-[1.4rem] bg-[#F4EDDF] text-[#12100C] p-5 border border-[#D8B761]/25">
                    <div className="flex items-center gap-3 mb-2">
                      <ShieldCheck size={16} className="text-[#7A520F]" />
                      <span className="text-[10px] font-black uppercase tracking-[0.20em]">
                        {language === "ar" ? "الناتج النهائي" : "Final output"}
                      </span>
                    </div>
                    <p className="text-[#33281E] text-sm font-semibold leading-relaxed">{outputLine}</p>
                  </div>
                  <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.05] p-5">
                    <div className="flex items-center gap-3 mb-2 text-[#D8B761]">
                      <CheckCircle2 size={16} />
                      <span className="text-[10px] font-black uppercase tracking-[0.20em]">
                        {language === "ar" ? "الستاك" : "Working stack"}
                      </span>
                    </div>
                    <p className="text-[#F7EFE2] text-sm font-semibold leading-relaxed">{stackLine}</p>
                  </div>
                </div>
              </div>
            </article>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
