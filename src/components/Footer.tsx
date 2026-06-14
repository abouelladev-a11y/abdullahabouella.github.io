import React from "react";
import { Mail, MessageCircle, ArrowRight } from "lucide-react";
import { openCalendly } from "../utils/calendly";
import { getContactLinks } from "../utils/contactLinks";
import { useLanguage } from "../context/LanguageContext";
import { content } from "../data/i18n";

export function Footer() {
  const { language, isRtl } = useLanguage();
  const t = content[language].footer;
  const { emailHref, whatsappHref } = getContactLinks(language);

  return (
    <footer id="contact" className="relative z-10 section-dark bg-[#12100C] text-white pt-32 sm:pt-36 pb-12 overflow-hidden border-t border-[#D8B761]/16">
      <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(rgba(216,183,97,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(216,183,97,0.5)_1px,transparent_1px)] bg-[size:58px_58px]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#B88A2C]/16 blur-[180px] pointer-events-none translate-y-1/2" />

      <div className="max-w-[92rem] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center mb-24 sm:mb-28">
          <div>
            <div className="inline-flex items-center gap-4 mb-10 opacity-90">
              <span className="w-12 h-px bg-[#B88A2C]" />
              <span className="text-[#D8B761] text-[9px] tracking-[0.5em] uppercase font-bold">{t.badge}</span>
            </div>

            <h2 className={`text-4xl md:text-[4.8rem] text-white mb-7 leading-[1.05] tracking-tight max-w-5xl ${isRtl ? "font-serif" : ""}`}>
              <span className={isRtl ? "font-serif font-light" : "font-sans font-black tracking-[-0.055em]"}>{t.title[0]}</span>{" "}
              <br className="hidden md:block" />
              <span className="text-[#D8B761] italic font-serif font-light">{t.title[1]}</span>
            </h2>

            <p className="text-[#D8CDBD] font-medium leading-relaxed max-w-2xl mb-11">{t.subtitle}</p>
          </div>

          <div className="rounded-[2rem] border border-[#D8B761]/16 bg-white/[0.055] p-6 sm:p-8">
            <div className="space-y-4">
              <button onClick={openCalendly} className="group relative px-8 py-5 bg-[#F4EDDF] text-[#12100C] font-bold uppercase tracking-[0.2em] text-[10px] hover:scale-[1.01] transition-all duration-700 shadow-[0_24px_55px_rgba(0,0,0,0.18)] rounded-full overflow-hidden w-full flex items-center justify-center gap-4">
                {t.bookBtn}
                <ArrowRight size={14} className={`${isRtl ? "rotate-180 group-hover:-translate-x-1" : "group-hover:translate-x-1"} transition-transform`} />
              </button>
              <a href={emailHref} aria-label={language === "ar" ? "إرسال بريد إلكتروني إلى عبدالله" : "Send an email to Abdullah"} className="px-8 py-5 border border-[#D8B761]/24 text-white bg-white/[0.05] font-bold uppercase tracking-[0.2em] text-[10px] rounded-full transition-all duration-700 hover:border-[#D8B761]/45 hover:bg-white/[0.10] w-full text-center inline-flex items-center justify-center gap-3">
                <Mail size={14} strokeWidth={1.8} />
                {t.emailBtn}
              </a>
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label={language === "ar" ? "التواصل مع عبدالله عبر واتساب" : "Message Abdullah on WhatsApp"} className="px-8 py-5 border border-[#D8B761]/24 text-white bg-white/[0.05] font-bold uppercase tracking-[0.2em] text-[10px] rounded-full transition-all duration-700 hover:border-[#D8B761]/45 hover:bg-white/[0.10] w-full text-center inline-flex items-center justify-center gap-3">
                <MessageCircle size={14} strokeWidth={1.8} />
                {t.whatsappBtn}
              </a>
            </div>
          </div>
        </div>

        <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-[#D8B761]/18">
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 rounded-full overflow-hidden border border-[#B88A2C]/45 bg-[#17110b] shadow-[0_18px_45px_rgba(0,0,0,0.18)] ring-2 ring-white/10">
              <img src="/abdo-logo.jpg" alt="Abdo logo" className="w-full h-full object-cover" />
            </div>
            <span className="text-white/85 font-bold tracking-[0.3em] text-[10px] uppercase">{t.name}</span>
          </div>

          <div className="text-[10px] text-[#D8CDBD] font-semibold text-center md:text-end uppercase tracking-[0.24em] max-w-xl leading-relaxed">{t.rights}</div>
        </div>
      </div>
    </footer>
  );
}
