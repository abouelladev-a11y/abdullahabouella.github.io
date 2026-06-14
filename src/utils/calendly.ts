import type { MouseEvent } from 'react';
export const openCalendly = (e?: MouseEvent) => {
  e?.preventDefault();

  const setModalOpen = () => document.body.classList.add('modal-open');
  const clearModalOpen = () => document.body.classList.remove('modal-open');
  const watchCalendlyClose = () => {
    window.setTimeout(() => {
      const timer = window.setInterval(() => {
        const calendlyOverlay = document.querySelector('.calendly-overlay');
        if (!calendlyOverlay) {
          window.clearInterval(timer);
          clearModalOpen();
        }
      }, 350);

      window.setTimeout(() => {
        window.clearInterval(timer);
        if (!document.querySelector('.calendly-overlay')) {
          clearModalOpen();
        }
      }, 30_000);
    }, 650);
  };

  setModalOpen();
  watchCalendlyClose();
  
  // Check if styles were already injected
  if (!document.getElementById('calendly-css')) {
    const link = document.createElement('link');
    link.id = 'calendly-css';
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }

  // Load and execute script
  const scriptId = 'calendly-script';
  if (!document.getElementById(scriptId)) {
    const script = document.createElement('script');
    script.id = scriptId;
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.onload = () => {
      if ((window as any).Calendly) {
        (window as any).Calendly.initPopupWidget({ url: 'https://calendly.com/abouella-dev/30min' });
      }
    };
    script.onerror = () => clearModalOpen();
    document.body.appendChild(script);
  } else {
    if ((window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({ url: 'https://calendly.com/abouella-dev/30min' });
    }
  }
};
