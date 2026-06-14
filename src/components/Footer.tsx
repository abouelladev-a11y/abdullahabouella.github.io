import React from "react";
import { Mail, MessageCircle } from "lucide-react";
import { openCalendly } from "../utils/calendly";
import { getContactLinks } from "../utils/contactLinks";
import { useLanguage } from "../context/LanguageContext";
import { content } from "../data/i18n";

export function Footer() {
  const { language, isRtl } = useLanguage();
  const t = content[language].footer;
  const { emailHref, whatsappHref } = getContactLinks(language);

  return (
    <footer className="relative z-10 bg-[#F2E8D8]/86 pt-32 sm:pt-36 pb-12 overflow-hidden border-t border-[#B88A2C]/16">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#B88A2C]/25 to-transparent"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#B88A2C]/10 blur-[180px] pointer-events-none translate-y-1/2"></div>

      <div className="max-w-[90rem] mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col items-center text-center mb-24 sm:mb-28">
          <div className="inline-flex items-center justify-center gap-4 mb-10 opacity-85">
            <span className="w-12 h-px bg-[#B88A2C]"></span>
            <span className="text-[#8C6724] text-[9px] tracking-[0.5em] uppercase font-bold">
              {t.badge}
            </span>
            <span className="w-12 h-px bg-[#B88A2C]"></span>
          </div>

          <h2
            className={`text-4xl md:text-[4.8rem] text-[#17110b] mb-7 leading-[1.05] tracking-tight max-w-5xl ${isRtl ? "font-serif" : ""}`}
          >
            <span
              className={
                isRtl
                  ? "font-serif font-light"
                  : "font-sans font-black tracking-[-0.055em]"
              }
            >
              {t.title[0]}
            </span>{" "}
            <br className="hidden md:block" />
            <span className="text-gradient-gold italic font-serif font-light">
              {t.title[1]}
            </span>
          </h2>

          <p className="text-[#33281E] font-medium leading-relaxed max-w-2xl mb-11">
            {t.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={openCalendly}
              className="group relative px-12 py-5 bg-[#17110b] text-white font-bold uppercase tracking-[0.2em] text-[10px] hover:scale-[1.02] transition-all duration-700 shadow-[0_24px_55px_rgba(57,39,16,0.18)] hover:shadow-[0_32px_70px_rgba(139,103,37,0.25)] rounded-full overflow-hidden w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center justify-center gap-4">
                {t.bookBtn}
                <div className="w-1.5 h-1.5 rounded-full bg-[#D8B761] group-hover:bg-white transition-colors duration-500"></div>
              </span>
              <div className="absolute inset-0 bg-[#B88A2C] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.16,1,0.3,1]"></div>
            </button>
            <a
              href={emailHref}
              aria-label={
                language === "ar"
                  ? "إرسال بريد إلكتروني إلى عبدالله"
                  : "Send an email to Abdullah"
              }
              className="px-12 py-5 border border-[#A97717]/45 text-[#17110b] bg-white/70 font-bold uppercase tracking-[0.2em] text-[10px] rounded-full transition-all duration-700 hover:border-[#A97717]/75 hover:bg-white/95 hover:text-[#7A520F] shadow-[0_18px_45px_rgba(54,40,19,0.08)] w-full sm:w-auto text-center inline-flex items-center justify-center gap-3"
            >
              <Mail size={14} strokeWidth={1.8} />
              {t.emailBtn}
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={
                language === "ar"
                  ? "التواصل مع عبدالله عبر واتساب"
                  : "Message Abdullah on WhatsApp"
              }
              className="px-12 py-5 border border-[#A97717]/45 text-[#17110b] bg-white/70 font-bold uppercase tracking-[0.2em] text-[10px] rounded-full transition-all duration-700 hover:border-[#A97717]/75 hover:bg-white/95 hover:text-[#7A520F] shadow-[0_18px_45px_rgba(54,40,19,0.08)] w-full sm:w-auto text-center inline-flex items-center justify-center gap-3"
            >
              <MessageCircle size={14} strokeWidth={1.8} />
              {t.whatsappBtn}
            </a>
          </div>
        </div>

        <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-[#B88A2C]/18">
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 rounded-full overflow-hidden border border-[#B88A2C]/45 bg-[#17110b] shadow-[0_18px_45px_rgba(91,67,25,0.18)] ring-2 ring-white/70">
              <img
                src="/abdo-logo.jpg"
                alt="Abdo logo"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-[#17110b]/85 font-bold tracking-[0.3em] text-[10px] uppercase">
              {t.name}
            </span>
          </div>

          <div className="text-[10px] text-[#6B6258] font-semibold text-center md:text-end uppercase tracking-[0.24em] max-w-xl leading-relaxed">
            {t.rights}
          </div>
        </div>
      </div>
    </footer>
  );
}
