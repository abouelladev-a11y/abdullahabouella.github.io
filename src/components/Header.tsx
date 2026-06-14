import React, { useState, useEffect } from 'react';
import { openCalendly } from '../utils/calendly';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/i18n';
import { useTheme } from '../context/ThemeContext';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, isRtl } = useLanguage();
  const { theme, toggleTheme, isDark } = useTheme();
  const t = content[language];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkClass = language === 'ar'
    ? 'text-[15px] lg:text-[16px] text-[#5D5145] hover:text-[#9A6E22] transition-all duration-500 font-medium tracking-normal whitespace-nowrap'
    : 'text-[11px] lg:text-[12px] text-[#5D5145] hover:text-[#9A6E22] transition-all duration-500 tracking-[0.18em] uppercase font-semibold whitespace-nowrap';

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`site-header fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex justify-center ${isScrolled ? 'py-4 px-4' : 'py-6 px-4 lg:px-6'}`}
    >
      <div className={`w-full max-w-[100rem] mx-auto transition-all duration-700 ${isScrolled ? 'luxury-header py-3 px-6 lg:px-8 rounded-full' : 'py-2 px-3'}`}>
        <div className="grid grid-cols-[minmax(13rem,auto)_1fr_auto] items-center gap-5 lg:gap-10">
          <a href="#" className={`flex-shrink-0 flex items-center gap-3 lg:gap-4 group min-w-0 ${isRtl ? 'justify-self-end' : 'justify-self-start'}`}>
            <div className="w-11 h-11 rounded-full overflow-hidden border border-[#B88A2C]/55 bg-[#17110b] shadow-[0_14px_35px_rgba(91,67,25,0.16)] ring-2 ring-white/60 transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_18px_45px_rgba(91,67,25,0.24)]">
              <img src="/abdo-logo.jpg" alt="Abdo logo" className="w-full h-full object-cover" />
            </div>
            <span className={`${language === 'ar' ? 'text-[14px] lg:text-[15px] tracking-normal font-semibold' : 'text-[11px] lg:text-[12px] tracking-[0.18em] uppercase font-semibold'} text-[#1B140E] hidden xl:block group-hover:text-[#9A6E22] transition-colors duration-500 whitespace-nowrap`}>
              {t.header.name}
            </span>
          </a>

          <nav className="hidden md:flex items-center justify-center gap-6 xl:gap-9 min-w-0 px-3">
            {t.nav.map((link: any) => (
              <a key={link.label} href={link.href} className={navLinkClass}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className={`hidden md:flex items-center gap-3 lg:gap-5 ${isRtl ? 'justify-self-start' : 'justify-self-end'}`}>
            <button
              onClick={toggleLanguage}
              className={`${language === 'ar' ? 'text-[14px]' : 'text-xs uppercase tracking-[0.08em]'} text-[#9A6E22] hover:text-[#1B140E] transition-colors font-bold whitespace-nowrap`}
            >
              {language === 'en' ? 'عربي' : 'EN'}
            </button>
            <button
              onClick={toggleTheme}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              title={isDark ? 'Light mode' : 'Dark mode'}
              className="theme-toggle-btn h-11 w-11 rounded-full border border-[#B88A2C]/28 bg-white/45 text-[#1B140E] hover:bg-[#B88A2C] hover:text-white transition-all duration-500 flex items-center justify-center shadow-[0_12px_28px_rgba(54,40,19,0.08)] shrink-0"
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              onClick={openCalendly}
              className={`${language === 'ar' ? 'text-[13px] tracking-normal px-6 lg:px-8' : 'text-[11px] tracking-[0.22em] uppercase px-5 lg:px-7'} font-bold text-[#1B140E] py-3 border border-[#B88A2C]/35 bg-white/40 hover:bg-[#B88A2C] hover:text-white hover:shadow-[0_18px_45px_rgba(139,103,37,0.22)] transition-all duration-500 rounded-full whitespace-nowrap`}
            >
              {t.header.bookBtn}
            </button>
          </div>

          <button className="md:hidden text-[#1B140E] hover:text-[#B88A2C] transition-colors justify-self-end" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="md:hidden absolute top-full left-4 right-4 mt-2 bg-[#FFFBF4]/95 backdrop-blur-xl border border-[#B88A2C]/20 p-6 flex flex-col gap-5 shadow-2xl rounded-2xl"
          >
            {t.nav.map((link: any) => (
              <a key={link.label} href={link.href} onClick={() => setMobileMenuOpen(false)} className={`${language === 'ar' ? 'text-[18px] font-medium' : 'text-lg font-serif'} text-[#221911] hover:text-[#9A6E22]`}>
                {link.label}
              </a>
            ))}
            <button
              onClick={(e) => {
                setMobileMenuOpen(false);
                openCalendly(e);
              }}
              className="w-full text-center font-bold uppercase tracking-[0.18em] text-sm bg-gradient-gold text-white px-5 py-4 mt-2 rounded-full"
            >
              {t.header.bookBtn}
            </button>
            <button
              onClick={() => { toggleLanguage(); setMobileMenuOpen(false); }}
              className="w-full text-center text-[#9A6E22] uppercase font-bold tracking-[0.08em] border border-[#B88A2C]/20 py-3 rounded-full mt-1"
            >
              {language === 'en' ? 'عربي' : 'English'}
            </button>
            <button
              onClick={() => { toggleTheme(); setMobileMenuOpen(false); }}
              className="theme-toggle-btn w-full flex items-center justify-center gap-3 text-[#1B140E] uppercase font-bold tracking-[0.08em] border border-[#B88A2C]/20 py-3 rounded-full mt-1 bg-white/45"
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
              {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
