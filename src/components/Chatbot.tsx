import { useEffect } from 'react';

export function Chatbot() {
  useEffect(() => {
    const containerId = 'VG_OVERLAY_CONTAINER';
    
    // Prevent multiple injections
    if (document.getElementById(containerId)) return;

    const container = document.createElement('div');
    container.style.width = '0';
    container.style.height = '0';
    container.id = containerId;
    document.body.appendChild(container);

    (window as any).VG_CONFIG = {
        ID: "6WOX2N75P35y39Bs",
        region: 'na',
        render: 'bottom-right',
        stylesheets: [
            "https://vg-bunny-cdn.b-cdn.net/vg_live_build/styles.css"
        ],
    };

    const script = document.createElement("script");
    script.src = "https://vg-bunny-cdn.b-cdn.net/vg_live_build/vg_bundle.js";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(container)) document.body.removeChild(container);
      if (document.body.contains(script)) document.body.removeChild(script);
      delete (window as any).VG_CONFIG;
    };
  }, []);

  return null;
}
