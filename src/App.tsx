import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Background } from './components/Background';
import { BuilderDNA } from './components/BuilderDNA';
import { Process } from './components/Process';
import { Projects } from './components/Projects';
import { WorkBehindScreens } from './components/WorkBehindScreens';
import { AiDemos } from './components/AiDemos';
import { Skills } from './components/Skills';
import { About } from './components/About';
import { WhyWorkWithMe } from './components/WhyWorkWithMe';
import { Footer } from './components/Footer';
import { Chatbot } from './components/Chatbot';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider, useTheme } from './context/ThemeContext';

function PortfolioShell() {
  const { theme } = useTheme();

  return (
      <div className={`portfolio-shell theme-${theme} min-h-screen bg-[#F5F0E6] text-[#221911] selection:bg-[#B88A2C] selection:text-white`}>
        {/* Ethereal light luxury background */}
        <div className="site-background fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#F5F0E6]">
          <Background
            className="w-full h-full opacity-35 mix-blend-multiply"
            animation={{ scale: 34, speed: 15 }}
            noise={{ opacity: 0.65, scale: 0.75 }}
            color="rgba(36, 36, 34, 1)"
          />
          <div className="background-radial-overlay absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.82),rgba(245,240,230,0.78)_42%,rgba(230,215,191,0.68)_100%)] z-10"></div>
          <div className="luxury-grid-glow z-10"></div>
          <div className="luxury-silk-sheen z-10"></div>
          <div className="gold-thread thread-one z-10"></div>
          <div className="gold-thread thread-two z-10"></div>
          <div className="ambient-orb orb-one z-10"></div>
          <div className="ambient-orb orb-two z-10"></div>
          <div className="ambient-orb orb-three z-10"></div>
          <div className="top-light-wash absolute inset-x-0 top-0 h-[45vh] bg-gradient-to-b from-white/70 via-[#F5F0E6]/55 to-transparent z-10"></div>
          <div className="bottom-gold-glow absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[1100px] h-[650px] bg-[#B88A2C]/10 blur-[150px] rounded-full z-10"></div>
        </div>

        <Header />

        <main className="relative z-20 w-full overflow-hidden">
          <Hero />
          <BuilderDNA />
          <Process />
          <Projects />
          <WorkBehindScreens />
          <AiDemos />
          <Skills />
          <About />
          <WhyWorkWithMe />
        </main>

        <Footer />
        <Chatbot />
      </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <PortfolioShell />
      </LanguageProvider>
    </ThemeProvider>
  );
}
